import React from 'react';
import cn from 'classnames';

import { Button } from '../../../components/Button';
import { breakpoints, useBreakPoint } from '../../../hooks/useResponsive';

import css from './HowToBuyVerge.module.scss';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export const HowToBuyVerge = ({ name, ticker, youtube, isBitcoinPage, bitcoinPageInfo }) => {
  const breakpoint = useBreakPoint();
  const isMobile = breakpoint === breakpoints.md;
  const componentClasses = cn(css.component, {
    [css.more]: !youtube,
  });
  return (
    <div className={componentClasses}>
      <div className='container'>
        {isBitcoinPage ? (
          <>
            <h2 className={css.title}>{bitcoinPageInfo.howToBuyHeader}</h2>
            <p className={css.subtitle}>{bitcoinPageInfo.howToBuySubHeader}</p>
          </>
        ) : (
          <>
            <h2 className={css.title}>
              How to buy {name} ({ticker})?
            </h2>
            <p className={css.subtitle}>
              Guardarian offers you convenient ways to buy {ticker} with VISA, MasterCard, Sepa, Swift, and Faster
              Payments.
            </p>
          </>
        )}
        <div className={css.box}>
          {!isMobile ? (
            <>
              {isBitcoinPage && !bitcoinPageInfo.isPaymentMethod && (
                <>
                  <div className={css.background} />
                  <ol className={css.list}>
                    <li className={css.listItem}>
                      Select {bitcoinPageInfo.fiatName.upper}
                      <span className={css.thin}> as your payment currency and </span>
                      enter desired amount.
                    </li>
                    <p className={css.listItem}>
                      Choose {ticker}
                      <span className={css.thin}> from the drop-down at the top of the page.</span>
                    </p>
                    <p className={css.listItem}>
                      Enter your crypto wallet address
                      <span className={css.thin}> & complete our instant checkout.</span>
                    </p>
                    <p className={css.listItem}>Receive your {ticker} in minutes.</p>
                  </ol>
                </>
              )}
              {isBitcoinPage && bitcoinPageInfo.isPaymentMethod && (
                <>
                  <div className={css.background} />
                  <ol className={css.list}>
                    <li className={css.listItem}>
                      Select your preferred fiat currency{' '}
                      <span className={css.thin}>& choose BTC from the drop-down at the top of the page.</span>
                    </li>
                    <li className={css.listItem}>
                      Paste your crypto wallet address{' '}
                      <span className={css.thin}>you will use to receive the asset.</span>
                    </li>
                    <li className={css.listItem}>
                      Select {bitcoinPageInfo.name}
                      <span className={css.thin}> as payment method & complete our instant checkout.</span>
                    </li>
                    <li className={css.listItem}>Receive your {ticker} in minutes.</li>
                  </ol>
                </>
              )}
              {!isBitcoinPage && (
                <>
                  <div className={css.background} />
                  <ol className={css.list}>
                    <li className={css.listItem}>
                      Select the preferred fiat currency,{' '}
                      <span className={css.thin}>such as EUR, USD, GBP and others.</span>
                    </li>
                    <p className={css.listItem}>
                      Choose {ticker}
                      <span className={css.thin}> from the drop-down menu at the top of the page.</span>
                    </p>
                    <p className={css.listItem}>
                      Paste your crypto wallet{' '}
                      <span className={css.thin}>address you will use to receive the asset.</span>
                    </p>
                    <p className={css.listItem}>Receive your {ticker} in minutes.</p>
                  </ol>
                </>
              )}
            </>
          ) : (
            <>
              {isBitcoinPage && !bitcoinPageInfo.isPaymentMethod && (
                <>
                  <div className={css.background} />
                  <ol className={css.list}>
                    <li className={css.listItem}>
                      Select {bitcoinPageInfo.fiatName.upper}
                      <span className={css.thin}> as your payment currency and </span>
                      enter desired amount.
                    </li>
                    <li className={css.listItem}>
                      Choose {ticker}
                      <span className={css.thin}> from the drop-down at the top of the page.</span>
                    </li>
                    <li className={css.listItem}>
                      Enter your crypto wallet address
                      <span className={css.thin}> & complete our instant checkout.</span>
                    </li>
                    <li className={css.listItem}>Receive your {ticker} in minutes.</li>
                  </ol>
                </>
              )}
              {isBitcoinPage && bitcoinPageInfo.isPaymentMethod && (
                <>
                  <div className={css.background} />
                  <ol className={css.list}>
                    <li className={css.listItem}>
                      Select your preferred fiat currency{' '}
                      <span className={css.thin}>& choose BTC from the drop-down at the top of the page.</span>
                    </li>
                    <li className={css.listItem}>
                      Paste your crypto wallet address{' '}
                      <span className={css.thin}>you will use to receive the asset.</span>
                    </li>
                    <li className={css.listItem}>
                      Select {bitcoinPageInfo.name}
                      <span className={css.thin}> as payment method & complete our instant checkout.</span>
                    </li>
                    <li className={css.listItem}>Receive your {ticker} in minutes.</li>
                  </ol>
                </>
              )}
              {!isBitcoinPage && (
                <>
                  <div className={css.background} />
                  <ol className={css.list}>
                    <li className={css.listItem}>
                      Select the preferred fiat currency,{' '}
                      <span className={css.thin}>such as EUR, USD, GBP and others.</span>
                    </li>
                    <li className={css.listItem}>
                      Choose {ticker}
                      <span className={css.thin}> from the drop-down menu at the top of the page.</span>
                    </li>
                    <li className={css.listItem}>
                      Paste your crypto wallet{' '}
                      <span className={css.thin}>address you will use to receive the asset.</span>
                    </li>
                    <li className={css.listItem}>Receive your {ticker} in minutes.</li>
                  </ol>
                </>
              )}
            </>
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
        {isBitcoinPage ? (
          <Button size='md' green className={css.buyButton} onClick={scrollToTop}>
            {bitcoinPageInfo.howToBuyButtonText}
          </Button>
        ) : (
          <Button size='md' green className={css.buyButton} onClick={scrollToTop}>
            BUY {ticker === '$TIPSY' ? name : ticker} NOW
          </Button>
        )}
      </div>
    </div>
  );
};
