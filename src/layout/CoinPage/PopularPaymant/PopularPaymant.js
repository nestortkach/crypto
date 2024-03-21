import React from 'react';
import { useRouter } from 'next/dist/client/router';

import css from './PopularPaymant.module.scss';

export const PopularPaymant = ({
  name,
  ticker,
  currency,
  imgCreditDebit,
  imgFasterPayments,
  imgBankTpansfer,
  imgSepaTpansfer,
  isBitcoinPage,
  bitcoinPageInfo,
}) => {
  const router = useRouter();

  const goTo = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <div className={css.component}>
      <div className='container'>
        <div className={css.box}>
          <div className={css.textContent}>
            <h2>Popular payment methods to buy {ticker} </h2>
            {isBitcoinPage && !bitcoinPageInfo.isPaymentMethod ? (
              <p>{bitcoinPageInfo.popularPaymantSubheader}</p>
            ) : (
              <p>With Guardarian you can buy {name} with all the popular payment methods, such as the ones below.</p>
            )}
          </div>

          <div className={css.content}>
            <div className={css.steps}>
              <a href='/buy-bitcoin-with-card' onClick={(e) => goTo(e, '/buy-bitcoin-with-card')}>
                <div className={css.step}>
                  <div className={css.imageContainer}>
                    <img src={imgCreditDebit} alt='' />
                  </div>
                  <div className={css.stepTextContainer}>
                    <div className={css.stepTitle}>
                      <p>Buy {name} with</p> Credit/Debit Card
                    </div>
                  </div>
                </div>
              </a>
              <a href='/buy-bitcoin-with-bank-transfer' onClick={(e) => goTo(e, '/buy-bitcoin-with-bank-transfer')}>
                <div className={css.step}>
                  <div className={css.imageContainer}>
                    <img src={imgBankTpansfer} alt='' />
                  </div>
                  <div className={css.stepTextContainer}>
                    <div className={css.stepTitle}>
                      <p>Buy {name} with</p> Bank Transfer
                    </div>
                  </div>
                </div>
              </a>
              <a href='/buy-bitcoin-with-sepa-transfer' onClick={(e) => goTo(e, '/buy-bitcoin-with-sepa-transfer')}>
                <div className={css.step}>
                  <div className={css.imageContainer}>
                    <img src={imgSepaTpansfer} alt='' />
                  </div>
                  <div className={css.stepTextContainer}>
                    <div className={css.stepTitle}>
                      <p>Buy {name} with</p> Sepa Transfer
                    </div>
                  </div>
                </div>
              </a>
              <a href='/buy-bitcoin-with-faster-payment' onClick={(e) => goTo(e, '/buy-bitcoin-with-faster-payment')}>
                <div className={css.step}>
                  <div className={css.imageContainer}>
                    <img src={imgFasterPayments} alt='' />
                  </div>
                  <div className={css.stepTextContainer}>
                    <div className={css.stepTitle}>
                      <p>Buy {name} with</p> Faster Payments
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
