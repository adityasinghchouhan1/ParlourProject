import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '../components/animations/gsapSetup';
import { galleryItems, galleryCategories } from '../data/gallery';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const containerRef = useRef(null);

  const filteredItems = selectedFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.from('.gallery-header-elem', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.from('.gallery-grid-item', {
      opacity: 0,
      scale: 0.96,
      y: 20,
      stagger: 0.08,
      duration: 0.5,
      ease: 'power2.out'
    });
  }, { scope: containerRef, dependencies: [selectedFilter] });

  return (
    <div ref={containerRef}>
      {/* Header & Filters */}
      <section className="bg-light-surface-container-low py-section-sm">
        <div className="mx-auto max-w-7xl px-gutter-md md:px-gutter-lg">
          <span className="gallery-header-elem font-label text-label-md uppercase tracking-widest text-light-secondary block">
            Studio Portfolio
          </span>
          <h1 className="gallery-header-elem mt-2 font-display text-display-md-mobile lg:text-display-md text-light-primary text-balance">
            Beauty &amp; Bridal Gallery
          </h1>
          <p className="gallery-header-elem mt-3 max-w-2xl font-body text-body-lg text-light-on-surface-variant text-pretty">
            Browse our recent bridal transformations, soft-glam evening looks, skincare rituals, and serene salon spaces. Select any image to view in full detail.
          </p>

          <div
            className="gallery-header-elem mt-8 flex flex-wrap items-center gap-2.5"
            role="group"
            aria-label="Filter gallery by category"
          >
            {galleryCategories.map((cat) => {
              const isSelected = selectedFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedFilter(cat.id);
                    setActiveLightboxIndex(null);
                  }}
                  type="button"
                  aria-pressed={isSelected}
                  className={`inline-flex items-center justify-center rounded-full px-4 py-2 font-label text-label-md transition-all duration-state-change ${
                    isSelected
                      ? 'bg-light-primary text-light-on-primary shadow-sm'
                      : 'border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface hover:border-rose-gold hover:bg-blush-tint'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial Grid */}
      <section className="mx-auto max-w-7xl px-gutter-md py-section-sm md:px-gutter-lg lg:py-section-lg">
        <div className="grid grid-cols-1 gap-gutter-lg sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => setActiveLightboxIndex(index)}
              onKeyDown={(e) => e.key === 'Enter' && setActiveLightboxIndex(index)}
              className="gallery-grid-item group relative overflow-hidden rounded-xl border border-light-outline-variant bg-light-surface-container-lowest text-left shadow-sm hover:shadow-md cursor-pointer transition-shadow"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <span className="font-label text-label-sm uppercase tracking-wider text-light-secondary">
                  {item.categoryLabel}
                </span>
                <p className="mt-1 font-headline text-headline-sm text-light-on-surface">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-light-inverse-surface/90 backdrop-blur-sm p-gutter-md animate-in fade-in duration-200"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-xl bg-light-surface-container-lowest p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              type="button"
              aria-label="Close image preview"
              className="absolute top-6 right-6 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface hover:bg-blush-tint transition-colors shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Nav Button */}
            <button
              onClick={() =>
                setActiveLightboxIndex(
                  (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
                )
              }
              type="button"
              aria-label="Previous image"
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-light-outline-variant bg-light-surface-container-lowest/80 text-light-on-surface hover:bg-blush-tint transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={() =>
                setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length)
              }
              type="button"
              aria-label="Next image"
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-light-outline-variant bg-light-surface-container-lowest/80 text-light-on-surface hover:bg-blush-tint transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Lightbox Image */}
            <img
              src={filteredItems[activeLightboxIndex].image}
              alt={filteredItems[activeLightboxIndex].title}
              className="max-h-[70vh] w-full rounded-lg object-contain bg-light-surface-container-low"
            />
            <p className="mt-3 font-headline text-headline-sm text-light-primary text-center">
              {filteredItems[activeLightboxIndex].caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
