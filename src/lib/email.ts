
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || 'xqenzeno';

export const sendEmail = async (templateParams: Record<string, any>) => {
  if (!FORMSPREE_ID || FORMSPREE_ID.includes('aqui')) {
    console.warn("Formspree ID not configured. Falling back to console log.");
    console.log("Email Data:", templateParams);
    return { status: 200, text: 'OK (Simulated)' };
  }

  try {
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(templateParams)
    });

    if (response.ok) {
      return { status: 200, text: 'OK' };
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al enviar el formulario');
    }
  } catch (error) {
    console.error("Formspree Error:", error);
    throw error;
  }
};
