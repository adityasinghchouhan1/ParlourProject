import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '../components/animations/gsapSetup';
import { teamMembers } from '../data/team';

export default function Team() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.from('.team-header-elem', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.from('.team-card-elem', {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.7,
      ease: 'power2.out'
    });

    gsap.from('.team-commitment-elem', {
      scrollTrigger: {
        trigger: '.team-commitment-elem',
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-light-surface-container-low py-section-sm">
        <div className="mx-auto max-w-7xl px-gutter-md md:px-gutter-lg text-center">
          <span className="team-header-elem font-label text-label-md uppercase tracking-widest text-light-secondary block">
            The Artisans
          </span>
          <h1 className="team-header-elem mt-2 font-display text-display-md-mobile lg:text-display-md text-light-primary text-balance">
            Meet Our Beauty Specialists
          </h1>
          <p className="team-header-elem mx-auto mt-3 max-w-2xl font-body text-body-lg text-light-on-surface-variant text-pretty">
            Every treatment at Shreeji Parlour is led by certified women specialists dedicated to gentle care, hygiene, and timeless artistry. (Staff names below are editable placeholders.)
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="mx-auto max-w-7xl px-gutter-md py-section-sm md:px-gutter-lg lg:py-section-lg">
        <div className="grid grid-cols-1 gap-gutter-xl md:grid-cols-3 items-stretch">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="team-card-elem flex flex-col overflow-hidden rounded-xl border border-light-outline-variant bg-light-surface-container-lowest shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-gutter-lg">
                <div>
                  <h2 className="font-headline text-headline-sm text-light-primary">
                    {member.name}{' '}
                    <span className="font-body text-body-sm text-light-on-surface-variant">
                      {member.tag}
                    </span>
                  </h2>
                  <p className="mt-1 font-label text-label-md text-light-secondary">
                    {member.role}
                  </p>
                  <p className="mt-3 font-body text-body-md text-light-on-surface-variant text-pretty">
                    {member.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience & Commitment */}
      <section className="team-commitment-elem bg-warm-beige py-section-sm lg:py-section-lg">
        <div className="mx-auto max-w-7xl px-gutter-md md:px-gutter-lg">
          <div className="grid grid-cols-1 gap-gutter-xl lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <span className="font-label text-label-md uppercase tracking-widest text-light-secondary block">
                Our Commitment
              </span>
              <h2 className="mt-2 font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary text-balance">
                Experience, Warmth &amp; Continuous Craft
              </h2>
              <p className="mt-4 font-body text-body-md text-light-on-surface-variant text-pretty">
                Our team attends regular workshops on dermatological skincare, modern bridal techniques, and studio sanitation. Every guest receives a calm consultation before any treatment begins.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                to="/book-appointment"
                className="inline-flex items-center justify-center rounded-full bg-light-primary px-7 py-3.5 font-label text-label-lg text-light-on-primary hover:bg-light-primary-container transition-all hover:scale-[1.02] shadow-sm text-center"
              >
                Book With Our Team
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-light-primary bg-light-surface-container-lowest px-7 py-3.5 font-label text-label-lg text-light-primary hover:bg-blush-tint transition-colors text-center"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
