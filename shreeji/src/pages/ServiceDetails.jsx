import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '../components/animations/gsapSetup';
import { services } from '../data/services';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ServiceDetails() {
  const { slug } = useParams();
  const containerRef = useRef(null);

  // Find service by slug or fallback to first
  const currentService = services.find(s => s.slug === slug) || services[2]; // fallback to bridal

  // Related services (exclude current)
  const relatedServices = services.filter(s => s.slug !== currentService.slug).slice(0, 3);

  // FAQ state
  const [openFaq, setOpenFaq] = useState(0);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.from('.service-details-reveal', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, { scope: containerRef, dependencies: [currentService] });

  return (
    <div ref={containerRef}>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-gutter-md pt-6 md:px-gutter-lg">
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 font-label text-label-md text-light-on-surface-variant hover:text-light-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
            arrow_back
          </span>
          Back to All Services
        </Link>
      </div>

      {/* Service Hero & Sticky Booking Card */}
      <section className="mx-auto max-w-7xl px-gutter-md py-8 md:px-gutter-lg lg:py-12">
        <div className="grid grid-cols-1 gap-gutter-xl lg:grid-cols-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-8 flex flex-col gap-8 service-details-reveal">
            {/* Image */}
            <div className="overflow-hidden rounded-xl border border-light-outline-variant bg-light-surface-container-lowest p-2 shadow-sm">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="aspect-[16/10] w-full rounded-lg object-cover"
                loading="eager"
              />
            </div>

            {/* Header info */}
            <div>
              <span className="font-label text-label-md uppercase tracking-widest text-light-secondary">
                {currentService.categoryLabel}
              </span>
              <h1 className="mt-2 font-display text-display-md-mobile lg:text-display-md text-light-primary text-balance">
                {currentService.title}
              </h1>
              <p className="mt-4 font-body text-body-lg text-light-on-surface-variant text-pretty">
                {currentService.fullDescription || currentService.description}
              </p>
            </div>

            {/* Benefits & What's Included */}
            <div className="grid grid-cols-1 gap-gutter-lg md:grid-cols-2">
              <div className="rounded-xl border border-light-outline-variant bg-light-surface-container-lowest p-gutter-lg shadow-sm">
                <h2 className="font-headline text-headline-sm text-light-primary">
                  Benefits of the Treatment
                </h2>
                <ul className="mt-4 flex flex-col gap-2.5 font-body text-body-md text-light-on-surface-variant">
                  {currentService.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[18px] text-light-secondary mt-0.5" aria-hidden="true">
                        check_circle
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-light-outline-variant bg-light-surface-container-lowest p-gutter-lg shadow-sm">
                <h2 className="font-headline text-headline-sm text-light-primary">
                  What's Included
                </h2>
                <ul className="mt-4 flex flex-col gap-2.5 font-body text-body-md text-light-on-surface-variant">
                  {currentService.whatsIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[18px] text-light-secondary mt-0.5" aria-hidden="true">
                        {idx === 0 ? 'spa' : idx === 1 ? 'brush' : 'content_cut'}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQs */}
            {currentService.faqs && currentService.faqs.length > 0 && (
              <div className="rounded-xl border border-light-outline-variant bg-light-surface-container-low p-gutter-lg shadow-sm">
                <h2 className="font-headline text-headline-md text-light-primary">
                  Frequently Asked Questions
                </h2>
                <div className="mt-5 flex flex-col gap-3">
                  {currentService.faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="border-b border-light-outline-variant pb-3 last:border-b-0"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                          className="w-full flex items-center justify-between text-left py-2 font-title text-title-md text-light-on-surface hover:text-light-primary transition-colors"
                        >
                          <span>{faq.question}</span>
                          {isOpen ? <ChevronUp className="w-5 h-5 text-light-secondary shrink-0 ml-2" /> : <ChevronDown className="w-5 h-5 text-light-secondary shrink-0 ml-2" />}
                        </button>
                        {isOpen && (
                          <p className="mt-1 font-body text-body-md text-light-on-surface-variant pb-2 animate-in fade-in duration-200">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Sticky Booking Summary */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 w-full">
            <div className="rounded-xl border border-light-outline-variant bg-light-surface-container-lowest p-gutter-xl shadow-sm">
              <span className="font-label text-label-sm uppercase tracking-wider text-light-secondary">
                Service Summary
              </span>
              <h2 className="mt-1 font-headline text-headline-sm text-light-primary">
                {currentService.title}
              </h2>

              <div className="mt-6 flex flex-col gap-4 border-y border-light-outline-variant py-5">
                <div className="flex items-center justify-between">
                  <span className="font-body text-body-md text-light-on-surface-variant">
                    Estimated Duration
                  </span>
                  <span className="font-label text-label-lg text-light-on-surface tabular-nums">
                    {currentService.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-body text-body-md text-light-on-surface-variant">
                    Sample Price
                  </span>
                  <span className="font-headline text-headline-md text-light-primary tabular-nums">
                    {currentService.price}
                  </span>
                </div>
              </div>

              <p className="mt-4 font-body text-body-sm text-light-on-surface-variant">
                Includes private suite access, personalized pre-treatment consultation, and dedicated styling assistance.
              </p>

              <Link
                to={`/book-appointment?service=${encodeURIComponent(`${currentService.title} (${currentService.price})`)}`}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-light-primary px-6 py-3.5 text-light-on-primary shadow-sm hover:bg-light-primary-container transition-all hover:scale-[1.02]"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  calendar_today
                </span>
                <span className="font-label text-label-lg">Book This Service</span>
              </Link>

              <Link
                to="/contact"
                className="mt-3 flex w-full items-center justify-center rounded-full border border-light-outline-variant px-6 py-3 font-label text-label-md text-light-primary hover:bg-blush-tint transition-colors"
              >
                Ask a Specialist
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-light-surface-container-low py-section-sm">
        <div className="mx-auto max-w-7xl px-gutter-md md:px-gutter-lg">
          <h2 className="mb-6 font-headline text-headline-md text-light-primary">
            Related Services
          </h2>
          <div className="grid grid-cols-1 gap-gutter-lg md:grid-cols-3">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                to={`/services/${rel.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-light-outline-variant bg-light-surface-container-lowest hover:border-rose-gold transition-colors shadow-sm"
              >
                <div className="overflow-hidden">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-headline text-headline-sm text-light-on-surface group-hover:text-light-primary transition-colors">
                    {rel.title}
                  </h3>
                  <p className="mt-1 font-body text-body-sm text-light-secondary tabular-nums">
                    {rel.duration} • {rel.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
