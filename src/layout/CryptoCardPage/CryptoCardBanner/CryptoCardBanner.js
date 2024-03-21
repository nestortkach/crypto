import React, { useState } from 'react';
import Image from 'next/image';
import { useBreakPoint } from 'hooks/useResponsive';
import QrModal from './QrModal/QrModal';

import css from './CryptoCardBanner.module.scss';

export const CryptoCardBanner = () => {
  const breakpoint = useBreakPoint();
  const [visible, setVisible] = useState(false);
  return (
    <section className={css.banner}>
      <div className='container'>
        <div className={css.content}>
          <div className={css.actionArea}>
            <h1>
              Virtual & Plastic <span className={css.bold}>crypto debit card</span>
            </h1>

            <ul className={css.benefitsList}>
              <li>
                <Image
                  width={breakpoint !== 'mobile' ? 21 : 18}
                  height={breakpoint !== 'mobile' ? 21 : 18}
                  src='/crypto-card/check.svg'
                  alt='Check'
                />
                <p>Global purchases with all major cryptos</p>
              </li>
              <li>
                <Image
                  width={breakpoint !== 'mobile' ? 21 : 18}
                  height={breakpoint !== 'mobile' ? 21 : 18}
                  src='/crypto-card/check.svg'
                  alt='Check'
                />
                <p>Issue G-card easy in our app</p>
              </li>
              <li>
                <Image
                  width={breakpoint !== 'mobile' ? 21 : 18}
                  height={breakpoint !== 'mobile' ? 21 : 18}
                  src='/crypto-card/check.svg'
                  alt='Check'
                />
                <p>
                  Get <span className={css.bonusText}>20€ Bonus</span> after activation
                </p>
              </li>
            </ul>
            <div className={css.paymentList}>
              <a
                href='https://play.google.com/store/apps/details?id=com.guardarian.wallet'
                target='_blank'
                rel='noopener nofollow noreferrer'
              >
                <Image width={100} height={25} src='/crypto-card/download/google-play-dark.svg' alt='Google play' />
              </a>
              <a
                href='https://apps.apple.com/kz/app/guardarian-wallet/id1616505826'
                target='_blank'
                rel='noopener nofollow noreferrer'
              >
                <Image width={100} height={25} src='/crypto-card/download/apple-store-dark.svg' alt='Apple store' />
              </a>
              <a onClick={() => setVisible(true)}>
                <Image width={25} height={25} src='/crypto-card/download/qr-code.webp' alt='Apple store' />
              </a>
            </div>

            <div className={css.paymentList}>
              <Image width={45} height={35} src='/payment-methods/sepa_new.svg' alt='SEPA' />
              <Image width={45} height={35} src='/payment-methods/swift.svg' alt='Swift' />
              <Image width={45} height={35} src='/payment-methods/faster-pay.svg' alt='FasterPay' />
              <Image width={80} height={38} src='/payment-methods/google_pay_logo.svg' alt='Swift' />
              <Image width={70} height={30} src='/payment-methods/apple-pay.svg' alt='FasterPay' />
            </div>
            <QrModal visible={visible} setVisible={setVisible} />
          </div>
          <div className={css.imgWrapper}>
            <img src='/visa-update/visa-top.svg' alt='Crypto cards' width={600} height={480} />
            <div className={css.cashbackBanner}>
              <h2 className={css.cashbackBanner_title}>Cash back 1% for all payments</h2>
              <p className={css.cashbackBanner_text}>
                Earn money after each purchase and get cash back on your card in euro every month
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
