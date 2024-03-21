import React from 'react';
import Image from 'next/image';
import css from './CryptoCardFeatures.module.scss';

export const CryptoCardFeatures = () => (
  <section className={css.banner}>
    <div className='container'>
      <div className={css.content}>
        <div className={css.imgMobile}>
          <Image src='/visa-update/mobail1.svg' alt='Crypto cards' width={320} height={344} />
        </div>
        <div className={css.actionArea}>
          <h2>
            Your crypto payments <span className={css.bold}>in one place</span>
          </h2>
          <p className={css.text}>Comfy app with enchaced security features and instant access to your card.</p>

          <ul className={css.benefitsList}>
            <li>
              <Image width={21} height={21} src='/crypto-card/check.svg' alt='Check' />
              <p>Global purchases</p>
            </li>
            <li>
              <Image width={21} height={21} src='/crypto-card/check.svg' alt='Check' />
              <p>400+ cryptocurrencies</p>
            </li>
            <li>
              <Image width={21} height={21} src='/crypto-card/check.svg' alt='Check' />
              <p>Exceptional experience </p>
            </li>
          </ul>
        </div>
        <div className={css.imgWrapper}>
          <div className={css.img}>
            <Image src='/visa-update/web-mobail2.svg' alt='Crypto cards' width={540} height={440} />
          </div>
        </div>
      </div>
    </div>
  </section>
);
