import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, items, customerInfo } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects cents
      currency: 'eur',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        customerName: customerInfo?.name || 'N/A',
        customerEmail: customerInfo?.email || 'N/A',
        customerPhone: customerInfo?.phone || 'N/A',
        items: JSON.stringify(items?.map((item: any) => ({
          name: item.product.name,
          quantity: item.quantity,
          price: item.product.price
        }))).substring(0, 500) // Stripe metadata has a limit
      }
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err: any) {
    console.error('Stripe Error:', err);
    res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
}
