import React from 'react'
import { Link } from 'react-router-dom'

const Homegallery = () => {
  return (
    <>
      Link
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
              src="https://lh3.googleusercontent.com/aida/ALJJyrCFyp6qz5gdJqDkE3UtLGHkIH_VpDwPgf-H7ZlxcIJ0oXEoqovkD6g5fchD4prMMLQpBcH5ZqzpmrSvFqcce3-VbvYeBW66jmQ9JALceoTnTruMxwf_LBpKUBGWQ4lQMXZ-a1u1D9eQVYoXlwKJmXId53Nip0Kg92EmbQFWzk1HZco42dYwy9ky_N5cJc354ap8uov53HBFQoypg82JvM8G9cr4WC8wPwaEu-4wv6HTP2samyf9OyI"
              alt="Bridal makeup look"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </Link>
          <div className="overflow-hidden rounded-lg border border-light-outline-variant group">
            <img
              src="https://lh3.googleusercontent.com/aida/ALJJyrCP3FPtyMwu0TKws9MEb4iJLBf6v5Z9iHwUTnJIG8Rr7uGt2ZCLv4TT4vl0g7saxqKEiiHwCwfO3J-hOj99UsMyNRtj3MpjLlP3_9CSjHfbBOgGEAipn2JeJCjGHnrcYpP5SR8v2AVWW9yrKUmyhVsIo8Ku7692iOIodylyiF4XhSQnp_nQU3tOXKj-BYUQH3gvAOLsaTVF_HREBZgrbGkhDF9LSt7P-be61-mBTRFnfoEKeq5A30hotw"
              alt="Shreeji Parlour interior"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-light-outline-variant group">
            <img
              src="https://lh3.googleusercontent.com/aida/ALJJyrB-P0SPTilj37GYF0SkvrR_QDNoKoENz2NDc5vgfgU6LIgHAvK63boYtX4KNgRBGDZijwcli3OSXfbfKUL0ySTzktZaKZwnGqJRn2mEolI29jCSbOkXFQxbBpsZXXAwKQJoTfVGxCMDTUFAey8rqXs_uwcBuVQoaRKydtCBdxLz2E6TcJJP-6yUQJDAtVlBgYv_xSbyjGzPDwsLZaXg5HO7n_12NguGqvXX-y9XZq3W6f2PzxdMpQ"
              alt="Editorial hair styling"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-light-outline-variant group">
            <img
              src="https://lh3.googleusercontent.com/aida/ALJJyrDcMogz3PdzCjhMkAke2DGT30pxxQr4TuTXbGvzL6ZN3bL-grsW7Znq67Hwj9V8ccBNEk2XZu-XWpq05AzrGft1lgdkwyKHouGbvxa4WF-HZjcJwC1MEEez6aapwkm4xqdJ2J-qT-ho4-hE6OiZFeRjt36zMZk9s2WcX9nq9USJmWipB0x2H0jKZAt3KoA-w2g2-QI5aV-a_0byhhvol9XnzSGueM0xxVpNeWeCZLcywmM"
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
