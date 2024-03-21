import React, { memo } from 'react';

import css from './FeaturesSection.module.scss';

const feateruesInfo = [
  {
    image: '/laptop-image.png',
    title: 'Exchanges for businesses',
    subtitle: 'Fast and secure cryptocurrency exchanges for your company.',
    buttonTitles: 'Become a partner',
    link: 'https://guardarian.com/business',
    tips: [
      {
        tip: 'Cash out your crypto profits',
      },
      {
        tip: 'Invest into crypto with the lowest fees',
      },
      {
        tip: 'Fast and simple onboarding',
      },
    ],
  },
  {
    image: '/bankCard-icon.png',
    title: 'G-card: a crypto debit card',
    subtitle: 'Make everyday purchases with our pre-paid crypto card.',
    buttonTitles: 'Get your G-card',
    link: 'https://guardarian.com/crypto-card',
    tips: [
      {
        tip: 'Worldwide ATM withdrawals',
      },
      {
        tip: 'Global purchases',
      },
      {
        tip: 'All major cryptocurrencies supported',
      },
    ],
  },
];

const FeaturesSection = memo(() => (
  <div className={css.wrapper}>
    <div className={css.featuresSectionWrapper}>
      <div className='container'>
        <section className={css.featuresSection}>
          <h2 className={css.heading}>Other services</h2>
          <p className={css.subtitle}>Guardarian is more than just an on-ramp. Explore our other popular services:</p>

          <div className={css.featuresBlocks}>
            {feateruesInfo.map((item) => (
              <div key={item.link} className={css.featureBlock}>
                <img className={css.featureImg} src={item.image} />
                <h3>{item.title}</h3>
                <p className={css.parag}>{item.subtitle}</p>

                {item.tips.map((tip) => (
                  <div key={tip.tip} className={css.featerueInfo}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#6195FF' }} />
                    <p>{tip.tip}</p>
                  </div>
                ))}

                <a href={item.link}>
                  <div className={css.action}>
                    <button type='button'>
                      <span>{item.buttonTitles}</span>
                    </button>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
));

FeaturesSection.displayName = 'FeaturesSection';

export { FeaturesSection };
