import React, { memo } from 'react';
import Image from 'next/image';
import { Button } from 'components/Button/Button';

import css from './IntegrateUsReasons.module.scss';

const boxesData = [
  {
    icon: 'integrateUs/boxIcon1.svg',
    title: 'Get more customers',
    subTitle: 'Attract customers globally, let them pay how they want ',
  },
  {
    icon: 'integrateUs/boxIcon2.svg',
    title: 'Boost your revenues',
    subTitle: 'Generate more transactions and earn affiliate rewards',
  },
  {
    icon: 'integrateUs/boxIcon3.svg',
    title: 'Eliminate your risks',
    subTitle: 'Keep all exchanges risk-free with our industry-leading security features',
  },
];

const IntegrateUsReasons = memo(() => (
  <div className={css.section}>
    <div className={css.integrateUsWrapper}>
      <div className={css.integrateUsSection}>
        <div>
          <div>
            <div>
              <h2 className={css.heading}>
                Why integrate <br />
                <span className={css.appWord}>Guardarian</span> on-ramp?
              </h2>
            </div>

            <div className={css.subheading}>
              <p>
                Users are the key to your success. Give them the crypto experience they deserve and watch your profits
                skyrocket. Here is how we help:
              </p>
            </div>

            <div className={css.boxes}>
              {boxesData.map((item) => (
                <div className={css.box} key={item.title}>
                  <div className={css.boxInfo}>
                    <img src={item.icon} />
                    <h3>{item.title}</h3>
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

IntegrateUsReasons.displayName = 'IntegrateUsReasons';

export { IntegrateUsReasons };
