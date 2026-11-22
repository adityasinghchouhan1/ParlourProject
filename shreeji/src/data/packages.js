import pEssentialmonthly from '../assets/images/p3.webp'
import selfcare from '../assets/images/p2.webp'
import Glow from '../assets/images/p2.avif'
import bridal from '../assets/images/Banner2.jpg'

export const packages = [
  {
    id: 'pkg-everyday',
    name: 'Everyday Beauty Package',
    subtitle: 'Essential monthly upkeep',
    price: '₹1,999',
    numericPrice: 1999,
    duration: '~90 mins',
    tag: 'Sample INR Price • ~90 mins',
    recommended: false,
    image: pEssentialmonthly,
    items: [
      'Full Arms & Legs Waxing',
      'Eyebrow & Upper Lip Threading',
      'Express Fruit Clean-Up',
      'Classic Hair Wash & Blow-Dry',
    ],
  },
  {
    id: 'pkg-glow',
    name: 'Glow & Radiance Package',
    subtitle: 'Instant skin & hair luminosity',
    price: '₹3,499',
    numericPrice: 3499,
    duration: '~2.5 hrs',
    tag: 'Sample INR Price • ~2.5 hrs',
    badge: 'Recommended',
    recommended: true,
    image: Glow,
    items: [
      'Botanical Radiance Facial',
      'Deep Conditioning Hair Spa',
      'Classic Manicure & Polish',
      'Brow Sculpting & Face De-Tan',
    ],
  },
  {
    id: 'pkg-selfcare',
    name: 'Premium Self-Care Package',
    subtitle: 'Head-to-toe restorative day',
    price: '₹5,499',
    numericPrice: 5499,
    duration: '~4 hrs',
    tag: 'Sample INR Price • ~4 hrs',
    recommended: false,
    image: selfcare,
    items: [
      'Luxury Hydra-Glow Facial',
      'Rose-Petal Spa Mani-Pedi',
      'Full-Body Rica Waxing',
      'Sandalwood Body Polishing',
    ],
  },
  {
    id: 'pkg-bridal',
    name: 'Bridal Makeup Package',
    subtitle: 'Complete pre-bridal & wedding glam',
    price: '₹18,999',
    numericPrice: 18999,
    duration: 'Multi-session',
    tag: 'Sample INR Price • Multi-session',
    recommended: false,
    image: bridal,
    items: [
      'HD Bridal Makeup & Hair Styling',
      '2 Pre-Bridal Radiance Facials',
      'Bridal Gel Nail Art & Spa Pedi',
      'Saree / Lehenga Dupatta Draping',
    ],
  },
]
