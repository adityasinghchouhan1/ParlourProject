// import React, { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { prefersReducedMotion } from './gsapSetup'

// /**
//  * Modern 3D Theme Blossom SVG
//  * Crafted with rose-gold metallic accents, soft blush gradients, and golden center stamens
//  */
// function Blossom3D({ size = 48, className = '' }) {
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 100 100"
//       className={`drop-shadow-[0_8px_16px_rgba(183,110,121,0.25)] select-none ${className}`}
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <defs>
//         {/* Soft Blush & Rose-Gold Petal Gradient */}
//         <linearGradient
//           id="blossomOuterGrad"
//           x1="0%"
//           y1="0%"
//           x2="100%"
//           y2="100%"
//         >
//           <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
//           <stop offset="45%" stopColor="#F9E6E8" stopOpacity="0.9" />
//           <stop offset="85%" stopColor="#EAB5BC" stopOpacity="0.85" />
//           <stop offset="100%" stopColor="#B76E79" stopOpacity="0.75" />
//         </linearGradient>

//         {/* Inner Petal Gradient */}
//         <linearGradient
//           id="blossomInnerGrad"
//           x1="20%"
//           y1="0%"
//           x2="80%"
//           y2="100%"
//         >
//           <stop offset="0%" stopColor="#FFF0F2" />
//           <stop offset="50%" stopColor="#F4CAD0" />
//           <stop offset="100%" stopColor="#C97B86" />
//         </linearGradient>

//         {/* Center Stamen Golden Sheen */}
//         <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
//           <stop offset="0%" stopColor="#FFE082" />
//           <stop offset="60%" stopColor="#E5A955" />
//           <stop offset="100%" stopColor="#B76E79" />
//         </radialGradient>

//         {/* Petal Drop Shadow */}
//         <filter id="petalShadow" x="-20%" y="-20%" width="140%" height="140%">
//           <feDropShadow
//             dx="0"
//             dy="2"
//             stdDeviation="2"
//             floodColor="#431830"
//             floodOpacity="0.12"
//           />
//         </filter>
//       </defs>

//       {/* Layer 1: Outer 5 Petals */}
//       <g filter="url(#petalShadow)">
//         {/* Petal Top */}
//         <path
//           d="M50 50 C40 28, 32 10, 50 4 C68 10, 60 28, 50 50 Z"
//           fill="url(#blossomOuterGrad)"
//           stroke="#B76E79"
//           strokeWidth="0.6"
//           strokeOpacity="0.4"
//         />
//         {/* Petal Top-Right */}
//         <path
//           d="M50 50 C68 34, 88 32, 92 48 C88 66, 68 58, 50 50 Z"
//           fill="url(#blossomOuterGrad)"
//           stroke="#B76E79"
//           strokeWidth="0.6"
//           strokeOpacity="0.4"
//         />
//         {/* Petal Bottom-Right */}
//         <path
//           d="M50 50 C68 62, 80 82, 68 92 C54 94, 52 74, 50 50 Z"
//           fill="url(#blossomOuterGrad)"
//           stroke="#B76E79"
//           strokeWidth="0.6"
//           strokeOpacity="0.4"
//         />
//         {/* Petal Bottom-Left */}
//         <path
//           d="M50 50 C44 72, 36 92, 22 86 C12 76, 26 60, 50 50 Z"
//           fill="url(#blossomOuterGrad)"
//           stroke="#B76E79"
//           strokeWidth="0.6"
//           strokeOpacity="0.4"
//         />
//         {/* Petal Top-Left */}
//         <path
//           d="M50 50 C32 54, 12 50, 8 36 C12 22, 34 32, 50 50 Z"
//           fill="url(#blossomOuterGrad)"
//           stroke="#B76E79"
//           strokeWidth="0.6"
//           strokeOpacity="0.4"
//         />
//       </g>

//       {/* Layer 2: Inner Overlapping Petals for 3D Volume */}
//       <g transform="rotate(36 50 50)" filter="url(#petalShadow)" opacity="0.95">
//         <path
//           d="M50 50 C44 34, 38 18, 50 14 C62 18, 56 34, 50 50 Z"
//           fill="url(#blossomInnerGrad)"
//         />
//         <path
//           d="M50 50 C62 38, 76 38, 80 50 C76 62, 62 56, 50 50 Z"
//           fill="url(#blossomInnerGrad)"
//         />
//         <path
//           d="M50 50 C62 58, 70 72, 62 78 C52 80, 52 66, 50 50 Z"
//           fill="url(#blossomInnerGrad)"
//         />
//         <path
//           d="M50 50 C46 66, 40 78, 30 74 C22 66, 32 56, 50 50 Z"
//           fill="url(#blossomInnerGrad)"
//         />
//         <path
//           d="M50 50 C36 52, 22 48, 20 38 C22 28, 38 36, 50 50 Z"
//           fill="url(#blossomInnerGrad)"
//         />
//       </g>

//       {/* Layer 3: Central Golden Stamen & Micro Sparkle */}
//       <circle cx="50" cy="50" r="8" fill="url(#centerGlow)" />
//       <circle cx="50" cy="50" r="3.5" fill="#FFE082" />
//       <circle cx="47" cy="47" r="1.5" fill="#FFFFFF" opacity="0.8" />

//       {/* Delicate Stamen Points */}
//       <circle cx="45" cy="46" r="1.2" fill="#B76E79" />
//       <circle cx="55" cy="47" r="1.2" fill="#B76E79" />
//       <circle cx="50" cy="43" r="1.2" fill="#B76E79" />
//       <circle cx="48" cy="55" r="1.2" fill="#B76E79" />
//       <circle cx="54" cy="54" r="1.2" fill="#B76E79" />
//     </svg>
//   )
// }

// /**
//  * Curved 3D Falling Rose/Lotus Petal
//  */
// function SinglePetal3D({ size = 28, className = '' }) {
//   return (
//     <svg
//       width={size}
//       height={size * 1.3}
//       viewBox="0 0 40 52"
//       className={`drop-shadow-[0_6px_12px_rgba(183,110,121,0.2)] select-none ${className}`}
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <defs>
//         <linearGradient
//           id="singlePetalGrad"
//           x1="0%"
//           y1="0%"
//           x2="100%"
//           y2="100%"
//         >
//           <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
//           <stop offset="40%" stopColor="#F9E6E8" stopOpacity="0.85" />
//           <stop offset="75%" stopColor="#EAB5BC" stopOpacity="0.8" />
//           <stop offset="100%" stopColor="#B76E79" stopOpacity="0.7" />
//         </linearGradient>
//       </defs>

//       {/* Curved organic petal shape */}
//       <path
//         d="M20 2 C32 10, 38 28, 30 42 C24 50, 16 50, 10 42 C2 28, 8 10, 20 2 Z"
//         fill="url(#singlePetalGrad)"
//         stroke="#B76E79"
//         strokeWidth="0.5"
//         strokeOpacity="0.4"
//       />
//       {/* Delicate central spine vein */}
//       <path
//         d="M20 8 C21 22, 19 36, 20 46"
//         stroke="#FFFFFF"
//         strokeWidth="0.75"
//         strokeOpacity="0.45"
//         strokeLinecap="round"
//       />
//     </svg>
//   )
// }

// export default function Floral3DFlow() {
//   const containerRef = useRef(null)

//   useEffect(() => {
//     if (prefersReducedMotion()) return

//     gsap.registerPlugin(ScrollTrigger)

//     const container = containerRef.current
//     if (!container) return

//     const items = container.querySelectorAll('.floral-flow-item')
//     if (!items.length) return

//     // Track active animations for cleanup
//     const tweens = []

//     items.forEach((item, index) => {
//       // Configuration based on data attributes
//       const depth = parseFloat(item.dataset.depth || '1')
//       const swayDist = parseFloat(item.dataset.sway || '60')
//       const rotateSpeed = parseFloat(item.dataset.rot || '1')
//       const fallDistance = window.innerHeight * (2.5 + depth * 1.5)

//       // 1. SCROLL-DRIVEN CASSETTE (Falls, drifts & rotates as page is scrolled)
//       const scrollAnim = gsap.to(item, {
//         y: `+=${fallDistance}`,
//         x: `+=${(index % 2 === 0 ? 1 : -1) * (swayDist * 1.8)}`,
//         rotateX: `+=${360 * rotateSpeed}`,
//         rotateY: `+=${360 * rotateSpeed * 1.4}`,
//         rotateZ: `+=${180 * rotateSpeed}`,
//         ease: 'none',
//         scrollTrigger: {
//           trigger: document.body,
//           start: 'top top',
//           end: 'bottom bottom',
//           scrub: 1.2 * depth, // Foreground reacts faster, background drifts softly
//         },
//       })

//       // 2. IDLE NATURAL SWAY & BREEZE (Always floats gracefully even when not scrolling)
//       const swayAnim = gsap.to(item, {
//         x: `+=${(index % 2 === 0 ? 1 : -1) * swayDist}`,
//         rotateZ: `+=${index % 2 === 0 ? 25 : -25}`,
//         rotateY: `+=${45 * (index % 2 === 0 ? 1 : -1)}`,
//         duration: 3 + (index % 5) * 0.8,
//         repeat: -1,
//         yoyo: true,
//         ease: 'sine.inOut',
//         delay: (index % 7) * 0.3,
//       })

//       tweens.push(scrollAnim, swayAnim)
//     })

//     return () => {
//       tweens.forEach((t) => {
//         if (t.scrollTrigger) t.scrollTrigger.kill()
//         t.kill()
//       })
//     }
//   }, [])

//   // Pre-configured collection of 3D blossoms & falling petals distributed across viewport
//   const flowers = [
//     // --- Canopy / Top Section Drops ---
//     {
//       id: 1,
//       type: 'blossom',
//       size: 52,
//       top: '2%',
//       left: '8%',
//       depth: 1.2,
//       sway: 70,
//       rot: 1.2,
//       zIndex: 30,
//     },
//     {
//       id: 2,
//       type: 'petal',
//       size: 30,
//       top: '4%',
//       left: '22%',
//       depth: 0.9,
//       sway: 80,
//       rot: 1.5,
//       zIndex: 20,
//     },
//     {
//       id: 3,
//       type: 'blossom',
//       size: 42,
//       top: '8%',
//       left: '85%',
//       depth: 1.1,
//       sway: 65,
//       rot: 1.0,
//       zIndex: 30,
//     },
//     {
//       id: 4,
//       type: 'petal',
//       size: 24,
//       top: '12%',
//       left: '92%',
//       depth: 0.7,
//       sway: 55,
//       rot: 1.6,
//       zIndex: 15,
//     },
//     {
//       id: 5,
//       type: 'petal',
//       size: 32,
//       top: '15%',
//       left: '14%',
//       depth: 1.0,
//       sway: 75,
//       rot: 1.3,
//       zIndex: 25,
//     },

//     // --- Mid-Hero / Services Transition Drops ---
//     {
//       id: 6,
//       type: 'blossom',
//       size: 58,
//       top: '22%',
//       left: '90%',
//       depth: 1.3,
//       sway: 85,
//       rot: 1.1,
//       zIndex: 30,
//     },
//     {
//       id: 7,
//       type: 'petal',
//       size: 26,
//       top: '25%',
//       left: '5%',
//       depth: 0.8,
//       sway: 60,
//       rot: 1.7,
//       zIndex: 20,
//     },
//     {
//       id: 8,
//       type: 'petal',
//       size: 34,
//       top: '30%',
//       left: '80%',
//       depth: 1.1,
//       sway: 70,
//       rot: 1.4,
//       zIndex: 25,
//     },
//     {
//       id: 9,
//       type: 'blossom',
//       size: 46,
//       top: '38%',
//       left: '12%',
//       depth: 1.0,
//       sway: 65,
//       rot: 1.2,
//       zIndex: 30,
//     },
//     {
//       id: 10,
//       type: 'petal',
//       size: 28,
//       top: '42%',
//       left: '88%',
//       depth: 0.9,
//       sway: 75,
//       rot: 1.5,
//       zIndex: 20,
//     },

//     // --- About / Packages Section Floating Petals ---
//     {
//       id: 11,
//       type: 'petal',
//       size: 36,
//       top: '50%',
//       left: '7%',
//       depth: 1.2,
//       sway: 80,
//       rot: 1.3,
//       zIndex: 25,
//     },
//     {
//       id: 12,
//       type: 'blossom',
//       size: 50,
//       top: '56%',
//       left: '84%',
//       depth: 1.2,
//       sway: 70,
//       rot: 1.0,
//       zIndex: 30,
//     },
//     {
//       id: 13,
//       type: 'petal',
//       size: 25,
//       top: '62%',
//       left: '16%',
//       depth: 0.8,
//       sway: 55,
//       rot: 1.6,
//       zIndex: 20,
//     },
//     {
//       id: 14,
//       type: 'petal',
//       size: 30,
//       top: '68%',
//       left: '91%',
//       depth: 1.0,
//       sway: 65,
//       rot: 1.4,
//       zIndex: 25,
//     },
//     {
//       id: 15,
//       type: 'blossom',
//       size: 44,
//       top: '75%',
//       left: '10%',
//       depth: 1.1,
//       sway: 60,
//       rot: 1.2,
//       zIndex: 30,
//     },

//     // --- Gallery & Footer Lower Atmosphere Drops ---
//     {
//       id: 16,
//       type: 'petal',
//       size: 32,
//       top: '82%',
//       left: '82%',
//       depth: 0.9,
//       sway: 75,
//       rot: 1.5,
//       zIndex: 20,
//     },
//     {
//       id: 17,
//       type: 'petal',
//       size: 26,
//       top: '88%',
//       left: '18%',
//       depth: 0.8,
//       sway: 50,
//       rot: 1.7,
//       zIndex: 20,
//     },
//     {
//       id: 18,
//       type: 'blossom',
//       size: 54,
//       top: '92%',
//       left: '86%',
//       depth: 1.3,
//       sway: 80,
//       rot: 1.1,
//       zIndex: 30,
//     },
//   ]

//   return (
//     <div
//       ref={containerRef}
//       className="pointer-events-none fixed inset-0 z-30 overflow-hidden w-full h-full select-none"
//       style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
//       aria-hidden="true"
//     >
//       {flowers.map((f) => (
//         <div
//           key={f.id}
//           data-depth={f.depth}
//           data-sway={f.sway}
//           data-rot={f.rot}
//           className="floral-flow-item absolute will-change-transform"
//           style={{
//             top: f.top,
//             left: f.left,
//             zIndex: f.zIndex,
//             transformStyle: 'preserve-3d',
//             filter: f.depth < 0.9 ? 'blur(0.8px)' : 'none',
//             opacity: f.depth < 0.85 ? 0.75 : 0.95,
//           }}
//         >
//           {f.type === 'blossom' ? (
//             <Blossom3D size={f.size} />
//           ) : (
//             <SinglePetal3D size={f.size} />
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from './gsapSetup'

/**
 * Modern 3D Theme Blossom SVG
 * Crafted with rose-gold metallic accents, soft blush gradients, and golden center stamens
 */
function Blossom3D({ size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`drop-shadow-[0_8px_16px_rgba(183,110,121,0.25)] select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Soft Blush & Rose-Gold Petal Gradient */}
        <linearGradient
          id="blossomOuterGrad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#F9E6E8" stopOpacity="0.9" />
          <stop offset="85%" stopColor="#EAB5BC" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#B76E79" stopOpacity="0.75" />
        </linearGradient>

        {/* Inner Petal Gradient */}
        <linearGradient
          id="blossomInnerGrad"
          x1="20%"
          y1="0%"
          x2="80%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFF0F2" />
          <stop offset="50%" stopColor="#F4CAD0" />
          <stop offset="100%" stopColor="#C97B86" />
        </linearGradient>

        {/* Center Stamen Golden Sheen */}
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="60%" stopColor="#E5A955" />
          <stop offset="100%" stopColor="#B76E79" />
        </radialGradient>

        {/* Petal Drop Shadow */}
        <filter id="petalShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="2"
            floodColor="#431830"
            floodOpacity="0.12"
          />
        </filter>
      </defs>

      {/* Layer 1: Outer 5 Petals */}
      <g filter="url(#petalShadow)">
        {/* Petal Top */}
        <path
          d="M50 50 C40 28, 32 10, 50 4 C68 10, 60 28, 50 50 Z"
          fill="url(#blossomOuterGrad)"
          stroke="#B76E79"
          strokeWidth="0.6"
          strokeOpacity="0.4"
        />
        {/* Petal Top-Right */}
        <path
          d="M50 50 C68 34, 88 32, 92 48 C88 66, 68 58, 50 50 Z"
          fill="url(#blossomOuterGrad)"
          stroke="#B76E79"
          strokeWidth="0.6"
          strokeOpacity="0.4"
        />
        {/* Petal Bottom-Right */}
        <path
          d="M50 50 C68 62, 80 82, 68 92 C54 94, 52 74, 50 50 Z"
          fill="url(#blossomOuterGrad)"
          stroke="#B76E79"
          strokeWidth="0.6"
          strokeOpacity="0.4"
        />
        {/* Petal Bottom-Left */}
        <path
          d="M50 50 C44 72, 36 92, 22 86 C12 76, 26 60, 50 50 Z"
          fill="url(#blossomOuterGrad)"
          stroke="#B76E79"
          strokeWidth="0.6"
          strokeOpacity="0.4"
        />
        {/* Petal Top-Left */}
        <path
          d="M50 50 C32 54, 12 50, 8 36 C12 22, 34 32, 50 50 Z"
          fill="url(#blossomOuterGrad)"
          stroke="#B76E79"
          strokeWidth="0.6"
          strokeOpacity="0.4"
        />
      </g>

      {/* Layer 2: Inner Overlapping Petals for 3D Volume */}
      <g transform="rotate(36 50 50)" filter="url(#petalShadow)" opacity="0.95">
        <path
          d="M50 50 C44 34, 38 18, 50 14 C62 18, 56 34, 50 50 Z"
          fill="url(#blossomInnerGrad)"
        />
        <path
          d="M50 50 C62 38, 76 38, 80 50 C76 62, 62 56, 50 50 Z"
          fill="url(#blossomInnerGrad)"
        />
        <path
          d="M50 50 C62 58, 70 72, 62 78 C52 80, 52 66, 50 50 Z"
          fill="url(#blossomInnerGrad)"
        />
        <path
          d="M50 50 C46 66, 40 78, 30 74 C22 66, 32 56, 50 50 Z"
          fill="url(#blossomInnerGrad)"
        />
        <path
          d="M50 50 C36 52, 22 48, 20 38 C22 28, 38 36, 50 50 Z"
          fill="url(#blossomInnerGrad)"
        />
      </g>

      {/* Layer 3: Central Golden Stamen & Micro Sparkle */}
      <circle cx="50" cy="50" r="8" fill="url(#centerGlow)" />
      <circle cx="50" cy="50" r="3.5" fill="#FFE082" />
      <circle cx="47" cy="47" r="1.5" fill="#FFFFFF" opacity="0.8" />

      {/* Delicate Stamen Points */}
      <circle cx="45" cy="46" r="1.2" fill="#B76E79" />
      <circle cx="55" cy="47" r="1.2" fill="#B76E79" />
      <circle cx="50" cy="43" r="1.2" fill="#B76E79" />
      <circle cx="48" cy="55" r="1.2" fill="#B76E79" />
      <circle cx="54" cy="54" r="1.2" fill="#B76E79" />
    </svg>
  )
}

/**
 * Curved 3D Falling Rose/Lotus Petal
 */
function SinglePetal3D({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 40 52"
      className={`drop-shadow-[0_6px_12px_rgba(183,110,121,0.2)] select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="singlePetalGrad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#F9E6E8" stopOpacity="0.85" />
          <stop offset="75%" stopColor="#EAB5BC" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#B76E79" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* Curved organic petal shape */}
      <path
        d="M20 2 C32 10, 38 28, 30 42 C24 50, 16 50, 10 42 C2 28, 8 10, 20 2 Z"
        fill="url(#singlePetalGrad)"
        stroke="#B76E79"
        strokeWidth="0.5"
        strokeOpacity="0.4"
      />
      {/* Delicate central spine vein */}
      <path
        d="M20 8 C21 22, 19 36, 20 46"
        stroke="#FFFFFF"
        strokeWidth="0.75"
        strokeOpacity="0.45"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Floral3DFlow() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return

    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    if (!container) return

    const items = container.querySelectorAll('.floral-flow-item')
    if (!items.length) return

    // Track active animations for cleanup
    const tweens = []

    items.forEach((item, index) => {
      // Configuration based on data attributes
      const depth = parseFloat(item.dataset.depth || '1')
      const swayDist = parseFloat(item.dataset.sway || '60')
      const rotateSpeed = parseFloat(item.dataset.rot || '1')
      // Move the flower gradually from top to bottom
      // throughout the entire homepage scroll.
      const fallDistance = window.innerHeight * 0.7

      const scrollAnim = gsap.to(item, {
        y: fallDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: () => `+=${ScrollTrigger.maxScroll(window)}`,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      })

      // 2. IDLE NATURAL SWAY & BREEZE (Always floats gracefully even when not scrolling)
      const swayAnim = gsap.to(item, {
        x: `+=${(index % 2 === 0 ? 1 : -1) * swayDist}`,
        rotateZ: `+=${index % 2 === 0 ? 25 : -25}`,
        rotateY: `+=${45 * (index % 2 === 0 ? 1 : -1)}`,
        duration: 3 + (index % 5) * 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: (index % 7) * 0.3,
      })

      tweens.push(scrollAnim, swayAnim)
    })

    return () => {
      tweens.forEach((t) => {
        if (t.scrollTrigger) t.scrollTrigger.kill()
        t.kill()
      })
    }
  }, [])

  // Pre-configured collection of 3D blossoms & falling petals distributed across viewport
  const flowers = [
    {
      id: 1,
      type: 'blossom',
      size: 52,
      top: '5%',
      left: '82%',
      depth: 1.2,
      sway: 30,
      rot: 1.2,
      zIndex: 30,
    },
    {
      id: 3,
      type: 'petal',
      size: 30,
      top: '4%',
      left: '80%',
      depth: 0.9,
      sway: 40,
      rot: 1.9,
      zIndex: 20,
    },
  ]

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden w-full h-full select-none"
      style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
      aria-hidden="true"
    >
      {flowers.map((f) => (
        <div
          key={f.id}
          data-depth={f.depth}
          data-sway={f.sway}
          data-rot={f.rot}
          className="floral-flow-item absolute will-change-transform"
          style={{
            top: f.top,
            left: f.left,
            zIndex: f.zIndex,
            transformStyle: 'preserve-3d',
            filter: f.depth < 0.9 ? 'blur(0.8px)' : 'none',
            opacity: f.depth < 0.85 ? 0.75 : 0.95,
          }}
        >
          {f.type === 'blossom' ? (
            <Blossom3D size={f.size} />
          ) : (
            <SinglePetal3D size={f.size} />
          )}
        </div>
      ))}
    </div>
  )
}
