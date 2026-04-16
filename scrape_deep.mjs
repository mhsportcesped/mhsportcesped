import fs from 'fs';

async function fetchHtml(url) {
  try {
    const res = await fetch(url);
    return await res.text();
  } catch(e){
    return "";
  }
}

async function scrapeDeep() {
  const products = JSON.parse(fs.readFileSync('product_details.json', 'utf8'));
  const deepDetails = [];

  for (let prod of products) {
    console.log("Deep scraping", prod.url);
    const html = await fetchHtml(prod.url);
    
    // Extract full description
    let fullDescription = "";
    // Usually wooCommerce full description is in a tab panel div
    const descMatch = html.match(/<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"[^>]*>([\s\S]*?)<\/div>\s*<div class="woocommerce-Tabs-panel/i);
    if (descMatch) {
      // Just extract text or keep HTML. Let's keep it clean
      // Remove specific structural tags but keep paragraphs perhaps? 
      // For now, let's grab raw text but preserve spacing
      fullDescription = descMatch[1].replace(/<[^>]+>/g, '\n').replace(/\n\s*\n/g, '\n\n').trim();
    } else {
        // alternative matching
        const altMatch = html.match(/<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"[^>]*>([\s\S]*?)<\/div>/i);
        if (altMatch) {
            fullDescription = altMatch[1].replace(/<[^>]+>/g, '\n').replace(/\n\s*\n/g, '\n\n').trim();
        }
    }

    // Extract all gallery images
    const images = [];
    // in woocommerce, gallery images are often inside .woocommerce-product-gallery__wrapper
    const galleryMatch = html.match(/<div class="woocommerce-product-gallery__wrapper">([\s\S]*?)<\/div>/i);
    if (galleryMatch) {
        const imgTags = [...galleryMatch[1].matchAll(/<a href="([^"]+)"/g)];
        if (imgTags.length > 0) {
            imgTags.forEach(m => images.push(m[1]));
        } else {
            const fallbackTags = [...galleryMatch[1].matchAll(/src="([^"]+)"/g)];
            fallbackTags.forEach(m => {
                let img = m[1].replace(/-\d+x\d+/, ''); // basic full size attempts
                images.push(img);
            });
        }
    }

    // Fallback if gallery didn't catch everything
    if (images.length === 0) {
        const fallimg = html.match(/<meta property="og:image" content="([^"]+)"/);
        if (fallimg) images.push(fallimg[1]);
    }
    
    // De-duplicate images
    const uniqueImages = [...new Set(images)];

    deepDetails.push({
      url: prod.url,
      name: prod.name,
      longDesc: fullDescription,
      gallery: uniqueImages
    });
  }

  fs.writeFileSync('deep_product_details.json', JSON.stringify(deepDetails, null, 2));
  console.log("Done scraping deep details.");
}

scrapeDeep();
