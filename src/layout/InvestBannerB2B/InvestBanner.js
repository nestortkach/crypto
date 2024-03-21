import React from 'react';
import { breakpoints, useBreakPoint } from 'hooks/useResponsive';
import Link from 'next/dist/client/link';
import { Button } from '../../components/Button';
import css from './InvestBanner.module.scss';

export const InvestBanner = () => {
  const breakpoint = useBreakPoint();
  const isMobile = breakpoint === breakpoints.xs;
  return (
    <div className={css.component}>
      <div className='container'>
        <div className={css.card}>
          <div className={css.cardWrapper}>
            <h2 className={css.title}>Integrate Guardarian Subscriptions</h2>
            <p className={css.subtitle}>
              Unlock the power of crypto subscriptions and start earning passive income already today.
            </p>
            <Link href='https://guardarian.com/for-partners#contactUsCrypto'>
              <Button size='md' green className={css.buyButton}>
                Integrate now
              </Button>
            </Link>
          </div>
          {isMobile ? (
            <img src='/all-coins-mobile.png' width={342} alt='mobile-image' className={css.image} />
          ) : (
            <img src='/coins-integrate.png' alt='all-coins' className={css.image} />
          )}
        </div>
      </div>
    </div>
  );
};
