import React from 'react'
import { Link } from 'react-router-dom'
import bridal from './../../assets/images/bridal22.jpg'
import nails from './../../assets/images/nails2.jpg'
import hair from './../../assets/images/hairstyle.jpg'
import g2 from './../../assets/images/g2.png'
const Homegallery = () => {
  return (
    <>
      <section className="gsap-reveal mx-auto max-w-7xl px-gutter-md py-section-sm md:px-gutter-lg lg:py-section-lg">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-label text-label-md uppercase tracking-widest text-light-secondary">
              Portfolio
            </span>
            <h2 className="mt-2 font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary text-balance">
              Moments From Our Studio
            </h2>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary hover:text-light-secondary transition-colors"
          >
            Explore Full Gallery
            <span
              className="material-symbols-outlined text-[18px]"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-gutter-md md:grid-cols-4">
          <Link
            to="/gallery"
            className="overflow-hidden rounded-lg border border-light-outline-variant group"
          >
            <img
              src={bridal}
              alt="Bridal makeup look"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </Link>
          <div className="overflow-hidden rounded-lg border border-light-outline-variant group">
            <img
              src={g2}
              alt="Shreeji Parlour interior"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-light-outline-variant group">
            <img
              src={hair}
              alt="Editorial hair styling"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-light-outline-variant group">
            <img
              src={nails}
              alt="Rose gold nail art"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Homegallery
