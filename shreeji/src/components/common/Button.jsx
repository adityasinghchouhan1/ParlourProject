import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary', 'secondary', 'outline'
  className = '',
  icon,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-label text-label-lg transition-all duration-state-change ease-state-change focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  
  let variantStyles = "";
  if (variant === 'primary') {
    variantStyles = "bg-light-primary text-light-on-primary shadow-sm hover:bg-light-primary-container focus-visible:outline-light-primary";
  } else if (variant === 'secondary') {
    variantStyles = "border border-light-primary bg-light-surface-container-lowest text-light-primary hover:bg-blush-tint focus-visible:outline-light-primary";
  } else if (variant === 'outline') {
    variantStyles = "border border-light-outline-variant bg-light-surface-container-lowest text-light-primary hover:bg-blush-tint hover:border-rose-gold focus-visible:outline-light-primary";
  }

  const combinedClasses = `${baseStyles} ${variantStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {icon && <span className="material-symbols-outlined text-[18px]" aria-hidden="true">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {icon && <span className="material-symbols-outlined text-[18px]" aria-hidden="true">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {icon && <span className="material-symbols-outlined text-[18px]" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
