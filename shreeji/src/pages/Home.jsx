import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap, prefersReducedMotion } from '../components/animations/gsapSetup'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'
import Button from '../components/common/Button'

import Flower from '../components/animations/Floral3DFlow'

import bridalThumb from '../assets/images/Bridalmakeup.jpg'
import OurSanctuary from '../assets/images/OurSanctuary.jpg'
import heroImage from '../assets/images/HeroImg.jpg'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Homepackages from '../components/Homecommon/Homepackages'
import Homegallery from '../components/Homecommon/Homegallery'
import HomeVisitServices from '../components/Homecommon/HomeVisitServices'

export default function Home() {
  const containerRef = useRef(null)
  const heroSectionRef = useRef(null)
  const aboutSectionRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger, useGSAP)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      // Hero coordinated entrance animation timeline
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      heroTl
        // Ambient glows
        .from(
          '.hero-ambient-orb',
          { opacity: 0, scale: 0.6, duration: 1.2, stagger: 0.2 },
          0,
        )
        // Badge
        .from('.hero-badge', { opacity: 0, y: -20, duration: 0.65 }, 0.1)
        // Title
        .from('.hero-title', { opacity: 0, y: 35, duration: 0.9 }, 0.25)
        // Curved Underline
        .from(
          '.hero-underline',
          {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.8,
            ease: 'power2.out',
          },
          0.7,
        )
        // Description
        .from('.hero-desc', { opacity: 0, y: 22, duration: 0.7 }, 0.5)
        // CTA Group
        .from(
          '.hero-cta-btn',
          { opacity: 0, y: 22, stagger: 0.12, duration: 0.6 },
          0.7,
        )
        // Trust Bar
        .from('.hero-trust-bar', { opacity: 0, y: 15, duration: 0.65 }, 0.9)
        // Main Visual Frame
        .from(
          '.hero-main-img-box',
          { opacity: 0, scale: 0.92, duration: 1.1, ease: 'power3.out' },
          0.35,
        )
        // Floating Card 1 (Rating)
        .from(
          '.hero-floating-card-1',
          {
            opacity: 0,
            scale: 0.7,
            y: -25,
            duration: 0.75,
            ease: 'back.out(1.8)',
          },
          0.85,
        )
        // Floating Card 2 (Bridal)
        .from(
          '.hero-floating-card-2',
          {
            opacity: 0,
            scale: 0.7,
            y: 25,
            duration: 0.75,
            ease: 'back.out(1.8)',
          },
          1.0,
        )
        // Luxury Rotating Stamp
        .from(
          '.hero-stamp',
          {
            opacity: 0,
            scale: 0.6,
            rotation: -90,
            duration: 0.8,
            ease: 'back.out(1.6)',
          },
          1.15,
        )

      // Continuous subtle floating animations
      gsap.to('.hero-floating-card-1', {
        y: '-=10',
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.hero-floating-card-2', {
        y: '+=10',
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.4,
      })

      // Continuous gentle rotation of the luxury atelier stamp
      gsap.to('.hero-stamp-svg', {
        rotation: 360,
        duration: 24,
        repeat: -1,
        ease: 'none',
      })

      // Continuous slow breathing for ambient glowing orbs
      gsap.to('.hero-orb-1', {
        scale: 1.18,
        x: 15,
        y: -15,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.hero-orb-2', {
        scale: 1.15,
        x: -15,
        y: 12,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Section ScrollTriggers
      const sections = gsap.utils.toArray('.gsap-reveal')
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 35,
          duration: 0.8,
          ease: 'power2.out',
        })
      })

      // Stagger service cards
      const serviceGrid =
        containerRef.current?.querySelector('.gsap-service-grid')

      const serviceCards = serviceGrid?.querySelectorAll('.gsap-service-card')

      if (serviceGrid && serviceCards?.length) {
        ScrollTrigger.create({
          trigger: serviceGrid,
          start: 'top 80%',
          once: true,

          onEnter: () => {
            gsap.fromTo(
              serviceCards,
              {
                autoAlpha: 0,
                y: 30,
              },
              {
                autoAlpha: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: 'power2.out',
                overwrite: 'auto',
              },
            )
          },
        })
      }

      // Stagger package cards
      gsap.from('.gsap-package-card', {
        scrollTrigger: {
          trigger: '.gsap-package-grid',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power2.out',
      })

      // Modern Scroll-Driven Parallax for About Section
      const aboutSection = containerRef.current?.querySelector(
        '.about-parallax-section',
      )
      if (aboutSection) {
        // Inner image vertical parallax inside its overflow-hidden frame
        gsap.fromTo(
          '.about-parallax-img',
          { yPercent: -14, scale: 1.15 },
          {
            yPercent: 14,
            ease: 'none',
            scrollTrigger: {
              trigger: aboutSection,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          },
        )

        // Floating badge counter-parallax (scrubbed upward for depth separation)
        gsap.fromTo(
          '.about-floating-badge',
          { y: 35 },
          {
            y: -35,
            ease: 'none',
            scrollTrigger: {
              trigger: aboutSection,
              start: 'top 85%',
              end: 'bottom 15%',
              scrub: 1.5,
            },
          },
        )

        // Ambient glowing orb subtle parallax drift
        gsap.fromTo(
          '.about-ambient-orb',
          { y: -30, scale: 0.95 },
          {
            y: 40,
            scale: 1.15,
            ease: 'none',
            scrollTrigger: {
              trigger: aboutSection,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 2,
            },
          },
        )

        // Right-column content stagger reveal on entrance
        gsap.from('.about-stagger-item', {
          scrollTrigger: {
            trigger: aboutSection,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 28,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
        })
      }
      ScrollTrigger.refresh()
    },
    { scope: containerRef },
  )

  // Interactive 3D Cursor Parallax on Desktop for Hero Section
  const handleHeroMouseMove = (e) => {
    if (prefersReducedMotion() || !heroSectionRef.current) return
    const rect = heroSectionRef.current.getBoundingClientRect()
    const xPos = (e.clientX - rect.left) / rect.width - 0.5
    const yPos = (e.clientY - rect.top) / rect.height - 0.5

    gsap.to('.hero-parallax-img', {
      x: xPos * 16,
      y: yPos * 16,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto',
    })
    gsap.to('.hero-floating-card-1', {
      x: -xPos * 24,
      y: -yPos * 24,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto',
    })
    gsap.to('.hero-floating-card-2', {
      x: -xPos * 18,
      y: -yPos * 18,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto',
    })
    gsap.to('.hero-stamp', {
      x: xPos * 14,
      y: yPos * 14,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto',
    })
  }

  const handleHeroMouseLeave = () => {
    if (prefersReducedMotion()) return
    gsap.to(
      [
        '.hero-parallax-img',
        '.hero-floating-card-1',
        '.hero-floating-card-2',
        '.hero-stamp',
      ],
      {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      },
    )
  }

  // Interactive 3D Cursor Parallax on Desktop for About Section
  const handleAboutMouseMove = (e) => {
    if (prefersReducedMotion() || !aboutSectionRef.current) return
    const rect = aboutSectionRef.current.getBoundingClientRect()
    const xPos = (e.clientX - rect.left) / rect.width - 0.5
    const yPos = (e.clientY - rect.top) / rect.height - 0.5

    gsap.to('.about-parallax-frame', {
      x: xPos * 12,
      y: yPos * 12,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto',
    })
    gsap.to('.about-floating-badge', {
      x: -xPos * 20,
      y: -yPos * 20,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto',
    })
  }

  const handleAboutMouseLeave = () => {
    if (prefersReducedMotion()) return
    gsap.to(['.about-parallax-frame', '.about-floating-badge'], {
      x: 0,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    })
  }

  return (
    <div ref={containerRef}>
      <Flower />

      {/* Modern High-End Hero Section */}
      <section
        ref={heroSectionRef}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative overflow-hidden bg-gradient-to-b from-light-surface-container-low via-light-surface to-light-surface-container-low/70 py-16 lg:py-20 select-none"
      >
        {/* Ambient Glowing Aura Orbs */}
        <div
          className="hero-ambient-orb hero-orb-1 pointer-events-none absolute -top-28 right-0 sm:right-1/4 w-96 h-96 rounded-full bg-rose-gold/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="hero-ambient-orb hero-orb-2 pointer-events-none absolute top-1/3 -left-24 w-80 h-80 rounded-full bg-blush-tint/70 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="hero-ambient-orb pointer-events-none absolute -bottom-24 right-10 w-80 h-80 rounded-full bg-warm-beige/70 blur-2xl"
          aria-hidden="true"
        />

        {/* Decorative Floating Sparkles */}
        <div
          className="pointer-events-none absolute top-12 left-10 text-rose-gold/40 text-xl font-serif animate-pulse"
          aria-hidden="true"
        >
          ✦
        </div>
        <div
          className="pointer-events-none absolute top-24 right-1/3 text-rose-gold/30 text-sm font-serif"
          aria-hidden="true"
        >
          ✧
        </div>
        <div
          className="pointer-events-none absolute bottom-16 left-1/4 text-rose-gold/30 text-base font-serif"
          aria-hidden="true"
        >
          ✦
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-gutter-xl px-gutter-md md:px-gutter-lg lg:grid-cols-12 relative z-10">
          {/* Left Column: Editorial Content */}
          <div className="flex flex-col items-start gap-6 lg:col-span-6 lg:pr-4">
            {/* Modern Glassmorphic Pill Badge */}
            <div className="hero-badge inline-flex items-center gap-2.5 rounded-full border border-rose-gold/30 bg-light-surface-container-lowest/80 px-4 py-2 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-gold" />
              </span>
              <span className="font-label text-label-sm font-semibold tracking-widest uppercase text-light-secondary">
                Luxury Beauty Atelier • Ahmedabad
              </span>
              <span
                className="material-symbols-outlined text-[16px] text-rose-gold"
                aria-hidden="true"
              >
                spa
              </span>
            </div>

            {/* Editorial Display Heading */}
            <h1 className="hero-title font-display text-display-lg-mobile sm:text-[44px] lg:text-[54px] font-semibold text-light-primary text-balance leading-[1.12] tracking-tight">
              Your Natural Beauty, <br />
              Our{' '}
              <span className="relative inline-block font-normal italic text-rose-gold">
                Artistry &amp; Passion
                <svg
                  className="hero-underline absolute -bottom-2 left-0 w-full h-3 text-rose-gold/50"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9C60 2.5 170 2 247 7.5"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Sophisticated Body Paragraph */}
            <p className="hero-desc max-w-prose font-body text-body-lg text-light-on-surface-variant text-pretty leading-relaxed">
              Step into a serene women-only sanctuary where timeless bridal
              craftsmanship, clinical-grade skincare, and bespoke self-care
              rituals bring forth your most radiant, confident self.
            </p>

            {/* High-Converting CTA Buttons */}
            <div className="hero-cta-btn flex flex-wrap items-center gap-4 pt-1">
              <Link
                to="/book-appointment"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-light-primary px-7 py-3.5 text-light-on-primary font-label text-label-lg shadow-md transition-all duration-300 hover:bg-light-primary-container hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="relative z-10 font-semibold tracking-wide">
                  Book an Appointment
                </span>
                <span
                  className="material-symbols-outlined text-[18px] relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
                {/* Glistening Shimmer Light Effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-light-outline-variant bg-light-surface-container-lowest/90 px-6 py-3.5 font-label text-label-lg text-light-primary shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-rose-gold hover:bg-blush-tint/70 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Services</span>
                <span
                  className="material-symbols-outlined text-[18px] text-rose-gold"
                  aria-hidden="true"
                >
                  expand_more
                </span>
              </Link>
            </div>

            {/* Value Trust Strip */}
            <div className="hero-trust-bar w-full mt-2 pt-5 border-t border-light-outline-variant/50 flex flex-wrap items-center gap-y-2 gap-x-6 font-body text-body-sm text-light-on-surface-variant">
              <div className="flex items-center gap-1.5">
                <span
                  className="material-symbols-outlined text-[18px] text-rose-gold"
                  aria-hidden="true"
                >
                  verified
                </span>
                <span>Certified Bridal Masters</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className="material-symbols-outlined text-[18px] text-rose-gold"
                  aria-hidden="true"
                >
                  spa
                </span>
                <span>Pure Botanical Care</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className="material-symbols-outlined text-[18px] text-rose-gold"
                  aria-hidden="true"
                >
                  favorite
                </span>
                <span>Private Luxury Suites</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Visual Showcase with Parallax & Floating Cards */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0 flex items-center justify-center">
            {/* Outer Decorative Glow Container */}
            <div className="relative w-full max-w-lg">
              {/* Floating Card 1: Guest Satisfaction & Rating (Top Right) */}
              <div className="hero-floating-card-1 absolute -top-4 -right-2 sm:-right-6 z-20 flex items-center gap-3 rounded-2xl border border-light-outline-variant/80 bg-light-surface-container-lowest/95 px-4 py-3 shadow-xl backdrop-blur-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blush-tint text-rose-gold shadow-xs">
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden="true"
                  >
                    star
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-headline font-semibold text-light-primary text-[15px]">
                      4.9 / 5.0
                    </span>
                    <span
                      className="text-rose-gold text-[13px] tracking-tighter"
                      aria-label="5 stars"
                    >
                      ★★★★★
                    </span>
                  </div>
                  <p className="font-label text-[12px] text-light-secondary font-medium">
                    1,200+ Radiant Brides
                  </p>
                </div>
              </div>

              {/* Main Portrait Frame with Double Luxury Border */}
              <div className="hero-main-img-box relative overflow-hidden rounded-3xl border-2 border-rose-gold/30 bg-light-surface-container-lowest p-2.5 sm:p-3 shadow-2xl shadow-rose-gold/15">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={heroImage}
                    alt="Radiant beauty portrait inside Shreeji Parlour"
                    className="hero-parallax-img aspect-[4/3] sm:aspect-[16/12] w-full rounded-2xl object-cover transition-transform duration-700 ease-out hover:scale-105"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating Card 2: Signature Bridal Highlight (Bottom Left) */}
              <div className="hero-floating-card-2 absolute -bottom-6 -left-2 sm:-left-6 z-20 flex items-center gap-3.5 rounded-2xl border border-light-outline-variant/80 bg-light-surface-container-lowest/95 p-3 sm:p-3.5 shadow-2xl backdrop-blur-md">
                <div className="relative shrink-0">
                  <img
                    src={bridalThumb}
                    alt="Signature Bridal Makeup Artistry"
                    className="h-12 w-12 rounded-xl object-cover ring-2 ring-rose-gold/40 shadow-xs"
                  />
                  <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-success" />
                  </span>
                </div>
                <div>
                  <span className="font-label text-[11px] uppercase tracking-wider text-light-secondary font-semibold">
                    Signature Atelier
                  </span>
                  <p className="font-headline text-[14px] sm:text-[15px] font-semibold text-light-primary leading-tight">
                    HD Bridal &amp; Glam Rituals
                  </p>
                  <span className="inline-flex items-center gap-1 font-body text-[12px] text-rose-gold font-medium mt-0.5">
                    ● 2026-27 Bookings Open
                  </span>
                </div>
              </div>

              {/* Circular Luxury Atelier Stamp (Bottom Right Accent) */}
              <div className="hero-stamp absolute -bottom-5 right-4 sm:-right-4 z-10 hidden sm:flex items-center justify-center w-24 h-24">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Rotating Circular Text */}
                  <svg
                    className="hero-stamp-svg w-full h-full text-light-secondary"
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                  >
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="font-label text-[8px] uppercase tracking-[2.8px] fill-light-secondary font-semibold">
                      <textPath xlinkHref="#circlePath">
                        • SHREEJI PARLOUR • LUXURY ATELIER
                      </textPath>
                    </text>
                  </svg>
                  {/* Center Lotus Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-blush-tint flex items-center justify-center shadow-xs text-rose-gold">
                      <span
                        className="material-symbols-outlined text-[16px]"
                        aria-hidden="true"
                      >
                        spa
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="gsap-reveal mx-auto max-w-7xl px-gutter-md py-section-sm md:px-gutter-lg lg:py-section-lg">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-label text-label-md uppercase tracking-widest text-light-secondary">
              The Shreeji Standard
            </span>
            <h2 className="mt-2 font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary text-balance">
              Why Women Trust Shreeji Parlour
            </h2>
          </div>
          <p className="max-w-md font-body text-body-md text-light-on-surface-variant text-pretty">
            Every visit is designed around comfort, clinical hygiene, and
            unhurried personal attention.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-gutter-lg sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          <div className="flex flex-col gap-3 rounded-lg border border-light-outline-variant bg-light-surface-container-lowest p-gutter-lg transition-transform hover:-translate-y-1 duration-card-hover">
            <span
              className="material-symbols-outlined text-[28px] text-rose-gold"
              aria-hidden="true"
            >
              workspace_premium
            </span>
            <h3 className="font-headline text-headline-sm text-light-on-surface">
              Professional Beauty Experts
            </h3>
            <p className="font-body text-body-sm text-light-on-surface-variant">
              Certified makeup artists, aestheticians, and stylists with years
              of bridal and salon experience.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-lg border border-light-outline-variant bg-light-surface-container-lowest p-gutter-lg transition-transform hover:-translate-y-1 duration-card-hover">
            <span
              className="material-symbols-outlined text-[28px] text-rose-gold"
              aria-hidden="true"
            >
              verified
            </span>
            <h3 className="font-headline text-headline-sm text-light-on-surface">
              Premium Quality Products
            </h3>
            <p className="font-body text-body-sm text-light-on-surface-variant">
              Dermatologically tested skincare, botanical hair elixirs, and
              authentic luxury cosmetics.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-lg border border-light-outline-variant bg-light-surface-container-lowest p-gutter-lg transition-transform hover:-translate-y-1 duration-card-hover">
            <span
              className="material-symbols-outlined text-[28px] text-rose-gold"
              aria-hidden="true"
            >
              favorite
            </span>
            <h3 className="font-headline text-headline-sm text-light-on-surface">
              Personalized Treatments
            </h3>
            <p className="font-body text-body-sm text-light-on-surface-variant">
              Consultations tailored to your skin type, hair texture, and
              personal occasion.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-lg border border-light-outline-variant bg-light-surface-container-lowest p-gutter-lg transition-transform hover:-translate-y-1 duration-card-hover">
            <span
              className="material-symbols-outlined text-[28px] text-rose-gold"
              aria-hidden="true"
            >
              spa
            </span>
            <h3 className="font-headline text-headline-sm text-light-on-surface">
              Hygienic Environment
            </h3>
            <p className="font-body text-body-sm text-light-on-surface-variant">
              Hospital-grade sterilization, single-use disposables, and serene
              private suites.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-lg border border-light-outline-variant bg-light-surface-container-lowest p-gutter-lg sm:col-span-2 lg:col-span-2 transition-transform hover:-translate-y-1 duration-card-hover">
            <span
              className="material-symbols-outlined text-[28px] text-rose-gold"
              aria-hidden="true"
            >
              sentiment_satisfied
            </span>
            <h3 className="font-headline text-headline-sm text-light-on-surface">
              Customer Satisfaction
            </h3>
            <p className="font-body text-body-sm text-light-on-surface-variant">
              Hundreds of returning guests and radiant brides across every
              season, cared for with unhurried personal attention.
            </p>
          </div>
        </div>
      </section>
      <HomeVisitServices />
      {/* Popular Services (Curated Menu) */}
      <section className="bg-light-surface-container-low py-section-sm lg:py-section-lg">
        <div className="mx-auto max-w-7xl px-gutter-md md:px-gutter-lg">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-label text-label-md uppercase tracking-widest text-light-secondary">
                Curated Menu
              </span>
              <h2 className="mt-2 font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary text-balance">
                Popular Beauty Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary hover:text-light-secondary transition-colors"
            >
              View All Services
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="gsap-service-grid grid grid-cols-1 gap-gutter-lg sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {services.map((item) => (
              <Link
                key={item.id}
                to={`/services/${item.slug}`}
                className="gsap-service-card group flex flex-col overflow-hidden rounded-lg border border-light-outline-variant bg-light-surface-container-lowest transition-all duration-card-hover ease-card-hover hover:border-rose-gold hover:shadow-md"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-headline text-headline-sm text-light-on-surface group-hover:text-light-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 font-body text-body-sm text-light-on-surface-variant line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 font-label text-label-lg text-light-primary group-hover:translate-x-1 transition-transform">
                    Explore Service
                    <span
                      className="material-symbols-outlined text-[16px]"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Parallax About Section */}
      <section
        ref={aboutSectionRef}
        onMouseMove={handleAboutMouseMove}
        onMouseLeave={handleAboutMouseLeave}
        className="about-parallax-section relative overflow-hidden bg-gradient-to-b from-light-surface via-light-surface-container-low/40 to-light-surface py-section-sm lg:py-section-lg select-none"
      >
        {/* Ambient Parallax Glowing Orbs */}
        <div
          className="about-ambient-orb pointer-events-none absolute -bottom-16 -left-16 w-96 h-96 rounded-full bg-blush-tint/60 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-10 right-10 w-80 h-80 rounded-full bg-rose-gold/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-gutter-md md:px-gutter-lg relative z-10">
          <div className="grid grid-cols-1 items-center gap-gutter-xl lg:grid-cols-12">
            {/* Left Column: Parallax Image Showcase */}
            <div className="lg:col-span-6 relative">
              {/* Double luxury bordered frame */}
              <div className="about-parallax-frame relative rounded-3xl border-2 border-rose-gold/25 bg-light-surface-container-lowest p-2.5 sm:p-3 shadow-2xl shadow-rose-gold/10 transition-transform">
                {/* Window with hidden overflow for internal smooth image scroll parallax */}
                <div className="overflow-hidden rounded-2xl relative aspect-[4/3] w-full bg-light-surface-container-low">
                  <img
                    src={OurSanctuary}
                    alt="Serene interior of Shreeji Parlour"
                    className="about-parallax-img absolute inset-0 w-full h-[130%] object-cover -top-[15%] will-change-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-light-primary/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Experience Badge with Counter-Parallax */}
              <div className="about-floating-badge absolute -bottom-6 -right-2 sm:-right-6 z-20 flex items-center gap-3.5 rounded-2xl border border-light-outline-variant/80 bg-light-surface-container-lowest/95 p-3.5 sm:p-4 shadow-xl backdrop-blur-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blush-tint text-rose-gold shadow-xs">
                  <span
                    className="material-symbols-outlined text-[24px]"
                    aria-hidden="true"
                  >
                    spa
                  </span>
                </div>
                <div>
                  <span className="font-label text-[11px] uppercase tracking-wider text-light-secondary font-semibold">
                    Women-Only Sanctuary
                  </span>
                  <p className="font-headline text-[15px] sm:text-[16px] font-semibold text-light-primary leading-tight">
                    12+ Years of Trusted Care
                  </p>
                  <span className="font-body text-[12px] text-light-on-surface-variant">
                    Unhurried, restorative rituals
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Text & Trust Pillars */}
            <div className="flex flex-col items-start gap-5 lg:col-span-6 lg:pl-4 mt-6 lg:mt-0">
              {/* Eyebrow Pill */}
              <div className="about-stagger-item inline-flex items-center gap-2 rounded-full border border-rose-gold/30 bg-light-surface-container-lowest px-3.5 py-1.5 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-gold" />
                <span className="font-label text-label-sm font-semibold tracking-widest uppercase text-light-secondary">
                  Our Sanctuary
                </span>
              </div>

              <h2 className="about-stagger-item font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary text-balance leading-tight">
                A Little Care Can Make You Feel Beautiful
              </h2>

              <p className="about-stagger-item max-w-prose font-body text-body-md lg:text-body-lg text-light-on-surface-variant text-pretty leading-relaxed">
                At Shreeji Parlour, we believe beauty is a quiet ritual of
                self-respect. Founded as a warm, women-only sanctuary, our
                studio blends timeless Indian beauty wisdom with modern clinical
                skincare and luxury haircare.
              </p>

              <p className="about-stagger-item max-w-prose font-body text-body-md text-light-on-surface-variant text-pretty">
                Whether you are preparing for your wedding day or taking an
                unhurried hour for yourself after work, our specialists ensure
                you leave feeling rested, confident, and luminous.
              </p>

              {/* 3 Pillar Feature Cards */}
              <div className="about-stagger-item grid grid-cols-2 sm:grid-cols-3 gap-3 w-full py-2">
                <div className="rounded-xl border border-light-outline-variant/60 bg-light-surface-container-lowest/80 p-3 text-center shadow-xs">
                  <span className="font-headline text-headline-sm text-light-primary block font-semibold">
                    100%
                  </span>
                  <span className="font-label text-[12px] text-light-secondary font-medium">
                    Women-Only
                  </span>
                </div>
                <div className="rounded-xl border border-light-outline-variant/60 bg-light-surface-container-lowest/80 p-3 text-center shadow-xs">
                  <span className="font-headline text-headline-sm text-light-primary block font-semibold">
                    12+ Yrs
                  </span>
                  <span className="font-label text-[12px] text-light-secondary font-medium">
                    Master Artistry
                  </span>
                </div>
                <div className="rounded-xl border border-light-outline-variant/60 bg-light-surface-container-lowest/80 p-3 text-center shadow-xs col-span-2 sm:col-span-1">
                  <span className="font-headline text-headline-sm text-light-primary block font-semibold">
                    UV Pure
                  </span>
                  <span className="font-label text-[12px] text-light-secondary font-medium">
                    Sterilization
                  </span>
                </div>
              </div>

              <div className="about-stagger-item pt-1">
                <Button
                  to="/about"
                  variant="secondary"
                  className="group px-7 py-3.5 border-rose-gold/60 text-light-primary hover:bg-blush-tint/70 hover:scale-[1.02] transition-all"
                >
                  <span>Know More About Us</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Homepackages />
      {/* Gallery Preview */}
      <Homegallery />

      {/* Testimonials */}
      <section className="bg-blush-tint py-section-sm lg:py-section-lg">
        <div className="mx-auto max-w-7xl px-gutter-md md:px-gutter-lg">
          <div className="mb-10 text-center">
            <span className="font-label text-label-md uppercase tracking-widest text-light-secondary">
              Guest Stories
            </span>
            <h2 className="mt-2 font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary text-balance">
              Loved by Our Guests
            </h2>
            <p className="mt-1 font-body text-body-sm text-light-on-surface-variant">
              Sample testimonials — replace with verified client reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-gutter-lg md:grid-cols-3 items-stretch">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="flex flex-col justify-between rounded-lg border border-light-outline-variant bg-light-surface-container-lowest p-gutter-lg shadow-sm"
              >
                <div>
                  <div
                    className="mb-3 flex items-center gap-0.5 text-rose-gold"
                    aria-label="5 out of 5 stars"
                  >
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-body-md text-light-on-surface-variant text-pretty italic">
                    "{t.quote}"
                  </p>
                </div>
                <footer className="mt-5 pt-4 border-t border-light-outline-variant">
                  <h3 className="font-headline text-headline-sm text-light-on-surface">
                    {t.author}
                  </h3>
                  <p className="font-body text-body-sm text-light-secondary">
                    {t.tag}
                  </p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gsap-reveal mx-auto max-w-7xl px-gutter-md py-section-sm md:px-gutter-lg lg:py-section-lg">
        <div className="flex flex-col items-center justify-between gap-6 rounded-xl border border-light-outline-variant bg-light-primary px-gutter-lg py-12 text-center text-light-on-primary md:flex-row md:px-12 md:text-left shadow-lg">
          <div>
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-primary">
              Ready to Feel Your Best?
            </h2>
            <p className="mt-2 font-body text-body-lg text-light-on-primary-container">
              Book your beauty session with Shreeji Parlour today.
            </p>
          </div>
          <Link
            to="/book-appointment"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-light-surface-container-lowest px-8 py-4 font-label text-label-lg text-light-primary shadow-sm transition-all duration-state-change hover:bg-blush-tint hover:scale-105"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}
