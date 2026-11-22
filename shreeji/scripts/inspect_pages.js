const fs = require('fs');
const path = require('path');

const dirs = [
  'about_us_shreeji_parlour',
  'services_shreeji_parlour',
  'service_details_shreeji_parlour',
  'packages_pricing_shreeji_parlour',
  'gallery_shreeji_parlour',
  'our_team_shreeji_parlour',
  'contact_us_shreeji_parlour',
  'book_appointment_shreeji_parlour'
];

dirs.forEach(d => {
  const p = path.join(__dirname, '..', 'stitch_reference', d, 'code.html');
  if (fs.existsSync(p)) {
    const text = fs.readFileSync(p, 'utf8');
    const mainMatch = text.match(/<main[\s\S]*?<\/main>/);
    console.log(`\n================== ${d} ==================`);
    if (mainMatch) {
      // Find all h1, h2, h3, and section tags
      const headings = [...mainMatch[0].matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/g)].map(m => `${m[1]}: ${m[2].replace(/<[^>]+>/g, '').trim()}`);
      console.log('Headings:\n', headings.join('\n'));
    }
  }
});
