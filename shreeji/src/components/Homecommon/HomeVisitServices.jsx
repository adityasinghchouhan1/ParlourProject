import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap, prefersReducedMotion } from '../animations/gsapSetup'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import paripic from '../../assets/images/pari.jpeg'
import paripic2 from '../../assets/images/pari2.jpeg'

gsap.registerPlugin(ScrollTrigger)

const homeServices = [
  {
    number: '01',
    name: 'Kitty Party Makeup',
    description:
      'Look effortlessly beautiful for your special get-togethers and ladies gatherings.',
    tag: 'Party Ready',
  },
  {
    number: '02',
    name: 'Annual Function Makeup',
    description:
      'Elegant makeup looks for school functions, stage performances and celebrations.',
    tag: 'Special Events',
  },
  {
    number: '03',
    name: 'Kids Makeup',
    description:
      'Cute, gentle and creative makeup for little stars and their special occasions.',
    tag: 'Little Stars',
  },
  {
    number: '04',
    name: 'Birthday Party Makeup',
    description:
      'Celebrate your big day with a beautiful look that makes you feel confident.',
    tag: 'Birthday Glam',
  },
  {
    number: '05',
    name: 'Special Occasion Makeup',
    description:
      'Personalised beauty services for family functions, festive events and more.',
    tag: 'Custom Looks',
  },
]

export default function HomeVisitServices() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      // Main image reveal
      gsap.from('.home-visit-main-image', {
        opacity: 0,
        x: -60,
        scale: 1.05,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-visit-main-image',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      // Floating image reveal
      gsap.from('.home-visit-small-image', {
        opacity: 0,
        y: 45,
        rotate: -6,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-visit-small-image',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      })

      // Content reveal
      gsap.from('.home-visit-copy', {
        opacity: 0,
        x: 45,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-visit-copy',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      // Service rows - individually animated
      gsap.utils.toArray('.home-service-row').forEach((row, index) => {
        gsap.fromTo(
          row,
          {
            autoAlpha: 0,
            y: 25,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            delay: index * 0.06,
            ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: {
              trigger: row,
              start: 'top 92%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })

      // Decorative rotation
      gsap.to('.home-visit-decoration', {
        rotate: 360,
        duration: 25,
        repeat: -1,
        ease: 'none',
      })
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-light-surface-container-low py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-gutter-md md:px-gutter-lg">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT: Editorial Image Composition */}
          <div className="relative mx-auto w-full max-w-[570px] pb-12 pr-10 sm:pr-16">
            {/* Decorative Circle */}
            <div className="home-visit-decoration absolute -right-2 top-8 z-0 h-32 w-32 rounded-full border border-rose-gold/40 sm:right-0 sm:h-44 sm:w-44" />

            {/* Main Image */}
            <div className="home-visit-main-image relative z-10 h-[420px] overflow-hidden rounded-t-[180px] rounded-b-2xl sm:h-[540px]">
              <img
                src={paripic}
                alt="Professional beauty makeup look"
                className="h-full w-fit object-cover object-center transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

              <div className="absolute bottom-7 left-7 text-white">
                <p className="font-label text-xs uppercase tracking-[0.3em]">
                  Shreeji Beauty Experience
                </p>
                <p className="mt-2 font-display text-2xl">
                  Beauty at your doorstep
                </p>
              </div>
            </div>

            {/* Floating Image */}
            <div className="home-visit-small-image absolute -bottom-1 right-0 z-20 w-[45%] overflow-hidden rounded-2xl border-[7px] border-light-surface-container-low shadow-2xl sm:w-[48%]">
              <img
                src={paripic2}
                alt="Beauty makeup and styling"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Vertical Text */}
            <div className="absolute bottom-32 -left-2 z-20 hidden -rotate-90 origin-left sm:block">
              <span className="font-label text-[10px] uppercase tracking-[0.35em] text-light-secondary">
                Your Beauty, Your Place
              </span>
            </div>

            {/* Decorative Accent */}
            <div className="absolute bottom-1 left-4 z-0 h-20 w-20 rounded-full bg-rose-gold/15 blur-xl" />
          </div>

          {/* RIGHT: Content */}
          <div className="relative">
            <div className="home-visit-copy">
              <span className="inline-flex items-center gap-3 font-label text-label-sm uppercase tracking-[0.25em] text-light-secondary">
                <span className="h-px w-9 bg-rose-gold" />
                We Come To You
              </span>

              <h2 className="mt-5 font-display text-display-md-mobile leading-tight text-light-primary lg:text-display-md">
                Your Beauty,
                <br />
                <span className="italic text-rose-gold">Your Place.</span>
              </h2>

              <p className="mt-6 max-w-lg font-body text-body-md leading-8 text-light-on-surface-variant">
                Special occasions deserve special attention. Enjoy professional
                makeup and beauty services in the comfort of your own home. From
                intimate kitty parties to memorable celebrations, we bring the
                salon experience right to your doorstep.
              </p>
            </div>

            {/* Service List - Editorial Layout, Not Cards */}
            <div className="mt-10">
              {homeServices.map((service) => (
                <Link
                  key={service.number}
                  to={`/book-appointment?service=${encodeURIComponent(service.name)}`}
                  className="home-service-row group flex items-center gap-4 border-t border-light-outline-variant py-5 transition-all duration-300 hover:pl-3 sm:gap-6"
                >
                  <span className="font-headline text-sm text-rose-gold">
                    {service.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg text-light-primary transition-colors duration-300 group-hover:text-rose-gold sm:text-xl">
                      {service.name}
                    </h3>

                    <p className="mt-1 font-body text-xs leading-relaxed text-light-on-surface-variant sm:text-sm">
                      {service.description}
                    </p>
                  </div>

                  <div className="hidden shrink-0 text-right sm:block">
                    <span className="font-label text-[10px] uppercase tracking-widest text-light-secondary">
                      {service.tag}
                    </span>
                  </div>

                  <span className="material-symbols-outlined shrink-0 text-xl text-light-primary transition-all duration-300 group-hover:translate-x-2 group-hover:text-rose-gold">
                    arrow_forward
                  </span>
                </Link>
              ))}

              <div className="border-t border-light-outline-variant" />
            </div>

            {/* CTA */}
            <div className="home-visit-copy mt-9 flex flex-wrap items-center gap-6">
              <Link
                to="/book-appointment?service=Home%20Visit"
                className="group inline-flex items-center gap-4 rounded-full bg-light-primary px-7 py-4 font-label text-label-md text-light-on-primary shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Book Home Visit
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>

              <span className="max-w-36 font-body text-xs leading-relaxed text-light-on-surface-variant">
                Professional beauty services, right at your doorstep.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
