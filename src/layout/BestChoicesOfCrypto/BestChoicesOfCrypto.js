import React, { memo } from 'react';
import css from './BestChoicesOfCrypto.module.scss';

const boxesData = [
  {
    icon: 'bestChoiceOfCrypto/global.svg',
    title: '170+',
    subTitle: 'Supported  Countries',
  },
  {
    icon: 'bestChoiceOfCrypto/btc.svg',
    title: '400+',
    subTitle: 'Supported Cryptocurrencies',
  },
  {
    icon: 'bestChoiceOfCrypto/wallet.svg',
    title: '40+',
    subTitle: 'Supported Fiat currencies',
  },
  {
    icon: 'bestChoiceOfCrypto/card.svg',
    title: 'All',
    subTitle: 'Major payment methods',
  },
];

const BestChoicesOfCrypto = memo(() => (
  <div className={css.section}>
    <div className={css.BestChoiceWrapper}>
      <div className={css.integrateUsSection}>
        <div>
          <div>
            <div>
              <h2 className={css.heading}>
                Global coverage, best <br /> choice of crypto
              </h2>
            </div>

            <div className={css.subheading}>
              <p>Onboard diverse audiences worldwide with our great coverage and currencies offered</p>
            </div>

            <div className={css.boxes}>
              {boxesData.map((item) => (
                <div className={css.box} key={item.title}>
                  <div className={css.boxInfo}>
                    <img src={item.icon} />
                    <p>{item.title}</p>
                  </div>

                  <p className={css.boxSubTitle}>{item.subTitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

BestChoicesOfCrypto.displayName = 'BestChoicesOfCrypto';

export { BestChoicesOfCrypto };
