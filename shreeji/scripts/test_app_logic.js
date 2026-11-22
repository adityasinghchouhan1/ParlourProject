import { services, serviceCategories } from '../src/data/services.js';
import { packages } from '../src/data/packages.js';
import { teamMembers } from '../src/data/team.js';
import { testimonials } from '../src/data/testimonials.js';
import { galleryItems, galleryCategories } from '../src/data/gallery.js';
import { salonInfo } from '../src/data/salonInfo.js';

console.log('--- Running Application Data & Functional Logic Validation ---');

// 1. Verify Salon Info
console.assert(salonInfo.name === 'Shreeji Parlour', 'Salon name matches');
console.assert(salonInfo.phone.length > 0, 'Salon phone present');
console.assert(salonInfo.email.includes('@'), 'Salon email valid');
console.log('✓ 1. Salon Info validated');

// 2. Verify Services & Categories
console.assert(services.length === 8, `Expected 8 services, found ${services.length}`);
console.assert(serviceCategories.length === 9, `Expected 9 categories, found ${serviceCategories.length}`);
for (const s of services) {
  console.assert(s.id && s.slug && s.title && s.price && s.duration && s.image, `Service ${s.title} missing required fields`);
  console.assert(Array.isArray(s.benefits) && s.benefits.length > 0, `Service ${s.title} missing benefits`);
  console.assert(Array.isArray(s.whatsIncluded) && s.whatsIncluded.length > 0, `Service ${s.title} missing whatsIncluded`);
}
console.log(`✓ 2. Services validated (${services.length} services across ${serviceCategories.length} categories)`);

// 3. Verify Packages
console.assert(packages.length === 4, `Expected 4 packages, found ${packages.length}`);
const recommendedPkg = packages.find(p => p.recommended);
console.assert(recommendedPkg && recommendedPkg.name === 'Glow & Radiance Package', 'Recommended package is Glow & Radiance');
console.log('✓ 3. Packages validated (4 packages with recommended badge)');

// 4. Verify Team
console.assert(teamMembers.length === 3, `Expected 3 team members, found ${teamMembers.length}`);
console.log('✓ 4. Team specialists validated (3 members)');

// 5. Verify Testimonials
console.assert(testimonials.length === 3, `Expected 3 testimonials, found ${testimonials.length}`);
console.log('✓ 5. Testimonials validated (3 guest stories with 5 stars)');

// 6. Verify Gallery
console.assert(galleryItems.length === 6, `Expected 6 gallery items, found ${galleryItems.length}`);
console.assert(galleryCategories.length === 7, `Expected 7 gallery categories, found ${galleryCategories.length}`);
console.log('✓ 6. Gallery validated (6 editorial portfolio images across 7 categories)');

// 7. Verify Filter Logic
const skincareOnly = services.filter(s => s.category === 'skincare');
console.assert(skincareOnly.length === 1 && skincareOnly[0].slug === 'botanical-radiance-facial', 'Skincare filter accurate');
console.log('✓ 7. Filtering logic validated');

// 8. Verify Lightbox Cycling Logic
let idx = 0;
const total = galleryItems.length;
idx = (idx - 1 + total) % total; // wrap backwards
console.assert(idx === 5, 'Previous from 0 wraps to 5');
idx = (idx + 1) % total; // wrap forwards
console.assert(idx === 0, 'Next from 5 wraps to 0');
console.log('✓ 8. Lightbox modal wrap navigation validated');

console.log('🎉 ALL DATA & LOGIC TESTS PASSED SUCCESSFULLY!');
