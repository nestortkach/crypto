import React from 'react';

import { Button } from 'components/Button';
import { breakpoints, useBreakPoint } from 'hooks/useResponsive';

import css from './HowToBuyVerge.module.scss';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export const HowToBuyKishu = () => {
  const breakpoint = useBreakPoint();
  const isMobile = breakpoint === breakpoints.md;

  return (
    <div className={css.component}>
      <div className='container'>
        <h2 className={css.title}>How to buy Kishu Inu (KISHU)</h2>
        <p className={css.subtitle}>With Guardarian KISHU purchase is simple and transparent.</p>

        <div className={css.box}>
          {!isMobile ? (
            <div className={css.list}>
              <p className={css.listItem}>
                1. Choose KISHU <span className={css.thin}>from the list of crypto</span>
              </p>
              <p className={css.listItem}>
                2. Choose payment option <span className={css.thin}>Visa, MC, UnionPay or SEPA</span>
              </p>
              <p className={css.listItem}>
                3. Pass verification <span className={css.thin}>in less than 5 minutes</span>
              </p>
              <p className={css.listItem}>
                4. Receive KISHU <span className={css.thin}>and be happy 😉</span>
              </p>
            </div>
          ) : (
            <ol className={css.list}>
              <li className={css.listItem}>
                Choose KISHU <span className={css.thin}>from the list of crypto</span>
              </li>
              <li className={css.listItem}>
                Choose payment option <span className={css.thin}>Visa, MC, UnionPay or SEPA</span>
              </li>
              <li className={css.listItem}>
                Pass verification <span className={css.thin}>in less than 5 minutes</span>
              </li>
              <li className={css.listItem}>
                Receive KISHU{' '}
                <span className={css.thin}>
                  and be
                  <br /> happy 😉
                </span>
              </li>
            </ol>
          )}

          <img className={css.image} src='/kishu/buy.svg' alt='Buy KISHU' />
        </div>

        <Button size='md' green className={css.buyButton} onClick={scrollToTop}>
          BUY KISHU NOW
        </Button>
      </div>
    </div>
  );
};
