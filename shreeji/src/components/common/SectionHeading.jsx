import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left', // 'left' or 'center'
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 ${isCenter ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <span className="font-label text-label-md uppercase tracking-widest text-light-secondary block">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 font-headline text-headline-lg-mobile lg:text-headline-lg text-light-primary text-balance">
        {title}
      </h2>
      {description && (
        <p className={`mt-2 font-body text-body-md text-light-on-surface-variant text-pretty ${isCenter ? 'mx-auto max-w-xl' : 'max-w-md'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
