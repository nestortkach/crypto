import React from 'react';
import css from './InvestBanner.module.scss';
import { Button } from '../../components/Button';
import { breakpoints, useBreakPoint } from 'hooks/useResponsive';
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export const InvestBanner = () => {
  const breakpoint = useBreakPoint();
  const isMobile = breakpoint === breakpoints.xs;
  return (
    <div className={css.component}>
      <div className='container'>
        <div className={css.card}>
          <div className={css.cardWrapper}>
            <h2 className={css.title}>Invest in crypto the smart way</h2>
            <p className={css.subtitle}>Start your Guardarian crypto subscription today & reap the benefits later!</p>
            <Button onClick={scrollToTop} size='md' green className={css.buyButton}>
              Subscribe now
            </Button>
          </div>
          {isMobile ? (
            <img src='/all-coins-mobile.png' alt='mobile-image' className={css.image} />
          ) : (
            <img src='/all-coins.png' alt='all-coins' className={css.image} />
          )}
        </div>
      </div>
    </div>
  );
};
