const fs = require('fs');
const path = require('path');

const dirs = [
  'home_shreeji_parlour',
  'about_us_shreeji_parlour',
  'services_shreeji_parlour',
  'service_details_shreeji_parlour',
  'packages_pricing_shreeji_parlour',
  'gallery_shreeji_parlour',
  'our_team_shreeji_parlour',
  'contact_us_shreeji_parlour',
  'book_appointment_shreeji_parlour'
];

const urls = new Map();

dirs.forEach(d => {
  const p = path.join(__dirname, '..', 'stitch_reference', d, 'code.html');
  if (fs.existsSync(p)) {
    const text = fs.readFileSync(p, 'utf8');
    const regex = /<img[^>]+src="([^">]+)"[^>]*alt="([^">]*)"/g;
    let m;
    while ((m = regex.exec(text)) !== null) {
      if (!urls.has(m[1])) {
        urls.set(m[1], { alt: m[2], pages: [d] });
      } else {
        urls.get(m[1]).pages.push(d);
      }
    }
  }
});

console.log(`Found ${urls.size} unique images:`);
for (const [url, info] of urls.entries()) {
  console.log(`- Alt: "${info.alt}" | Pages: [${info.pages.join(', ')}] | URL: ${url}`);
}
