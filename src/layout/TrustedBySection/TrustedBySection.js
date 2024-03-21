import React from 'react';
import { useBreakPoint } from '../../hooks/useResponsive';
import css from './TrustedBySection.module.scss';

export const TrustedBySection = () => {
  const breakpoint = useBreakPoint();
  return (
    <div className={css.component}>
      <div className='container'>
        <div className={css.title}>Trusted by:</div>
        {breakpoint === 'tablet' || breakpoint === 'mobile' ? (
          <div className={css.cardFlex}>
            <div className={css.cardFlexRowOne}>
              <img src='/CoinEx-logo.svg' />
              <img src='/lyotrade-logo.svg' />
            </div>
            <div className={css.cardFlexRow}>
              <img src='/ProBit-Global-Logo.svg' />
              <img src='/tapbit-logo.svg' />
              <img src='/changenow-logo.svg' />
            </div>
          </div>
        ) : (
          <div className={css.cardFlex}>
            <img src='/ProBit-Global-Logo.svg' />
            <img src='/tapbit-logo.svg' />
            <img src='/CoinEx-logo.svg' />
            <img src='/lyotrade-logo.svg' />
            <img src='/changenow-logo.svg' />
          </div>
        )}
      </div>
    </div>
  );
};
