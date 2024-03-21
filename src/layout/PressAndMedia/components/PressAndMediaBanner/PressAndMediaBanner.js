import React from 'react';
import css from './PressAndMediaBanner.module.scss';
import { useBreakPoint } from 'hooks/useResponsive';

export default function PressAndMediaBanner() {
  const breakpoint = useBreakPoint();
  return (
    <div className={css.pressWrapper}>
      <section className={css.container}>
        <div className={css.txtArea}>
          <h1>Guardarian in Press and Media</h1>
          <p>Discover Guardarian through the latest press releases, articles and social media mentions.</p>
        </div>
        <div
          className={css.imgArea}
          style={{
            backgroundImage:
              breakpoint !== 'mobile' ? `url('pressAndMediaDesktop.png')` : `url('/press/hero-image-mobile.svg')`,
          }}
        ></div>
      </section>
    </div>
  );
}
