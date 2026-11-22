import React from 'react';

export default function PageHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  children
}) {
  const isCenter = align === 'center';

  return (
    <section className="bg-light-surface-container-low py-section-sm">
      <div className={`mx-auto max-w-7xl px-gutter-md md:px-gutter-lg ${isCenter ? 'text-center' : ''}`}>
        {eyebrow && (
          <span className="font-label text-label-md uppercase tracking-widest text-light-secondary block">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-2 font-display text-display-md-mobile lg:text-display-md text-light-primary text-balance">
          {title}
        </h1>
        {description && (
          <p className={`mt-3 font-body text-body-lg text-light-on-surface-variant text-pretty ${isCenter ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
