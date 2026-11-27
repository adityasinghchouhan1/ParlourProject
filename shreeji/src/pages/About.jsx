import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap, prefersReducedMotion } from '../components/animations/gsapSetup'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import banner from '../assets/images/isha/i3.jpeg'
import banner2 from '../assets/images/banner3.jpeg'
import IshaRecognition from '../components/Homecommon/IshaRecognition'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function About() {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      const container = containerRef.current
      if (!container) return

      // --------------------------------------------------
      // 1. HERO ENTRANCE ANIMATION
      // --------------------------------------------------

      const heroTimeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      heroTimeline
        .from('.about-hero-eyebrow', {
          autoAlpha: 0,
          y: -15,
          duration: 0.6,
        })
        .from(
          '.about-hero-title',
          {
            autoAlpha: 0,
            y: 35,
            duration: 0.9,
          },
          '-=0.3',
        )
        .from(
          '.about-hero-desc',
          {
            autoAlpha: 0,
            y: 22,
            duration: 0.7,
          },
          '-=0.45',
        )
        .from(
          '.about-hero-img',
          {
            autoAlpha: 0,
            scale: 0.92,
            rotation: 1.5,
            duration: 1.1,
          },
          '-=0.5',
        )

      // --------------------------------------------------
      // 2. GENERAL SECTION SCROLL REVEAL
      // --------------------------------------------------

      const sections = gsap.utils.toArray('.gsap-about-section', container)

      sections.forEach((section) => {
        gsap.from(section, {
          autoAlpha: 0,
          y: 45,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 84%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      })

      // --------------------------------------------------
      // 3. STAGGERED CARD ANIMATIONS
      // --------------------------------------------------

      const cardGrids = gsap.utils.toArray('.gsap-stagger-grid', container)

      cardGrids.forEach((grid) => {
        const cards = grid.children

        gsap.from(cards, {
          autoAlpha: 0,
          y: 45,
          scale: 0.96,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 82%',
            once: true,
          },
        })
      })

      // --------------------------------------------------
      // 4. MISSION & VISION 3D PARALLAX
      // --------------------------------------------------

      const missionVision = container.querySelector('.mission-vision-section')

      if (missionVision) {
        // Mission card moves upward gradually
        gsap.fromTo(
          '.mission-parallax',
          {
            y: 65,
          },
          {
            y: -65,
            ease: 'none',
            scrollTrigger: {
              trigger: missionVision,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          },
        )

        // Vision card moves in the opposite direction
        gsap.fromTo(
          '.vision-parallax',
          {
            y: -45,
          },
          {
            y: 75,
            ease: 'none',
            scrollTrigger: {
              trigger: missionVision,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          },
        )

        // Background decorative glow movement
        gsap.fromTo(
          '.mission-orb',
          {
            x: -30,
            y: 30,
            scale: 0.9,
          },
          {
            x: 50,
            y: -40,
            scale: 1.2,
            ease: 'none',
            scrollTrigger: {
              trigger: missionVision,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 2,
            },
          },
        )

        gsap.fromTo(
          '.vision-orb',
          {
            x: 30,
            y: -20,
            scale: 0.9,
          },
          {
            x: -50,
            y: 45,
            scale: 1.2,
            ease: 'none',
            scrollTrigger: {
              trigger: missionVision,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 2,
            },
          },
        )
      }

      // --------------------------------------------------
      // 5. PHILOSOPHY IMAGE PARALLAX
      // --------------------------------------------------

      const philosophyImage = container.querySelector('.about-philosophy-img')

      const philosophySection = container.querySelector(
        '.about-philosophy-section',
      )

      if (philosophyImage && philosophySection) {
        gsap.fromTo(
          philosophyImage,
          {
            yPercent: -8,
            scale: 1.08,
          },
          {
            yPercent: 8,
            scale: 1.08,
            ease: 'none',
            scrollTrigger: {
              trigger: philosophySection,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          },
        )
      }

      // --------------------------------------------------
      // 6. HERO IMAGE SUBTLE SCROLL PARALLAX
      // --------------------------------------------------

      const heroImage = container.querySelector('.about-hero-img img')

      const heroSection = container.querySelector('.about-hero-section')

      if (heroImage && heroSection) {
        gsap.to(heroImage, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }

      // Refresh after creating all ScrollTriggers
      ScrollTrigger.refresh()
    },
    {
      scope: containerRef,
    },
  )

  return (
    <div ref={containerRef}>
      {/* ==================================================
          HERO SECTION
      ================================================== */}

      <section className="about-hero-section relative overflow-hidden bg-gradient-to-br from-light-surface-container-low via-light-surface to-blush-tint/40 py-section-sm lg:py-section-lg">
        {/* Decorative Background */}
        <div
          className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-rose-gold/10 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-blush-tint/70 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-gutter-xl px-gutter-md md:px-gutter-lg lg:grid-cols-12">
          {/* Hero Text */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <span className="about-hero-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-rose-gold/30 bg-light-surface-container-lowest/80 px-4 py-2 font-label text-label-sm font-semibold uppercase tracking-widest text-light-secondary backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-rose-gold" />A true
              Makeup artist Story
            </span>

            <h1 className="about-hero-title font-display text-display-md-mobile lg:text-display-md font-semibold leading-tight text-light-primary text-balance">
              beautiful journey to become a{' '}
              <span className="font-normal italic text-rose-gold">
                celebrity makeup artist
              </span>
            </h1>

            <p className="about-hero-desc max-w-prose font-body text-body-lg text-light-on-surface-variant text-pretty leading-relaxed">
              Becoming a celebrity makeup artist is a creative journey that
              turns a passion for color, skin, and storytelling into
              high-pressure red-carpet, editorial, and film work.
            </p>

            <div className="about-hero-desc flex items-center gap-3 pt-2">
              <span className="h-px w-12 bg-rose-gold" />
              <span className="font-label text-label-sm uppercase tracking-widest text-light-secondary">
                Elegance • Care • Confidence
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-6 relative">
            <div className="about-hero-img group relative overflow-hidden rounded-3xl border-2 border-rose-gold/25 bg-light-surface-container-lowest p-2.5 shadow-2xl shadow-rose-gold/10">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={banner}
                  alt="Shreeji Parlour serene studio space"
                  className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/30" />
            </div>

            {/* Image Floating Accent */}
            <div className="absolute -bottom-5 -left-3 z-10 rounded-2xl border border-rose-gold/25 bg-light-surface-container-lowest/95 px-5 py-3 shadow-xl backdrop-blur-md sm:-left-7">
              <span className="block font-label text-[10px] uppercase tracking-widest text-light-secondary">
                Your Beauty, Our Passion
              </span>
              <span className="mt-1 block font-headline text-headline-sm font-semibold text-light-primary">
                A Place to Bloom ✦
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          OUR STORY SECTION
      ================================================== */}

      <section className="gsap-about-section mx-auto max-w-7xl px-gutter-md py-section-sm md:px-gutter-lg lg:py-section-lg">
        <div className="grid grid-cols-1 gap-gutter-xl lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <span className="font-label text-label-md uppercase tracking-widest text-rose-gold">
              Introduction
            </span>

            <h2 className="mt-3 font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary text-balance">
              My journey
              <span className="mt-3 block h-1 w-16 rounded-full bg-rose-gold" />
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-5">
            <p className="font-body text-body-lg text-light-on-surface-variant text-pretty leading-relaxed">
              What began as a boutique studio with three styling chairs and a
              deep love for bridal artistry has grown into a trusted women's
              beauty destination. Over the years, Shreeji Parlour has welcomed
              generations of brides, working professionals, mothers, and
              daughters.
            </p>

            <p className="font-body text-body-md text-light-on-surface-variant text-pretty leading-relaxed">
              We never rush an appointment. Every facial, hair ritual, and
              makeup consultation begins with listening—understanding your skin
              sensitivity, comfort preferences, and personal style so the result
              feels effortlessly like you.
            </p>
          </div>
        </div>
      </section>
      <IshaRecognition />
      {/* ==================================================
          MISSION & VISION - PREMIUM PARALLAX SECTION
      ================================================== */}

      <section className="mission-vision-section gsap-about-section relative isolate overflow-hidden bg-gradient-to-br from-warm-beige via-blush-tint/50 to-light-surface py-section-sm lg:py-section-lg">
        {/* Ambient Background Orbs */}
        <div
          className="mission-orb pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-rose-gold/20 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="vision-orb pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-blush-tint/90 blur-3xl"
          aria-hidden="true"
        />

        {/* Background Decorative Text */}
        <div
          className="pointer-events-none absolute right-5 top-8 select-none font-display text-[100px] font-semibold text-rose-gold/[0.04] sm:text-[160px]"
          aria-hidden="true"
        >
          S
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-gutter-md md:px-gutter-lg">
          {/* Section Heading */}
          <div className="mb-14 text-center">
            <span className="font-label text-label-md uppercase tracking-[0.25em] text-light-secondary">
              What We Believe
            </span>

            <h2 className="mt-3 font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary text-balance">
              The Heart Behind Our Beauty
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-rose-gold" />

            <p className="mx-auto mt-5 max-w-2xl font-body text-body-md text-light-on-surface-variant text-pretty">
              Every detail of Shreeji Parlour reflects our commitment to
              meaningful beauty, thoughtful care, and lasting confidence.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="gsap-stagger-grid grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
            {/* Mission Card Parallax Wrapper */}
            <div className="mission-parallax will-change-transform">
              <article className="group relative overflow-hidden rounded-3xl border border-rose-gold/25 bg-light-surface-container-lowest/90 p-7 shadow-xl shadow-rose-gold/10 backdrop-blur-md transition-all duration-500 hover:border-rose-gold/60 hover:shadow-2xl hover:shadow-rose-gold/20 sm:p-10">
                {/* Decorative Watermark */}
                <span className="pointer-events-none absolute -right-5 -top-12 font-display text-[180px] font-semibold leading-none text-rose-gold/[0.055] transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                  M
                </span>

                {/* Icon */}
                <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-blush-tint text-rose-gold shadow-md shadow-rose-gold/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110">
                  <span
                    className="material-symbols-outlined text-[34px]"
                    aria-hidden="true"
                  >
                    auto_awesome
                  </span>
                </div>

                <span className="relative font-label text-label-sm font-semibold uppercase tracking-[0.2em] text-rose-gold">
                  Our Purpose
                </span>

                <h2 className="relative mt-3 font-headline text-headline-lg text-light-primary">
                  Our Mission
                </h2>

                <p className="relative mt-5 font-body text-body-md leading-[1.9] text-light-on-surface-variant text-pretty">
                  To deliver personalized, hygienic, and high-craft beauty
                  treatments in a warm, women-only environment that leaves every
                  guest feeling refreshed, respected, and radiant.
                </p>

                <div className="relative mt-8 flex items-center gap-3">
                  <span className="h-px w-10 bg-rose-gold transition-all duration-500 group-hover:w-20" />
                  <span className="font-label text-label-sm uppercase tracking-widest text-light-secondary">
                    Beauty with Purpose
                  </span>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-rose-gold to-blush-tint transition-transform duration-700 group-hover:scale-x-100" />
              </article>
            </div>

            {/* Vision Card Parallax Wrapper */}
            <div className="vision-parallax will-change-transform">
              <article className="group relative overflow-hidden rounded-3xl border border-rose-gold/25 bg-light-surface-container-lowest/90 p-7 shadow-xl shadow-rose-gold/10 backdrop-blur-md transition-all duration-500 hover:border-rose-gold/60 hover:shadow-2xl hover:shadow-rose-gold/20 sm:p-10">
                {/* Decorative Watermark */}
                <span className="pointer-events-none absolute -right-5 -top-12 font-display text-[180px] font-semibold leading-none text-rose-gold/[0.055] transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110">
                  V
                </span>

                {/* Icon */}
                <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-blush-tint text-rose-gold shadow-md shadow-rose-gold/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:-rotate-6 group-hover:scale-110">
                  <span
                    className="material-symbols-outlined text-[34px]"
                    aria-hidden="true"
                  >
                    visibility
                  </span>
                </div>

                <span className="relative font-label text-label-sm font-semibold uppercase tracking-[0.2em] text-rose-gold">
                  Our Aspiration
                </span>

                <h2 className="relative mt-3 font-headline text-headline-lg text-light-primary">
                  Our Vision
                </h2>

                <p className="relative mt-5 font-body text-body-md leading-[1.9] text-light-on-surface-variant text-pretty">
                  To be the most trusted neighborhood luxury beauty
                  atelier—known for authentic skincare wisdom, timeless bridal
                  elegance, and lasting relationships with our guests.
                </p>

                <div className="relative mt-8 flex items-center gap-3">
                  <span className="h-px w-10 bg-rose-gold transition-all duration-500 group-hover:w-20" />
                  <span className="font-label text-label-sm uppercase tracking-widest text-light-secondary">
                    A Vision of Elegance
                  </span>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-rose-gold to-blush-tint transition-transform duration-700 group-hover:scale-x-100" />
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          BEAUTY PHILOSOPHY & HYGIENE
      ================================================== */}

      <section className="about-philosophy-section gsap-about-section mx-auto max-w-7xl overflow-hidden px-gutter-md py-section-sm md:px-gutter-lg lg:py-section-lg">
        <div className="grid grid-cols-1 items-center gap-gutter-xl lg:grid-cols-12">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="font-label text-label-md uppercase tracking-widest text-rose-gold">
                Our Craft
              </span>

              <h2 className="mt-3 font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary text-balance">
                Our Beauty Philosophy
              </h2>

              <p className="mt-4 font-body text-body-md text-light-on-surface-variant text-pretty leading-relaxed">
                True beauty care enhances rather than masks. We prioritize
                healthy skin barriers, nourished hair, and breathable makeup
                finishes that look luminous in natural light and photography
                alike.
              </p>
            </div>

            {/* Hygiene Card */}
            <div className="group rounded-2xl border border-light-outline-variant bg-gradient-to-br from-blush-tint/70 to-light-surface-container-lowest p-gutter-lg shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="font-headline text-headline-sm text-light-primary">
                Professional Care & Hygiene
              </h3>

              <ul className="mt-5 flex flex-col gap-4 font-body text-body-md text-light-on-surface-variant">
                <li className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined mt-0.5 text-[20px] text-rose-gold"
                    aria-hidden="true"
                  >
                    check_circle
                  </span>
                  UV-sterilized brushes, tweezers, and manicure tools between
                  every guest
                </li>

                <li className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined mt-0.5 text-[20px] text-rose-gold"
                    aria-hidden="true"
                  >
                    check_circle
                  </span>
                  Freshly laundered linens, disposable wax spatulas, and sealed
                  kits
                </li>

                <li className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined mt-0.5 text-[20px] text-rose-gold"
                    aria-hidden="true"
                  >
                    check_circle
                  </span>
                  Patch-tested botanical & clinical formulations for sensitive
                  skin
                </li>
              </ul>
            </div>
          </div>

          {/* Philosophy Image with Parallax */}
          <div className="lg:col-span-6">
            <div className="group relative overflow-hidden rounded-3xl border-2 border-rose-gold/25 bg-light-surface-container-lowest p-2.5 shadow-2xl shadow-rose-gold/10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={banner2}
                  alt="Gentle skincare ritual at Shreeji Parlour"
                  className="about-philosophy-img absolute inset-0 h-[116%] w-full object-cover will-change-transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-light-primary/25 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          WHY CUSTOMERS CHOOSE US
      ================================================== */}

      <section className=" bg-light-surface-container-low py-section-sm lg:py-section-lg">
        <div className="mx-auto max-w-7xl px-gutter-md md:px-gutter-lg">
          <div className="mb-12 text-center">
            <span className="font-label text-label-md uppercase tracking-widest text-rose-gold">
              The Shreeji Difference
            </span>

            <h2 className="mt-3 font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary">
              Why Customers Choose Us
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-rose-gold" />
          </div>

          <div className=" grid grid-cols-1 gap-gutter-lg md:grid-cols-3">
            <article className="group rounded-2xl border border-light-outline-variant bg-light-surface-container-lowest p-gutter-lg shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-rose-gold/50 hover:shadow-xl">
              <span
                className="material-symbols-outlined text-[32px] text-rose-gold transition-transform duration-500 group-hover:scale-110"
                aria-hidden="true"
              >
                schedule
              </span>

              <h3 className="mt-5 font-headline text-headline-sm text-light-on-surface">
                Unhurried Appointments
              </h3>

              <p className="mt-3 font-body text-body-md text-light-on-surface-variant leading-relaxed">
                Scheduled time slots ensure you are never kept waiting and your
                specialist focuses solely on you.
              </p>
            </article>

            <article className="group rounded-2xl border border-light-outline-variant bg-light-surface-container-lowest p-gutter-lg shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-rose-gold/50 hover:shadow-xl">
              <span
                className="material-symbols-outlined text-[32px] text-rose-gold transition-transform duration-500 group-hover:scale-110"
                aria-hidden="true"
              >
                verified
              </span>

              <h3 className="mt-5 font-headline text-headline-sm text-light-on-surface">
                Transparent Pricing
              </h3>

              <p className="mt-3 font-body text-body-md text-light-on-surface-variant leading-relaxed">
                Clear service menus and customized packages with zero surprise
                add-ons.
              </p>
            </article>

            <article className="group rounded-2xl border border-light-outline-variant bg-light-surface-container-lowest p-gutter-lg shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-rose-gold/50 hover:shadow-xl">
              <span
                className="material-symbols-outlined text-[32px] text-rose-gold transition-transform duration-500 group-hover:scale-110"
                aria-hidden="true"
              >
                workspace_premium
              </span>

              <h3 className="mt-5 font-headline text-headline-sm text-light-on-surface">
                Experienced Team
              </h3>

              <p className="mt-3 font-body text-body-md text-light-on-surface-variant leading-relaxed">
                Meet our dedicated makeup artists, hairstylists, and skin
                therapists on our{' '}
                <Link
                  to="/team"
                  className="font-medium text-light-primary underline decoration-rose-gold underline-offset-4 transition-colors hover:text-rose-gold"
                >
                  Our Team
                </Link>{' '}
                page.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="gsap-about-section mx-auto max-w-7xl px-gutter-md py-section-sm md:px-gutter-lg lg:py-section-lg">
        <div className="group relative overflow-hidden rounded-3xl border border-rose-gold/20 bg-gradient-to-br from-light-primary via-light-primary to-[#69434E] px-gutter-lg py-12 text-center text-light-on-primary shadow-2xl md:px-12 lg:py-16">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/10 transition-transform duration-1000 group-hover:scale-125" />

          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full border border-white/10 transition-transform duration-1000 group-hover:scale-125" />

          <div className="relative z-10">
            <span className="font-label text-label-sm uppercase tracking-[0.3em] text-light-on-primary-container">
              Your Moment of Beauty
            </span>

            <h2 className="mt-4 font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-primary">
              Experience Shreeji Parlour in Person
            </h2>

            <p className="mx-auto mt-3 max-w-xl font-body text-body-lg text-light-on-primary-container">
              Reserve a consultation or self-care session at your convenience.
            </p>

            <Link
              to="/book-appointment"
              className="group/btn mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-light-surface-container-lowest px-8 py-4 font-label text-label-lg font-semibold text-light-primary shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blush-tint hover:shadow-xl active:scale-95"
            >
              Book an Appointment
              <span
                className="material-symbols-outlined text-[19px] transition-transform duration-300 group-hover/btn:translate-x-1"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
