import fs from 'fs';

async function fetchHtml(url) {
  const res = await fetch(url);
  return await res.text();
}

async function run() {
  const urls = [
    'https://mhsportcesped.es/tienda-cesped-artificial/',
    'https://mhsportcesped.es/tienda-cesped-artificial/page/2/',
    'https://mhsportcesped.es/categoria-producto/complementos-para-cesped-artificial/'
  ];

  const products = [];

  for (const url of urls) {
    try {
      const html = await fetchHtml(url);
      
      // Look for standard WooCommerce product items
      const items = html.split('<li class="').filter(item => item.includes('type-product'));
      
      for (const item of items) {
        let imgMatch = item.match(/<img[^>]+src="([^"]+)"/i);
        // Try looking for data-src if it's lazy loaded
        let lazyImgMatch = item.match(/<img[^>]+data-src="([^"]+)"/i);
        if (lazyImgMatch) imgMatch = lazyImgMatch;

        let nameMatch = item.match(/<h[23][^>]*>(.*?)<\/h[23]>/i);
        
        if (imgMatch && nameMatch) {
          // Clean up name
          let name = nameMatch[1].replace(/<[^>]+>/g, '').trim();
          products.push({
            name: name,
            image: imgMatch[1]
          });
        }
      }
    } catch (e) {
      console.error("Error fetching", url, e.message);
    }
  }

  fs.writeFileSync('scraped_products.json', JSON.stringify(products, null, 2));
  console.log("Done scraping.", products.length, "products found.");
}

run();
