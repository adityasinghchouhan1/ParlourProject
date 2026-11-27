import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, prefersReducedMotion } from '../animations/gsapSetup'

import award3 from '../../assets/images/isha/ic.jpeg'
import award1 from '../../assets/images/isha/i2.jpeg'
import award2 from '../../assets/images/isha/i3.jpeg'
import award4 from '../../assets/images/isha/i4.jpeg'
import award5 from '../../assets/images/isha/i1.jpeg'

// Add your remaining three photographs when available.

const achievements = [
  {
    image: award1,
    number: '01',
    title: 'Meet and Appreciate by celebs',
    subtitle: 'where the true value movements created',
  },
  {
    image: award2,
    number: '02',
    title: 'A Moment of Recognition',
    subtitle: 'Celebrating artistic excellence',
    featured: true,
  },
  {
    image: award3,
    number: '03',
    title: 'Celebrity Recognition',
    subtitle: 'An unforgettable achievement',
  },
  {
    image: award4,
    number: '04',
    title: 'Celebrity Recognition',
    subtitle: 'An unforgettable achievement',
    featured: true,
  },
  {
    image: award5,
    number: '05',
    title: 'Celebrity Recognition',
    subtitle: 'An unforgettable achievement',
  },
]

export default function IshaRecognition() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      gsap.from('.isha-heading', {
        y: 35,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      })

      gsap.from('.isha-gallery-card', {
        y: 55,
        autoAlpha: 0,
        scale: 0.96,
        stagger: 0.16,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.isha-gallery',
          start: 'top 82%',
          once: true,
        },
      })

      gsap.from('.isha-bottom-note', {
        y: 25,
        autoAlpha: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.isha-bottom-note',
          start: 'top 90%',
          once: true,
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#281B27] py-20 md:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#B77B82]/15 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#C99A70]/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        {/* Heading */}
        <div className="isha-heading mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D9B18C]">
            <span className="h-px w-9 bg-[#D9B18C]" />
            Beyond Beauty, Into Excellence
            <span className="h-px w-9 bg-[#D9B18C]" />
          </span>

          <h2 className="font-headline text-4xl leading-tight text-[#FFF7F0] md:text-6xl">
            The Artist Behind
            <span className="block font-normal italic text-[#D9B18C]">
              The Artistry
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-body text-sm leading-8 text-[#D8C9D2] md:text-base">
            Every achievement tells a story of passion, dedication and
            creativity. Discover Isha's memorable moments of recognition
            alongside celebrated personalities and professionals from the beauty
            industry.
          </p>
        </div>

        {/* Gallery */}

        {/* Gallery */}
        <div className="isha-gallery grid grid-cols-1 gap-5 lg:grid-cols-12">
          {achievements.map((item, index) => (
            <div
              key={item.number}
              className={`isha-gallery-card group relative isolate overflow-hidden rounded-2xl border border-[#D9B18C]/25 ${
                item.featured
                  ? 'min-h-[500px] lg:col-span-7 lg:row-span-2 lg:min-h-[750px]'
                  : 'min-h-[300px] lg:col-span-5 lg:min-h-[365px]'
              }`}
            >
              {/* Achievement Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#170F19]/95 via-[#170F19]/20 to-black/10 transition-opacity duration-500 group-hover:from-[#170F19]/90" />

              {/* Top Badge */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-black/25 px-4 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D9B18C]" />
                <span className="text-[6px] font-semibold tracking-[0.2em] text-white">
                  ACHIEVEMENT
                </span>
              </div>

              {/* Featured Label */}
              {item.featured && (
                <div className="absolute right-5 top-5 rounded-full bg-[#D9B18C] px-4 py-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#281B27]">
                    Featured Moment
                  </span>
                </div>
              )}

              {/* Bottom Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E7C49F]">
                  {item.subtitle}
                </span>

                <h3
                  className={`mt-3 font-headline leading-tight text-white ${
                    item.featured
                      ? 'text-3xl md:text-4xl'
                      : 'text-2xl md:text-3xl'
                  }`}
                >
                  {item.title}
                </h3>

                <div className="mt-5 h-px w-12 bg-[#D9B18C] transition-all duration-500 group-hover:w-24" />
              </div>

              {/* Hover Border */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-[#D9B18C]/0 transition-colors duration-500 group-hover:border-[#D9B18C]/60" />
            </div>
          ))}
        </div>

        {/* Closing message */}
        <div className="isha-bottom-note mt-16 border-t border-[#D9B18C]/25 pt-10 text-center">
          <span className="font-headline text-2xl italic text-[#D9B18C] md:text-3xl">
            Beauty is an art. Excellence is a journey.
          </span>

          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#E8DDE5]/60">
            With Love & Passion — Isha
          </p>
        </div>
      </div>
    </section>
  )
}
