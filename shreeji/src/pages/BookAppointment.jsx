import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '../components/animations/gsapSetup';
import { services } from '../data/services';
import { packages } from '../data/packages';

const timeSlots = ['10:30 AM', '12:00 PM', '03:00 PM', '05:30 PM'];

export default function BookAppointment() {
  const [searchParams] = useSearchParams();
  const containerRef = useRef(null);

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Botanical Radiance Facial (₹1,800)');
  const [selectedPackage, setSelectedPackage] = useState('None');
  const [date, setDate] = useState(() => {
    // Tomorrow by default
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('10:30 AM');
  const [notes, setNotes] = useState('');

  // Validation & Submission
  const [errors, setErrors] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Pre-fill from URL params if present
  useEffect(() => {
    const urlService = searchParams.get('service');
    const urlPackage = searchParams.get('package');

    if (urlService) {
      setService(urlService);
    }
    if (urlPackage) {
      setSelectedPackage(urlPackage);
    }
  }, [searchParams]);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.from('.book-header-elem', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.from('.book-content-elem', {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.7,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = 'Please enter your full name.';
    if (!phone.trim()) {
      errs.phone = 'Please enter your mobile number.';
    } else if (!/^[0-9+ -]{8,15}$/.test(phone.trim())) {
      errs.phone = 'Please enter a valid mobile number.';
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!date) errs.date = 'Please select a date.';
    if (!timeSlot) errs.timeSlot = 'Please select a time slot.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsConfirmed(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setIsConfirmed(false);
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
  };

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-light-surface-container-low py-section-sm">
        <div className="mx-auto max-w-7xl px-gutter-md md:px-gutter-lg">
          <span className="book-header-elem font-label text-label-md uppercase tracking-widest text-light-secondary block">
            Reserve Your Visit
          </span>
          <h1 className="book-header-elem mt-2 font-display text-display-md-mobile lg:text-display-md text-light-primary text-balance">
            Book an Appointment
          </h1>
          <p className="book-header-elem mt-3 max-w-2xl font-body text-body-lg text-light-on-surface-variant text-pretty">
            Choose your preferred treatment, date, and time slot below. This interactive preview demonstrates the booking flow (no live backend connected).
          </p>
        </div>
      </section>

      {/* Booking Form & Summary */}
      <section className="mx-auto max-w-7xl px-gutter-md py-section-sm md:px-gutter-lg lg:py-section-lg">
        {!isConfirmed ? (
          <div id="booking-layout" className="grid grid-cols-1 gap-gutter-xl lg:grid-cols-12 items-start">
            {/* Form */}
            <form
              id="booking-form"
              onSubmit={handleSubmit}
              className="book-content-elem lg:col-span-8 rounded-xl border border-light-outline-variant bg-light-surface-container-lowest p-gutter-xl shadow-sm flex flex-col gap-6"
              noValidate
            >
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="font-label text-label-md text-light-on-surface">
                    1. Customer Name *
                  </span>
                  <input
                    id="bk-name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    2. Mobile Number *
                  </span>
                  <input
                    id="bk-phone"
                    type="tel"
                    inputMode="numeric"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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

              {/* Row 2: Email */}
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-md text-light-on-surface">
                  3. Email Address (Optional)
                </span>
                <div className="relative flex items-center">
                  <span
                    className="material-symbols-outlined pointer-events-none absolute left-3.5 text-[18px] text-light-outline"
                    aria-hidden="true"
                  >
                    mail
                  </span>
                  <input
                    id="bk-email"
                    type="email"
                    inputMode="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full rounded-md border ${
                      errors.email ? 'border-light-error' : 'border-light-outline-variant'
                    } bg-light-surface-container-lowest pl-10 pr-4 py-3 font-body text-body-md text-light-on-surface placeholder:text-light-outline focus:border-light-primary focus:ring-1 focus:ring-light-primary`}
                  />
                </div>
                {errors.email && (
                  <span className="font-body text-body-sm text-light-error">
                    {errors.email}
                  </span>
                )}
              </label>

              {/* Row 3: Service & Package */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="font-label text-label-md text-light-on-surface">
                    4. Select Service *
                  </span>
                  <select
                    id="bk-service"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-md border border-light-outline-variant bg-light-surface-container-lowest px-4 py-3 font-body text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={`${s.title} (${s.price})`}>
                        {s.title} ({s.price})
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-label text-label-md text-light-on-surface">
                    5. Select Package (Optional)
                  </span>
                  <select
                    id="bk-package"
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="w-full rounded-md border border-light-outline-variant bg-light-surface-container-lowest px-4 py-3 font-body text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                  >
                    <option value="None">No package selected</option>
                    {packages.map((pkg) => (
                      <option key={pkg.id} value={`${pkg.name} (${pkg.price})`}>
                        {pkg.name} ({pkg.price})
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {/* Row 4: Date & Time Slot */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="font-label text-label-md text-light-on-surface">
                    6. Select Appointment Date *
                  </span>
                  <input
                    id="bk-date"
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-md border border-light-outline-variant bg-light-surface-container-lowest px-4 py-3 font-body text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                  />
                  {errors.date && (
                    <span className="font-body text-body-sm text-light-error">
                      {errors.date}
                    </span>
                  )}
                </label>

                <div className="flex flex-col gap-1.5">
                  <span className="font-label text-label-md text-light-on-surface">
                    7. Select Available Time Slot *
                  </span>
                  <div className="flex flex-wrap gap-2" role="group" aria-label="Available Time Slots">
                    {timeSlots.map((slot) => {
                      const isSelected = timeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTimeSlot(slot)}
                          className={`slot-chip inline-flex items-center gap-1 rounded-full px-3.5 py-2 font-label text-label-md tabular-nums transition-all ${
                            isSelected
                              ? 'bg-light-primary text-light-on-primary shadow-sm'
                              : 'border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface hover:bg-blush-tint'
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                  {errors.timeSlot && (
                    <span className="font-body text-body-sm text-light-error">
                      {errors.timeSlot}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 5: Notes */}
              <label className="flex flex-col gap-1.5">
                <span className="font-label text-label-md text-light-on-surface">
                  8. Additional Message (Optional)
                </span>
                <textarea
                  id="bk-notes"
                  rows="3"
                  placeholder="Any skin sensitivities, bridal trial notes, or specialist preference..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-md border border-light-outline-variant bg-light-surface-container-lowest px-4 py-3 font-body text-body-md text-light-on-surface placeholder:text-light-outline focus:border-light-primary focus:ring-1 focus:ring-light-primary"
                ></textarea>
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-light-primary px-8 py-4 text-light-on-primary shadow-sm hover:bg-light-primary-container transition-all hover:scale-[1.02]"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  calendar_today
                </span>
                <span className="font-label text-label-lg">Confirm Appointment</span>
              </button>
            </form>

            {/* Live Interactive Booking Summary Sidebar */}
            <aside className="book-content-elem lg:col-span-4 lg:sticky lg:top-24 rounded-xl border border-light-outline-variant bg-light-surface-container-lowest p-gutter-xl shadow-sm">
              <span className="font-label text-label-sm uppercase tracking-wider text-light-secondary">
                Booking Summary
              </span>
              <h2 className="mt-1 font-headline text-headline-sm text-light-primary">
                Your Appointment
              </h2>

              <dl className="mt-5 flex flex-col gap-3.5 border-y border-light-outline-variant py-5 font-body text-body-md">
                <div className="flex justify-between gap-3">
                  <dt className="text-light-on-surface-variant">Service</dt>
                  <dd id="sum-service" className="text-right font-medium text-light-on-surface">
                    {service}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-light-on-surface-variant">Package</dt>
                  <dd id="sum-package" className="text-right font-medium text-light-on-surface">
                    {selectedPackage}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-light-on-surface-variant">Date</dt>
                  <dd id="sum-date" className="text-right font-medium text-light-on-surface tabular-nums">
                    {date}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-light-on-surface-variant">Time Slot</dt>
                  <dd id="sum-slot" className="text-right font-medium text-light-primary tabular-nums">
                    {timeSlot}
                  </dd>
                </div>
              </dl>

              <p className="mt-4 font-body text-body-sm text-light-on-surface-variant">
                Pay at the salon after your treatment. Free rescheduling up to 4 hours before your slot.
              </p>
            </aside>
          </div>
        ) : (
          /* Appointment Confirmation Screen */
          <div
            id="booking-success"
            className="mx-auto max-w-2xl rounded-xl border border-light-outline-variant bg-light-surface-container-lowest p-gutter-xl text-center shadow-lg animate-in zoom-in-95 duration-300"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blush-tint text-light-primary mb-2">
              <span className="material-symbols-outlined text-[32px]" aria-hidden="true">
                check_circle
              </span>
            </div>
            <span className="mt-2 inline-block font-label text-label-md uppercase tracking-widest text-light-secondary">
              Sample Confirmation Preview
            </span>
            <h2 className="mt-2 font-headline text-headline-lg text-light-primary">
              Appointment Request Received
            </h2>
            <p className="mt-3 font-body text-body-md text-light-on-surface-variant text-pretty">
              Thank you, <span className="font-semibold text-light-on-surface">{name || 'Guest'}</span>. Your sample request for{' '}
              <span className="font-semibold text-light-on-surface">{service}</span> on{' '}
              <span className="font-semibold text-light-primary tabular-nums">
                {date} at {timeSlot}
              </span>{' '}
              has been recorded in this preview. (Connect a backend to send live confirmations.)
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full bg-light-primary px-6 py-3 font-label text-label-lg text-light-on-primary hover:bg-light-primary-container transition-colors shadow-sm"
              >
                Return to Home
              </Link>
              <button
                onClick={handleReset}
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-light-primary px-6 py-3 font-label text-label-lg text-light-primary hover:bg-blush-tint transition-colors"
              >
                Book Another Session
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
