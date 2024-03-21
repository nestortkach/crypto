import React from 'react';
import css from './SolutionForBusinesses.module.scss';
import { Button } from '../../components/Button';
import Link from 'next/dist/client/link';

export const SolutionForBusinesses = () => {
  return (
    <div className={css.component}>
      <div className='container'>
        <div className={css.cardFlex}>
          <div className={css.wrapper}>
            <h2 className={css.maintitle}>Crypto subscription solutions for businesses</h2>

            <p className={css.subtitle}>
              Integrate one of our powerful on-ramp solutions to start onboarding new customers directly from your
              platform. Leverage Guardarian Subscriptions to maintain a stable revenue flow from recurring transactions.
            </p>
            <Link href='/for-partners'>
              <Button size='md' green className={css.buyButton}>
                Find out more
              </Button>
            </Link>
          </div>
          <img src='solution-for-business.png' className={css.image} />
        </div>
      </div>
    </div>
  );
};
