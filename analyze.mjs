import fs from 'fs';

const html = fs.readFileSync('product_page.html', 'utf8');

// Strip out scripts, styles
const cleanHtml = html
  .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
  .replace(/<head>[\s\S]*?<\/head>/gi, '')
  .replace(/<nav>[\s\S]*?<\/nav>/gi, ''); // remove main nav maybe

// Let's try to extract the main content container
const mainMatch = cleanHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/i) || cleanHtml.match(/<div[^>]*class="[^"]*site-main[^"]*"[^>]*>([\s\S]*?)<\/div\s*<!-- \.site-main -->/i);
let mainContent = mainMatch ? mainMatch[1] : cleanHtml;

// Strip HTML tags and leave text
const text = mainContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

console.log("EXTRACTED TEXT DUMP:");
console.log(text.substring(0, 3000));
