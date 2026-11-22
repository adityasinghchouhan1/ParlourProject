import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap, prefersReducedMotion } from '../components/animations/gsapSetup'
import { services, serviceCategories } from '../data/services'

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const containerRef = useRef(null)

  const filteredServices =
    selectedCategory === 'all'
      ? services
      : services.filter((s) => s.category === selectedCategory)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      gsap.from('.services-header-elem', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      })

      gsap.from('.service-card-item', {
        opacity: 0,
        y: 25,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out',
      })
    },
    { scope: containerRef, dependencies: [selectedCategory] },
  )

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-light-surface-container-low py-section-sm">
        <div className="mx-auto max-w-7xl px-gutter-md md:px-gutter-lg">
          <span className="services-header-elem font-label text-label-md uppercase tracking-widest text-light-secondary block">
            Treatment Menu
          </span>
          <h1 className="services-header-elem mt-2 font-display text-display-md-mobile lg:text-display-md text-light-primary text-balance">
            Our Beauty &amp; Self-Care Services
          </h1>
          <p className="services-header-elem mt-3 max-w-2xl font-body text-body-lg text-light-on-surface-variant text-pretty">
            Explore our eight specialized categories. Sample durations and INR
            pricing are shown as editable placeholders.
          </p>

          {/* Category Filters */}
          <div
            id="service-filters"
            className="services-header-elem mt-8 flex flex-wrap items-center gap-2.5"
            role="group"
            aria-label="Filter services by category"
          >
            {serviceCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  aria-pressed={isSelected}
                  className={`inline-flex items-center justify-center rounded-full px-4 py-2 font-label text-label-md transition-all duration-state-change ${
                    isSelected
                      ? 'bg-light-primary text-light-on-primary shadow-sm'
                      : 'border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface hover:border-rose-gold hover:bg-blush-tint'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-gutter-md py-section-sm md:px-gutter-lg lg:py-section-lg">
        <div
          id="services-grid"
          className="grid grid-cols-1 gap-gutter-lg sm:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="service-card-item flex flex-col justify-between overflow-hidden rounded-lg border border-light-outline-variant bg-light-surface-container-lowest shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <Link
                  to={`/services/${service.slug}`}
                  className="block overflow-hidden group"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
                <div className="p-gutter-lg">
                  <header className="mb-2">
                    <span className="font-label text-label-sm uppercase tracking-wider text-light-secondary">
                      {service.categoryLabel}
                    </span>
                    <h2 className="mt-1 font-headline text-headline-sm text-light-on-surface">
                      <Link
                        to={`/services/${service.slug}`}
                        className="hover:text-light-primary transition-colors"
                      >
                        {service.title}
                      </Link>
                    </h2>
                    <p className="mt-1 font-body text-body-sm text-light-secondary tabular-nums">
                      {service.duration} • {service.price} {service.tag}
                    </p>
                  </header>
                  <p className="font-body text-body-md text-light-on-surface-variant">
                    {service.description}
                  </p>
                </div>
              </div>
              <footer className="flex items-center gap-3 border-t border-light-outline-variant px-gutter-lg py-4">
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-light-outline-variant px-4 py-2 font-label text-label-md text-light-primary hover:bg-blush-tint transition-colors"
                >
                  View Details
                </Link>
                <Link
                  to={`/book-appointment?service=${encodeURIComponent(`${service.title} (${service.price})`)}`}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-light-primary px-4 py-2 font-label text-label-md text-light-on-primary hover:bg-light-primary-container transition-colors shadow-sm"
                >
                  Book Now
                </Link>
              </footer>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
