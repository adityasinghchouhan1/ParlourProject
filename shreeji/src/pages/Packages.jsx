import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap, prefersReducedMotion } from '../components/animations/gsapSetup'
import { packages } from '../data/packages'

export default function Packages() {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      const cards = gsap.utils.toArray('.pkg-card')

      // Header animation
      gsap.from('.pkg-header-elem', {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pkg-header',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      // Cards scroll reveal animation
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 70,
            scale: 0.94,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            delay: (index % 4) * 0.12,
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })

      // Image reveal animation
      gsap.utils.toArray('.pkg-image').forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 1.15 },
          {
            scale: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: image,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="pkg-header relative overflow-hidden bg-light-surface-container-low py-20 lg:py-28">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-rose-gold/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-rose-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-gutter-md text-center md:px-gutter-lg">
          <span className="pkg-header-elem inline-block font-label text-label-md uppercase tracking-[0.3em] text-light-secondary">
            Beauty Made Special
          </span>

          <h1 className="pkg-header-elem mt-5 font-display text-display-md-mobile text-light-primary lg:text-display-md">
            Packages & Pricing
          </h1>

          <div className="pkg-header-elem mx-auto my-5 h-px w-20 bg-rose-gold" />

          <p className="pkg-header-elem mx-auto max-w-2xl font-body text-body-lg leading-relaxed text-light-on-surface-variant">
            Discover thoughtfully curated beauty experiences, designed to make
            every moment feel special.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="mx-auto max-w-7xl px-gutter-md py-16 md:px-gutter-lg lg:py-24">
        <div className="mb-12 text-center">
          <span className="font-label text-label-sm uppercase tracking-[0.25em] text-light-secondary">
            Choose Your Experience
          </span>

          <h2 className="mt-3 font-display text-headline-lg text-light-primary md:text-display-sm">
            Our Signature Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => {
            const isRecommended = pkg.recommended

            return (
              <article
                key={pkg.id}
                className={`pkg-card group relative flex h-full flex-col overflow-hidden rounded-2xl bg-light-surface-container-lowest transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  isRecommended
                    ? 'border-2 border-rose-gold shadow-xl'
                    : 'border border-light-outline-variant shadow-sm'
                }`}
              >
                {/* Recommended Badge */}
                {isRecommended && (
                  <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-b-xl bg-rose-gold px-5 py-2 font-label text-[11px] uppercase tracking-widest text-white shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-light-surface-container">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    loading="lazy"
                    className="pkg-image h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {pkg.badge && (
                    <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 font-label text-xs tracking-wide text-light-primary shadow-md backdrop-blur-md">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div>
                    <h3 className="font-display text-title-lg text-light-primary">
                      {pkg.name}
                    </h3>

                    <p className="mt-2 min-h-10 font-body text-body-sm leading-relaxed text-light-on-surface-variant">
                      {pkg.subtitle}
                    </p>

                    <div className="my-5 border-t border-light-outline-variant" />

                    {/* Price */}
                    <div>
                      <p className="font-headline text-headline-lg font-semibold text-light-primary">
                        {pkg.price}
                      </p>

                      <p className="mt-1 font-body text-xs text-light-secondary">
                        {pkg.tag}
                      </p>
                    </div>

                    {/* Services */}
                    <ul className="mt-6 flex flex-col gap-3">
                      {pkg.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 font-body text-sm leading-relaxed text-light-on-surface-variant"
                        >
                          <span
                            className="material-symbols-outlined mt-0.5 text-lg text-rose-gold"
                            aria-hidden="true"
                          >
                            check_circle
                          </span>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <div className="mt-auto pt-8">
                    <Link
                      to={`/book-appointment?package=${encodeURIComponent(
                        `${pkg.name} (${pkg.price})`,
                      )}`}
                      className={`flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 font-label text-label-md transition-all duration-300 ${
                        isRecommended
                          ? 'bg-light-primary text-light-on-primary shadow-md hover:scale-[1.03] hover:shadow-lg'
                          : 'border border-light-primary text-light-primary hover:bg-light-primary hover:text-white'
                      }`}
                    >
                      Book Package
                      <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
