import skincare from './../assets/images/skincare.jpg'
import haircare from './../assets/images/haircare.jpg'
import bridal from './../assets/images/Bridalmakeup.jpg'
import softparty from './../assets/images/Softmakeup.jpg'
import waxing from './../assets/images/WaxingThreading.jpg'
import manipedi from './../assets/images/ManicurePedicure.jpg'
import nailart from './../assets/images/nails.jpg'
import bodycare from './../assets/images/BodyCare.jpg'
export const services = [
  {
    id: 'skincare-1',
    slug: 'botanical-radiance-facial',
    category: 'skincare',
    categoryLabel: 'Skin Care & Facial',
    title: 'Botanical Radiance Facial',
    shortTitle: 'Botanical Glow Facial',
    duration: '60 mins',
    price: '₹1,800',
    numericPrice: 1800,
    tag: '(Sample)',
    image: skincare,
    description:
      'Deep pore cleansing, rose-water enzyme exfoliation, and lymphatic facial massage for lasting glow.',
    fullDescription:
      "A restorative facial tailored to restore your skin's natural barrier. Using pure botanical extracts, rose-water hydrosols, and gentle enzymatic exfoliation, this treatment removes deep impurities without stripping delicate moisture. Completed with a soothing jade-stone lymphatic massage and antioxidant hydro-jelly mask.",
    benefits: [
      'Deeply decongests pores without abrasive scrubbing',
      'Restores moisture barrier with hyaluronic & rose botanicals',
      'Lymphatic drainage reduces facial puffiness and tension',
    ],
    whatsIncluded: [
      'Double rose-water cleanse & gentle steam therapy',
      'Enzymatic fruit peel & ultrasonic pore refinement',
      'Acupressure face, neck, and shoulder botanical massage',
      'Cooling botanical hydro-jelly mask & SPF protection',
    ],
    faqs: [
      {
        question: 'Is this facial suitable for acne-prone or sensitive skin?',
        answer:
          'Yes, our botanical formulas are hypoallergenic and fragrance-free. We do a personalized patch test and skin check before applying any active mask.',
      },
      {
        question: 'How long does the radiant glow last?',
        answer:
          'Clients experience instant luminosity that lasts 7 to 10 days. For consistent results, we recommend a monthly maintenance ritual.',
      },
      {
        question: 'Can I wear makeup immediately after the facial?',
        answer:
          'We recommend letting your skin breathe for at least 6 to 8 hours post-treatment to allow all nutrient serums to fully absorb.',
      },
    ],
  },
  {
    id: 'haircare-1',
    slug: 'signature-cut-silk-blowdry',
    category: 'haircare',
    categoryLabel: 'Hair Care & Styling',
    title: 'Signature Cut & Silk Blow-Dry',
    shortTitle: 'Hair Styling & Care',
    duration: '50 mins',
    price: '₹1,200',
    numericPrice: 1200,
    tag: '(Sample)',
    image: haircare,
    description:
      'Face-framing layers, nourishing wash, and frizz-free voluminous blow-dry styling.',
    fullDescription:
      'Transform your hair with a tailored consultation that complements your facial silhouette and daily lifestyle. Includes a luxurious wash with botanical shampoos, deep conditioning masque, precision shear cutting, and our signature silk thermal blow-dry that leaves hair feather-light and glossy.',
    benefits: [
      'Custom face-framing layers that enhance natural movement',
      'Weightless volume and frizz resistance lasting several days',
      'Split-end removal while preserving your preferred length',
    ],
    whatsIncluded: [
      'Botanical scalp cleansing & conditioning rinse',
      'Precision cut, texturizing, and split-end cleanup',
      'Heat protection shield with argan elixir',
      'Round-brush silk blow-dry & soft movement styling',
    ],
    faqs: [
      {
        question: 'How do I choose the best haircut for my face shape?',
        answer:
          'Our senior stylists evaluate your jawline, cheekbones, hair texture, and daily styling routine during your preliminary consultation.',
      },
      {
        question: 'Does the blow-dry use harsh heat?',
        answer:
          'No, we use ionic temperature-controlled styling tools with salon-grade thermal protectors to lock in moisture without heat distress.',
      },
    ],
  },
  {
    id: 'bridal-1',
    slug: 'hd-bridal-makeup-artistry',
    category: 'bridal',
    categoryLabel: 'Bridal Makeup',
    title: 'HD Bridal Makeup Artistry',
    shortTitle: 'Bridal Makeup',
    duration: '3 hrs',
    price: '₹14,999',
    numericPrice: 14999,
    tag: '(Sample)',
    image: bridal,
    description:
      'Long-wear luminous bridal makeup with skin prep, lash styling, floral hairdo, and draping.',
    fullDescription:
      'Designed for brides who want a luminous, skin-like finish that endures through warm ceremony lights, joyful tears, and evening celebrations. We customize every shade to your undertone, outfit palette, and jewelry. Held in our serene, private bridal suite with personalized refreshments and undivided attention.',
    benefits: [
      'Breathable, flash-friendly HD finish without caking or creasing',
      '14-hour sweat- and humidity-resistant wear designed for Indian wedding rituals',
      'Calm, private bridal suite with personal dressing assistance',
    ],
    whatsIncluded: [
      'Hydrating pre-makeup skin prep & specialized pore-refining primer',
      'Custom HD complexion, dimensional eye artistry & mink-free lashes',
      'Traditional hair styling, fresh floral setting & jewelry placement',
      'Saree, lehenga, and dupatta draping with secure pinning',
    ],
    faqs: [
      {
        question: 'How early should I book my bridal makeup?',
        answer:
          'We recommend reserving your wedding date 2 to 4 months in advance so we can schedule your pre-bridal skin consultation.',
      },
      {
        question: 'Do you offer a bridal makeup trial?',
        answer:
          'Yes, a dedicated 60-minute look consultation and shade trial can be booked prior to your ceremony.',
      },
      {
        question: 'Are hair extensions and fresh flowers included?',
        answer:
          'Traditional hair padding and pin setting are included; fresh floral gajras or custom extensions can be arranged on request.',
      },
    ],
  },
  {
    id: 'party-1',
    slug: 'soft-glam-party-makeup',
    category: 'party',
    categoryLabel: 'Party Makeup',
    title: 'Soft-Glam Party Makeup',
    shortTitle: 'Party Makeup',
    duration: '90 mins',
    price: '₹3,500',
    numericPrice: 3500,
    tag: '(Sample)',
    image: softparty,
    description:
      'Effortless evening radiance with soft rose-gold shimmer, sculpted brows, and hair styling.',
    fullDescription:
      'Perfect for sangeets, cocktail receptions, family celebrations, and festive parties. This look highlights your natural bone structure with velvety complexion prep, delicate rose-gold eyelids, defined lashes, and soft curl or textured updo styling.',
    benefits: [
      'Radiant evening finish that photographs beautifully in candlelight and stage lights',
      'Lightweight feel that lasts throughout the party without touch-ups',
      'Coordinated styling with your party attire and jewelry',
    ],
    whatsIncluded: [
      'Skin priming, sheer long-wear base & seamless blush contour',
      'Rose-gold shimmer or smokey eye artistry with flutter lashes',
      'Party hair setting: soft curls, sleek blowout, or half-up style',
      'Dupatta or scarf pin setting',
    ],
    faqs: [
      {
        question: 'Can I bring my own makeup reference photos?',
        answer:
          'Absolutely! We love seeing your outfit photos and inspirations, and our artist will adapt the look to your unique features.',
      },
      {
        question: 'How long does the party makeup take?',
        answer:
          'A complete party makeup and hair session takes approximately 75 to 90 minutes.',
      },
    ],
  },
  {
    id: 'waxing-1',
    slug: 'rica-waxing-brow-sculpting',
    category: 'waxing',
    categoryLabel: 'Waxing & Threading',
    title: 'Rica Waxing & Brow Sculpting',
    shortTitle: 'Waxing & Threading',
    duration: '45 mins',
    price: '₹950',
    numericPrice: 950,
    tag: '(Sample)',
    image: waxing,
    description:
      'Gentle Italian Rica liposoluble wax for silky skin paired with precision eyebrow threading.',
    fullDescription:
      'Experience near-painless hair removal with authentic Italian Rica liposoluble wax. Enriched with vegetable oils and natural resin, it gently extracts hair from the root without adhering harshly to live skin cells. Paired with hygienic thread shaping for arch-defining brows.',
    benefits: [
      '98% colophony-free and gentle on delicate or sensitive skin',
      'Slows hair regrowth and minimizes ingrowns',
      'Hygienic single-use spatulas, disposable strips, and sterile threads',
    ],
    whatsIncluded: [
      'Pre-wax soothing antiseptic lotion application',
      'Gentle Rica liposoluble waxing on designated areas',
      'Precision eyebrow, upper lip, and chin threading',
      'Post-wax soothing aloe vera and rose calamine treatment',
    ],
    faqs: [
      {
        question: 'Why choose Rica wax over regular sugar honey wax?',
        answer:
          'Rica wax adheres to the hair follicle rather than the skin, significantly reducing redness, stinging, and risk of skin peeling.',
      },
    ],
  },
  {
    id: 'manipedi-1',
    slug: 'rose-petal-spa-mani-pedi',
    category: 'manipedi',
    categoryLabel: 'Manicure & Pedicure',
    title: 'Rose-Petal Spa Mani-Pedi',
    shortTitle: 'Manicure & Pedicure',
    duration: '75 mins',
    price: '₹1,650',
    numericPrice: 1650,
    tag: '(Sample)',
    image: manipedi,
    description:
      'Warm rose-petal soak, gentle exfoliation, and nourishing cuticle care.',
    fullDescription:
      'An indulgent retreat for tired hands and feet. Enjoy an aromatic warm milk and rose-petal foot bath, followed by Himalayan salt exfoliation, painless cuticle grooming, callus buffing, and a deeply moisturizing shea-butter hand and calf massage.',
    benefits: [
      'Softens tough heels, removes dead cells, and hydrates dry cuticles',
      'Stimulates blood circulation and eases tired feet tension',
      'Non-toxic, high-shine breathable nail finish',
    ],
    whatsIncluded: [
      'Rose-petal and essential oil warm immersion soak',
      'Organic botanical sugar scrub & heel pumice smoothing',
      'Nail trimming, shaping, and cuticle nourishing treatment',
      'Warm towel wrap, pressure-point massage & polish application',
    ],
    faqs: [
      {
        question: 'Are manicure and pedicure tools sterilized?',
        answer:
          'Yes, every metal tool undergoes medical-grade UV sterilization, and buffers and files are sanitized or disposable.',
      },
    ],
  },
  {
    id: 'nailart-1',
    slug: 'gel-polish-rose-gold-nail-art',
    category: 'nailart',
    categoryLabel: 'Nail Art',
    title: 'Gel Polish & Rose-Gold Nail Art',
    shortTitle: 'Nail Art',
    duration: '60 mins',
    price: '₹1,400',
    numericPrice: 1400,
    tag: '(Sample)',
    image: nailart,
    description:
      'Chip-resistant gel manicure with French tips, pearl chrome, or delicate floral foil art.',
    fullDescription:
      'Elevate your nails with enduring elegance. Our nail artists specialize in minimalist luxury designs: delicate rose-gold leaf accents, glazed chrome finishes, classic French blush ombré, and bridal stone embellishments cured under low-heat LED lamps.',
    benefits: [
      'Zero chip, 3-week long-lasting mirror shine',
      'Strengthens thin, brittle natural nails without damage',
      'Bespoke designs coordinated with your outfits and jewellery',
    ],
    whatsIncluded: [
      'Dry manicure prep, nail shaping & cuticle buffing',
      'Gentle bonding base coat cured under LED lamp',
      'Two coats of premium gel lacquer in your preferred shade',
      'Custom rose-gold foil, chrome, or accent art & glossy top seal',
    ],
    faqs: [
      {
        question: 'How long does gel polish last?',
        answer:
          'Our gel manicures typically remain chip-free and glossy for 2 to 3 weeks depending on natural nail growth.',
      },
    ],
  },
  {
    id: 'bodycare-1',
    slug: 'rose-body-polishing',
    category: 'bodycare',
    categoryLabel: 'Body Care',
    title: 'Rose Body Polishing',
    shortTitle: 'Hair Spa & Body Care',
    duration: '90 mins',
    price: '₹2,800',
    numericPrice: 2800,
    tag: '(Sample)',
    image: bodycare,
    description:
      'Full-body gentle sugar scrub, de-tanning wrap, and deeply hydrating warm oil ritual.',
    fullDescription:
      'Indulge in an all-over skin rejuvenating ritual. Begins with a full-body walnut and rose-crystal scrub to polish away dull surface cells, followed by a nourishing sandalwood de-tan pack and warm botanical oil effleurage massage for silky radiance.',
    benefits: [
      'Evens skin tone, fades tanning, and refines rough textures',
      'Deeply hydrates sun-exposed skin with rich botanical oils',
      'Releases body stress and tension in a peaceful private suite',
    ],
    whatsIncluded: [
      'Full-body rose-crystal exfoliating scrub',
      'Sandalwood & turmeric radiance de-tan body pack',
      'Steam therapy & warm rinse in private shower',
      'Hydrating warm botanical oil body massage',
    ],
    faqs: [
      {
        question: 'Is body polishing recommended before a wedding or holiday?',
        answer:
          'Yes, we recommend booking your body polishing ritual 2 to 3 days before any major event or holiday for the smoothest, most luminous results.',
      },
    ],
  },
]

export const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'skincare', label: 'Skin Care & Facial' },
  { id: 'haircare', label: 'Hair Care & Styling' },
  { id: 'bridal', label: 'Bridal Makeup' },
  { id: 'party', label: 'Party Makeup' },
  { id: 'waxing', label: 'Waxing & Threading' },
  { id: 'manipedi', label: 'Manicure & Pedicure' },
  { id: 'nailart', label: 'Nail Art' },
  { id: 'bodycare', label: 'Body Care' },
]
