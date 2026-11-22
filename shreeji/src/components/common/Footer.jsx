import React from 'react'
import { Link } from 'react-router-dom'
import { salonInfo } from '../../data/salonInfo'

export default function Footer() {
  return (
    <footer className="border-t border-light-outline-variant bg-light-surface-container-low text-light-on-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-gutter-xl px-gutter-md py-12 md:grid-cols-2 md:px-gutter-lg lg:grid-cols-4">
        {/* Column 1: Brand & Social */}
        <div className="flex flex-col gap-3">
          <Link to="/" className="flex items-center gap-2 group">
            <span
              className="material-symbols-outlined text-[24px] text-rose-gold transition-transform group-hover:rotate-12"
              aria-hidden="true"
            >
              spa
            </span>
            <span className="font-headline text-headline-sm text-light-primary">
              {salonInfo.name}
            </span>
          </Link>
          <p className="font-body text-body-sm text-light-on-surface-variant text-pretty">
            {salonInfo.description}
          </p>
          <div className="mt-2 flex items-center gap-3">
            <a
              href={salonInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-light-outline-variant bg-light-surface-container-lowest text-light-primary hover:bg-blush-tint transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
              </svg>
            </a>
            <a
              href={salonInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-light-outline-variant bg-light-surface-container-lowest text-light-primary hover:bg-blush-tint transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.6V4.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H7.5v3h2.8v8h3.2Z" />
              </svg>
            </a>
            <a
              href={salonInfo.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-light-outline-variant bg-light-surface-container-lowest text-light-primary hover:bg-blush-tint transition-colors"
            >
              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden="true"
              >
                chat
              </span>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-label text-label-lg text-light-primary mb-3">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 font-body text-body-sm text-light-on-surface-variant">
            <li>
              <Link
                to="/"
                className="hover:text-light-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-light-primary transition-colors"
              >
                About Us
              </Link>
            </li>
            {/* <li><Link to="/team" className="hover:text-light-primary transition-colors">Our Team</Link></li> */}
            <li>
              <Link
                to="/gallery"
                className="hover:text-light-primary transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-light-primary transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/book-appointment"
                className="hover:text-light-primary transition-colors"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div>
          <h3 className="font-label text-label-lg text-light-primary mb-3">
            Our Services
          </h3>
          <ul className="flex flex-col gap-2 font-body text-body-sm text-light-on-surface-variant">
            <li>
              <Link
                to="/services/hd-bridal-makeup-artistry"
                className="hover:text-light-primary transition-colors"
              >
                Bridal & Party Makeup
              </Link>
            </li>
            <li>
              <Link
                to="/services/botanical-radiance-facial"
                className="hover:text-light-primary transition-colors"
              >
                Skin Care & Facials
              </Link>
            </li>
            <li>
              <Link
                to="/services/signature-cut-silk-blowdry"
                className="hover:text-light-primary transition-colors"
              >
                Hair Styling & Hair Spa
              </Link>
            </li>
            <li>
              <Link
                to="/services/rose-petal-spa-mani-pedi"
                className="hover:text-light-primary transition-colors"
              >
                Manicure, Pedicure & Nail Art
              </Link>
            </li>
            <li>
              <Link
                to="/packages"
                className="hover:text-light-primary transition-colors"
              >
                Special Packages
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Visit & Hours */}
        <div>
          <h3 className="font-label text-label-lg text-light-primary mb-3">
            Visit & Hours
          </h3>
          <ul className="flex flex-col gap-2 font-body text-body-sm text-light-on-surface-variant">
            <li>{salonInfo.address}</li>
            <li className="tabular-nums">
              <a
                href={`tel:${salonInfo.rawPhone}`}
                className="hover:text-light-primary transition-colors"
              >
                {salonInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${salonInfo.email}`}
                className="hover:text-light-primary transition-colors"
              >
                {salonInfo.email}
              </a>
            </li>
            <li className="pt-1 text-light-primary font-medium">
              {salonInfo.hours.weekdays}
            </li>
            <li>{salonInfo.hours.closed}</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-light-outline-variant py-5 text-center font-body text-body-sm text-light-on-surface-variant">
        © 2026 {salonInfo.name}. All rights reserved.
      </div>
    </footer>
  )
}
