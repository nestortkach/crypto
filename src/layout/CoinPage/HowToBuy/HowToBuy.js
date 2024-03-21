import React from 'react';
import cn from 'classnames';

import { Button } from 'components/Button';

import css from './HowToBuy.module.scss';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export const HowToBuy = ({ name, ticker, theme, youtube }) => {
  const buttonClass = cn(css.buyButton, {
    [css.xvg]: theme === 'xvg',
    [css.kishu]: theme === 'kishu',
    [css.shiba]: theme === 'shiba',
    [css.monero]: theme === 'monero',
  });

  return (
    <div className={css.component}>
      <div className='container'>
        <h3 className={css.title}>
          How to buy {name} ({ticker})?
        </h3>
        <p className={css.subTitle}>
          In order to buy {name} through Guardarian by means of payment systems such as SEPA, VISA, Mastercard, Union
          Pay, you need to perform just a few simple actions.
        </p>
        <div className={css.howToBuyContainer}>
          <div className={css.stepsContainer}>
            <div className={css.steps}>
              <div className={css.step}>
                <div className={css.stepNumber}>1</div>
                <h5 className={css.stepHeading}>Choose {name}</h5>
                <p className={css.stepSubHeading}>from the list of crypto</p>
              </div>
              <div className={css.step}>
                <div className={css.stepNumber}>2</div>
                <h5 className={css.stepHeading}>Pass Verification</h5>
                <p className={css.stepSubHeading}>in less than 5 minutes</p>
              </div>
            </div>
            <div className={css.steps}>
              <div className={css.step}>
                <div className={css.stepNumber}>3</div>
                <h5 className={css.stepHeading}>Choose payment option</h5>
                <p className={css.stepSubHeading}>and finish payment</p>
              </div>
              <div className={css.step}>
                <div className={css.stepNumber}>4</div>
                <h5 className={css.stepHeading}>Receive your {name}</h5>
                <p className={css.stepSubHeading}>and be happy 😉</p>
              </div>
            </div>
          </div>

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
        <Button size='md' green className={buttonClass} onClick={scrollToTop}>
          BUY {ticker} NOW
        </Button>
      </div>
    </div>
  );
};
