import React from 'react';
import css from './StepsToFund.module.scss';

const data = {
  title: 'How to exchange BTC to EUR for business',
  steps: [
    {
      image: '/business-page/exchange/onboarding_b2b.webp',
      title: 'Join us 🤗',
      text: 'Complete a fast & simple onboarding process.',
    },
    {
      image: '/business-page/exchange/exchange_b2b.webp',
      title: 'Exchange 👌',
      text: 'Choose what to exchange and make the deposit.',
    },
    {
      image: '/business-page/exchange/done_b2b.webp',
      title: 'Enjoy 😍',
      text: <>Receive your funds & we hope to see you soon!</>,
    },
  ],
};

export const StepsToFund = () => (
  <section className={css.section}>
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
    <div className={css.action}>
      <a href='https://partner.guardarian.com/sign-up' className={css.linkPartner}>
        <span>Start making exchanges</span>
      </a>
    </div>
  </section>
);
