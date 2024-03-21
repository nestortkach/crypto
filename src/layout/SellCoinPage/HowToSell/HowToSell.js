import React from 'react';
import cn from 'classnames';

import { Button } from 'components/Button';
import { breakpoints, useBreakPoint } from 'hooks/useResponsive';

import css from './HowToSell.module.scss';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export const HowToSell = ({ name, ticker, youtube }) => {
  const breakpoint = useBreakPoint();
  const isMobile = breakpoint === breakpoints.md;
  const componentClasses = cn(css.component, {
    [css.more]: !youtube,
  });

  return (
    <div className={componentClasses}>
      <div className='container'>
        <h2 className={css.title}>
          How to sell {name} ({ticker})
        </h2>
        <p className={css.subtitle}>
          In order to sell {name} through Guardarian by means of payment systems such as SEPA, VISA, Mastercard, Union
          Pay, you need to perform just a few simple actions.
        </p>

        <div className={css.box}>
          {!isMobile ? (
            <div className={css.list}>
              <p className={css.listItem}>
                1. Select the preferred currency (USD, EUR, CNY){' '}
                <span className={css.thin}>for which you want to sell {name}.</span>
              </p>
              <p className={css.listItem}>
                2. Select {ticker}
                <span className={css.thin}> from the drop-down menu at the top of the page.</span>
              </p>
              <p className={css.listItem}>
                3. Select the payment system you want to use to withdraw your money.
                <span className={css.thin}>
                  We have provided a choice of popular payment systems such as Visa, MasterCard, Union Pay and SEPA.
                </span>
              </p>
              <p className={css.listItem}>
                4. <span className={css.thin}>Also,</span> don&apos;t forget to recheck the wallet or credit card to
                which you will send the funds.
              </p>
            </div>
          ) : (
            <ol className={css.list}>
              <li className={css.listItem}>
                Select the preferred currency (USD or EUR){' '}
                <span className={css.thin}>in which you want to sell {name}.</span>
              </li>
              <li className={css.listItem}>
                Select {ticker}
                <span className={css.thin}> from the drop-down menu at the top of the page.</span>
              </li>
              <li className={css.listItem}>
                Select the payment system you want to use to pay for your {ticker}.{' '}
                <span className={css.thin}>
                  We have provided a choice of popular payment systems such as Visa, MasterCard, Union Pay and SEPA.
                </span>
              </li>
              <li className={css.listItem}>
                <span className={css.thin}>Also,</span> don&apos;t forget to specify the wallet to which you will send
                the funds.
              </li>
            </ol>
          )}

          {!youtube && (
            <div className={css.image}>
              <img src='/credit-cards.png' alt='' />
            </div>
          )}

          {youtube && (
            <iframe
              className={css.iframeBox}
              width='580'
              height='326'
              src={youtube}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          )}
        </div>

        <Button size='md' green className={css.buyButton} onClick={scrollToTop}>
          Sell {ticker} NOW
        </Button>
      </div>
    </div>
  );
};
