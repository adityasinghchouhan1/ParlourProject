import React from 'react'
import Button from '../common/Button'
const Homepackages = () => {
  return (
    <>
      {/* Special Packages */}
      <section className="bg-warm-beige py-section-sm lg:py-section-lg">
        <div className="mx-auto max-w-7xl px-gutter-md md:px-gutter-lg">
          <div className="mb-10 text-center">
            <span className="font-label text-label-md uppercase tracking-widest text-light-secondary">
              Curated Value
            </span>
            <h2 className="mt-2 font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary text-balance">
              Special Beauty Packages
            </h2>
            <p className="mx-auto mt-2 max-w-xl font-body text-body-md text-light-on-surface-variant">
              Sample package pricing shown below can be customized anytime.
            </p>
          </div>

          <div className="gsap-package-grid grid grid-cols-1 gap-gutter-lg md:grid-cols-3 items-stretch">
            {/* 1. Basic Beauty Package */}
            <article className="gsap-package-card flex flex-col justify-between rounded-xl border border-light-outline-variant bg-light-surface-container-lowest p-gutter-xl shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-headline text-headline-sm text-light-on-surface">
                  Basic Beauty Package
                </h3>
                <p className="mt-1 font-body text-body-sm text-light-on-surface-variant">
                  Essential monthly grooming & refresh
                </p>
                <p className="mt-4 font-headline text-headline-md text-light-primary tabular-nums">
                  ₹1,999{' '}
                  <span className="font-body text-body-sm text-light-on-surface-variant">
                    (Sample Price)
                  </span>
                </p>
                <ul className="mt-6 flex flex-col gap-2.5 font-body text-body-md text-light-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-[18px] text-rose-gold"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    Full Arms & Legs Honey Waxing
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-[18px] text-rose-gold"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    Eyebrow & Upper Lip Threading
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-[18px] text-rose-gold"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    Express Clean-Up Facial
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-[18px] text-rose-gold"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    Classic Hair Wash & Blow-Dry
                  </li>
                </ul>
              </div>
              <Button
                to="/packages"
                variant="secondary"
                className="mt-8 w-full py-3"
              >
                View Package
              </Button>
            </article>

            {/* 2. Premium Glow Package */}
            <article className="gsap-package-card flex flex-col justify-between rounded-xl border-2 border-rose-gold bg-light-surface-container-lowest p-gutter-xl shadow-md relative">
              <div>
                <span className="inline-block rounded-full bg-blush-tint px-3 py-1 font-label text-label-sm text-light-primary mb-2">
                  Most Popular
                </span>
                <h3 className="font-headline text-headline-sm text-light-primary">
                  Premium Glow Package
                </h3>
                <p className="mt-1 font-body text-body-sm text-light-on-surface-variant">
                  Full-body radiance & spa relaxation
                </p>
                <p className="mt-4 font-headline text-headline-md text-light-primary tabular-nums">
                  ₹4,499{' '}
                  <span className="font-body text-body-sm text-light-on-surface-variant">
                    (Sample Price)
                  </span>
                </p>
                <ul className="mt-6 flex flex-col gap-2.5 font-body text-body-md text-light-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-[18px] text-rose-gold"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    Signature Botanical Glow Facial
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-[18px] text-rose-gold"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    Deep Nourishing Hair Spa Ritual
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-[18px] text-rose-gold"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    Rose-Petal Spa Manicure & Pedicure
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-[18px] text-rose-gold"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    Rica Full Body Waxing & Threading
                  </li>
                </ul>
              </div>
              <Button
                to="/book-appointment"
                variant="primary"
                className="mt-8 w-full py-3"
              >
                Book Now
              </Button>
            </article>

            {/* 3. Bridal Special Package */}
            <article className="gsap-package-card flex flex-col justify-between rounded-xl border border-light-outline-variant bg-light-surface-container-lowest p-gutter-xl shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-headline text-headline-sm text-light-on-surface">
                  Bridal Special Package
                </h3>
                <p className="mt-1 font-body text-body-sm text-light-on-surface-variant">
                  Pre-bridal rituals & wedding day glam
                </p>
                <p className="mt-4 font-headline text-headline-md text-light-primary tabular-nums">
                  ₹18,999{' '}
                  <span className="font-body text-body-sm text-light-on-surface-variant">
                    (Sample Price)
                  </span>
                </p>
                <ul className="mt-6 flex flex-col gap-2.5 font-body text-body-md text-light-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-[18px] text-rose-gold"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    HD Bridal Makeup & Hair Styling
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-[18px] text-rose-gold"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    2 Pre-Bridal Radiance Facials
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-[18px] text-rose-gold"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    Saree / Lehenga Dupatta Draping
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-[18px] text-rose-gold"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    Bridal Gel Nail Art & Spa Pedicure
                  </li>
                </ul>
              </div>
              <Button
                to="/packages"
                variant="secondary"
                className="mt-8 w-full py-3"
              >
                View Package
              </Button>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Homepackages
