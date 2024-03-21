import React from 'react';
import Link from 'next/link';

import { breakpoints, useBreakPoint } from 'hooks/useResponsive';

import css from './SellAll.module.scss';

export const SellAll = ({ ticker }) => {
  const breakpoint = useBreakPoint();
  const isResponsive = breakpoint === breakpoints.xs;

  return (
    <div>
      <div className='container'>
        <div className={css.sellAll}>
          <img className={css.image} src={isResponsive ? '/coins-mobile.png' : '/coins.png'} alt='Coins' />
          <div className={css.content}>
            <h3 className={css.title}>Sell Bitcoin Or Other Crypto</h3>
            <p className={css.body}>
              The truth is, you can sell {ticker} in just a few seconds, just like you can sell bitcoin or any other
              cryptocurrency. You should definitely try and experience this experience where everything becomes
              possible. Guardarian cares about you and is ready to fully support you in selling any kind of
              cryptocurrency.
            </p>
            <div className={css.buttonContainer}>
              <Link href='/currencies'>
                <button type='button' className={css.button}>
                  All Currencies
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
