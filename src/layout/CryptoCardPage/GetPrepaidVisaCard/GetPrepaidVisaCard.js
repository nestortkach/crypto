import React, { useState } from 'react';
import Image from 'next/image';
import css from './GetPrepaidVisaCard.module.scss';
import QrModal from '../CryptoCardBanner/QrModal/QrModal';

const data = {
  title: 'Get Guardarian Prepaid Visa card ',
  steps: [
    {
      image: '/crypto-card/benefits/download-app.webp',
      title: 'Download the app',
      text: 'Go to Apple Pay or Google Play and get the app on your device.',
    },
    {
      image: '/crypto-card/benefits/activate-card.webp',
      title: 'Activate a card',
      text: 'Order a card from the app and activate it.',
    },
    {
      image: '/crypto-card/benefits/done-crypto.webp',
      title: 'Enjoy your crypto!',
      text: 'Make payments with 400+ cryptocurrencies anywhere.',
    },
  ],
};

export const GetPrepaidVisaCard = ({ scrollRef }) => {
  const [visible, setVisible] = useState(false);
  return (
    <section ref={scrollRef} className={css.section}>
      <div className={['container', css.wrapper].join(' ')}>
        <h2 className={css.title}>{data.title}</h2>

        <div className={css.content}>
          <div className={css.steps}>
            {data.steps.map((item) => (
              <div className={css.step} key={item.text}>
                <img src={item.image} alt={item.title} className={css.stepImg} />
                <div className={css.stepTextContainer}>
                  <h3 className={css.stepTitle}>{item.title}</h3>
                  <p className={css.stepText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className={css.paymentList}>
          <a
            href='https://play.google.com/store/apps/details?id=com.guardarian.wallet'
            target='_blank'
            rel='noopener nofollow noreferrer'
          >
            <Image width={100} height={25} src='/crypto-card/download/google-play-light.svg' alt='Google play' />
          </a>
          <a
            href='https://apps.apple.com/kz/app/guardarian-wallet/id1616505826'
            target='_blank'
            rel='noopener nofollow noreferrer'
          >
            <Image width={100} height={25} src='/crypto-card/download/apple-store-light.svg' alt='Apple store' />
          </a>
          <a onClick={() => setVisible(true)}>
            <Image width={25} height={25} src='/crypto-card/download/qr-code-white.webp' alt='Apple store' />
          </a>
        </div> */}
        {/* <QrModal visible={visible} setVisible={setVisible} /> */}
      </div>
    </section>
  );
};
