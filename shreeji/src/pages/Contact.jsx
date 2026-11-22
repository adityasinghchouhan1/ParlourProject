import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '../components/animations/gsapSetup';
import { salonInfo } from '../data/salonInfo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.from('.contact-header-elem', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.from('.contact-col-elem', {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.7,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number.';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Reset after showing feedback
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      }, 500);
    }
  };

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-light-surface-container-low py-section-sm">
        <div className="mx-auto max-w-7xl px-gutter-md md:px-gutter-lg">
          <span className="contact-header-elem font-label text-label-md uppercase tracking-widest text-light-secondary block">
            Get In Touch
          </span>
          <h1 className="contact-header-elem mt-2 font-display text-display-md-mobile lg:text-display-md text-light-primary text-balance">
            Contact Shreeji Parlour
          </h1>
          <p className="contact-header-elem mt-3 max-w-2xl font-body text-body-lg text-light-on-surface-variant text-pretty">
            Have a question about bridal trials, group bookings, or skincare consultations? Reach out to our studio team.
          </p>
        </div>
      </section>

      {/* Two-Column Contact Layout */}
      <section className="mx-auto max-w-7xl px-gutter-md py-section-sm md:px-gutter-lg lg:py-section-lg">
        <div className="grid grid-cols-1 gap-gutter-xl lg:grid-cols-12">
          {/* Contact Form */}
          <div className="contact-col-elem lg:col-span-7 rounded-xl border border-light-outline-variant bg-light-surface-container-lowest p-gutter-xl shadow-sm">
            <h2 className="font-headline text-headline-md text-light-primary">
              Send Us a Message
            </h2>
            <p className="mt-1 font-body text-body-sm text-light-on-surface-variant">
              Sample inquiry form — connect to your preferred backend or email handler.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5" noValidate>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="font-label text-label-md text-light-on-surface">
                    Name *
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full rounded-md border ${
                      errors.name ? 'border-light-error' : 'border-light-outline-variant'
                    } bg-light-surface-container-lowest px-4 py-3 font-body text-body-md text-light-on-surface placeholder:text-light-outline focus:border-light-primary focus:ring-1 focus:ring-light-primary`}
                  />
                  {errors.name && (
                    <span className="font-body text-body-sm text-light-error">
                      {errors.name}
                    </span>
                  )}
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-label text-label-md text-light-on-surface">
                    Phone Number *
                  </span>
                  <input
                    type="tel"
                    inputMode="numeric"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full rounded-md border ${
                      errors.phone ? 'border-light-error' : 'border-light-outline-variant'
                    } bg-light-surface-container-lowest px-4 py-3 font-body text-body-md text-light-on-surface placeholder:text-light-outline focus:border-light-primary focus:ring-1 focus:ring-light-primary`}
                  />
                  {errors.phone && (
                    <span className="font-body text-body-sm text-light-error">
                      {errors.phone}
                    </span>
                  )}
                </label>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="font-label text-label-md text-light-on-surface">
                    Email *
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full rounded-md border ${
                      errors.email ? 'border-light-error' : 'border-light-outline-variant'
                    } bg-light-surface-container-lowest px-4 py-3 font-body text-body-md text-light-on-surface placeholder:text-light-outline focus:border-light-primary focus:ring-1 focus:ring-light-primary`}
                  />
                  {errors.email && (
                    <span className="font-body text-body-sm text-light-error">
                      {errors.email}
                    </span>
                  )}
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-label text-label-md text-light-on-surface">
                    Subject *
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Bridal inquiry, skincare, etc."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full rounded-md border ${
                      errors.subject ? 'border-light-error' : 'border-light-outline-variant'
                    } bg-light-surface-container-lowest px-4 py-3 font-body text-body-md text-light-on-surface placeholder:text-light-outline focus:border-light-primary focus:ring-1 focus:ring-light-primary`}
                  />
                  {errors.subject && (
                    <span className="font-body text-body-sm text-light-error">
                      {errors.subject}
                    </span>
                  )}
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-md text-light-on-surface">
                  Message *
                </span>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full rounded-md border ${
                    errors.message ? 'border-light-error' : 'border-light-outline-variant'
                  } bg-light-surface-container-lowest px-4 py-3 font-body text-body-md text-light-on-surface placeholder:text-light-on-surface-variant focus:border-light-primary focus:ring-1 focus:ring-light-primary`}
                ></textarea>
                {errors.message && (
                  <span className="font-body text-body-sm text-light-error">
                    {errors.message}
                  </span>
                )}
              </label>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-light-primary px-6 py-3 text-light-on-primary shadow-sm transition-all duration-state-change ease-state-change hover:bg-light-primary-container"
                >
                  <span className="font-label text-label-lg">Send Message</span>
                </button>
                {submitted && (
                  <span className="font-body text-body-sm text-success flex items-center gap-1.5 animate-in fade-in" role="status">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    Thank you! This is a sample confirmation message. We will reach out shortly.
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Studio Details & Map Placeholder */}
          <div className="contact-col-elem lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-xl border border-light-outline-variant bg-light-surface-container-lowest p-gutter-xl shadow-sm">
              <h2 className="font-headline text-headline-md text-light-primary">
                Salon Information
              </h2>
              <p className="mt-1 font-body text-body-sm text-light-on-surface-variant">
                Editable placeholder contact details
              </p>

              <ul className="mt-5 flex flex-col gap-4 font-body text-body-md text-light-on-surface-variant">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[20px] text-light-secondary mt-0.5" aria-hidden="true">
                    location_on
                  </span>
                  <span>{salonInfo.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px] text-light-secondary" aria-hidden="true">
                    call
                  </span>
                  <a href={`tel:${salonInfo.rawPhone}`} className="tabular-nums hover:text-light-primary transition-colors">
                    {salonInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px] text-light-secondary" aria-hidden="true">
                    mail
                  </span>
                  <a href={`mailto:${salonInfo.email}`} className="hover:text-light-primary transition-colors">
                    {salonInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[20px] text-light-secondary mt-0.5" aria-hidden="true">
                    schedule
                  </span>
                  <div>
                    <p className="font-medium text-light-on-surface">{salonInfo.hours.weekdays}</p>
                    <p className="text-body-sm text-light-on-surface-variant">{salonInfo.hours.closed}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={salonInfo.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-light-primary px-5 py-2.5 font-label text-label-md text-light-on-primary hover:bg-light-primary-container transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    chat
                  </span>
                  Chat on WhatsApp
                </a>
                <a
                  href={salonInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-light-outline-variant px-5 py-2.5 font-label text-label-md text-light-primary hover:bg-blush-tint transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Google Maps Location Visual */}
            <div className="flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-light-outline-variant bg-warm-beige p-gutter-lg text-center shadow-sm relative overflow-hidden">
              <span className="material-symbols-outlined text-[36px] text-light-secondary" aria-hidden="true">
                map
              </span>
              <h3 className="mt-2 font-headline text-headline-sm text-light-primary">
                Google Maps Location Placeholder
              </h3>
              <p className="mt-1 font-body text-body-sm text-light-on-surface-variant max-w-sm">
                Situated at C.G. Road, Navrangpura, Ahmedabad. Ample valet parking available for clients.
              </p>
              <a
                href="https://maps.google.com/?q=Navrangpura,Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 font-label text-label-sm text-light-primary hover:underline"
              >
                Open in Google Maps
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
