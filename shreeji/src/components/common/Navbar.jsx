import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { salonInfo } from '../../data/salonInfo'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Packages', path: '/packages' },
  { name: 'Gallery', path: '/gallery' },
  // { name: 'Our Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-light-outline-variant bg-light-surface-container-lowest/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-gutter-md py-4 md:px-gutter-lg">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <span
            className="material-symbols-outlined text-[26px] text-rose-gold transition-transform duration-300 group-hover:rotate-12"
            aria-hidden="true"
          >
            spa
          </span>
          <span className="font-headline text-headline-sm text-light-primary">
            {salonInfo.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-label text-label-lg transition-colors duration-state-change ${
                  isActive
                    ? 'text-light-primary border-b-2 border-rose-gold pb-0.5'
                    : 'text-light-on-surface-variant hover:text-light-primary'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Book Appointment CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/book-appointment"
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-light-primary px-6 py-2.5 sm:py-3 text-light-on-primary shadow-sm transition-all duration-state-change ease-state-change hover:bg-light-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary"
          >
            <span className="font-label text-label-lg">Book Appointment</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label={
              isOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={isOpen}
            className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-full border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface hover:bg-blush-tint transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="border-t border-light-outline-variant bg-light-surface-container-lowest px-gutter-md py-4 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-label text-label-lg py-1.5 transition-colors ${
                    isActive
                      ? 'text-light-primary font-semibold'
                      : 'text-light-on-surface-variant hover:text-light-primary'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/book-appointment"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-light-primary px-6 py-3 font-label text-label-lg text-light-on-primary shadow-sm hover:bg-light-primary-container transition-colors"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
