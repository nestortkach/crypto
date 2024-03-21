import React from 'react';
// import Image from 'next/image';
import css from './PrepaidVisaCard.module.scss';

const data = {
  title: 'Guardarian Prepaid Visa card ',
  steps: [
    {
      image: '/crypto-card/benefits/interface.webp',
      title: 'User-friendly interface',
    },
    {
      image: '/crypto-card/benefits/all-wallets.webp',
      title: 'All wallets supported',
    },
    {
      image: '/crypto-card/benefits/best-card-offers.webp',
      title: 'Best card offers ',
    },
    {
      image: '/crypto-card/benefits/cashback.webp',
      title: 'Cashback 1%',
    },
    {
      image: '/crypto-card/benefits/security-payments.webp',
      title: 'Security payments',
    },
    {
      image: '/crypto-card/benefits/unique-design.webp',
      title: 'Unique card design',
    },
  ],
};

export const PrepaidVisaCard = () => (
  <section className={css.section}>
    <div className={['container', css.wrapper].join(' ')}>
      <h2 className={css.title}>{data.title}</h2>

      <div className={css.content}>
        <div className={css.steps}>
          {data.steps.map((item) => (
            <div className={css.step} key={item.title}>
              <img src={item.image} alt={item.title} className={css.stepImg} />
              <h3 className={css.stepTitle}>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className={css.cardAbsolute}>
        <img src='/visa-update/visa-card.svg' />
      </div>
    </div>
    <div className={css.order}>
      <div className='container'>
        <h2 className={css.orderTitle}>Order in Europe - Pay Worldwide!</h2>
        <div className={css.orderTxt}>
          <div className={css.order_item}>
            <h3>Available in the EU</h3>
            <p>Order your card from 25+ EU countries</p>
          </div>
          <div className={css.order_item}>
            <h3>Worldwide ATM withdrawals</h3>
            <p>Withdraw cash at any Visa accepting ATM</p>
          </div>
          <div className={css.order_item}>
            <h3>A generous monthly limit</h3>
            <p>Withdraw 2500$/month and 500$/day from ATMs</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
