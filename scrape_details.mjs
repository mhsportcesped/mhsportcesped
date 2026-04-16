import fs from 'fs';

async function fetchHtml(url) {
  const res = await fetch(url);
  return await res.text();
}

async function scrapeAll() {
  const uniqueUrls = new Set();
  
  const pages = [
      'https://mhsportcesped.es/tienda-cesped-artificial/',
      'https://mhsportcesped.es/tienda-cesped-artificial/page/2/',
      'https://mhsportcesped.es/tienda-cesped-artificial/page/3/',
      'https://mhsportcesped.es/categoria-producto/complementos-para-cesped-artificial/',
      'https://mhsportcesped.es/categoria-producto/rollos-completos/'
  ];
  
  for (let page of pages) {
      try {
          const html = await fetchHtml(page);
          
          // Split by <li> containing product
          const items = html.split('<li class="').filter(item => item.includes('type-product'));
          for (const item of items) {
             const match = item.match(/href="([^"]+)"/);
             if (match) uniqueUrls.add(match[1]);
          }
      } catch(e){
          console.error("Error on page", page);
      }
  }
  
  console.log("Found", uniqueUrls.size, "product links. Fetching details...");
  const details = [];
  
  // Convert to array to iterate
  const urlArray = Array.from(uniqueUrls);
  
  for (let url of urlArray) {
      try {
          console.log("Fetching", url);
          const html = await fetchHtml(url);
          
          let name = "";
          let nameMatch = html.match(/<h1 class="product_title entry-title">([\s\S]*?)<\/h1>/);
          if (nameMatch) name = nameMatch[1].replace(/<[^>]+>/g, '').trim();
          
          // Specs table (Información adicional)
          let specs = {};
          let tableMatch = html.match(/<table class="woocommerce-product-attributes shop_attributes">([\s\S]*?)<\/table>/);
          if (tableMatch) {
              let rows = [...tableMatch[1].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)];
              rows.forEach(r => {
                  let thMatch = r[1].match(/<th[^>]*>([\s\S]*?)<\/th>/);
                  let tdMatch = r[1].match(/<td[^>]*>([\s\S]*?)<\/td>/);
                  if (thMatch && tdMatch) {
                      let key = thMatch[1].replace(/<[^>]+>/g, '').trim();
                      let val = tdMatch[1].replace(/<[^>]+>/g, ' ').trim();
                      val = val.replace(/&nbsp;/g, ' '); // remove pesky html spaces
                      specs[key] = val;
                  }
              });
          }
          
          details.push({ url, name, specs });
      } catch (e) {
          console.error("Error with", url);
      }
  }
  
  fs.writeFileSync('product_details.json', JSON.stringify(details, null, 2));
  console.log("Done. Saved product_details.json");
}

scrapeAll();
