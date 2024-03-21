import React from 'react';

import css from './CashOutSection.module.scss';

const data = {
  title: 'Key benefits',

  advantages: [
    {
      img: '/business-page/advantages/advantage-best.webp',
      title: 'Best conditions you can get ',
      content: (
        <ul className={css.cardContentList}>
          <li>30 different cryptocurrencies to exchange</li>
          <li>Secure, non-custodial exchanges</li>
          <li>Lowest fees on the market</li>
        </ul>
      ),
      dark: true,
    },
    {
      img: '/business-page/advantages/advantage-time.webp',
      title: 'Fast & easy onboarding',
      content: (
        <ul className={css.cardContentList}>
          <li>Fast & seamless onboarding</li>
          <li>Easy-to-use partner’s cabinet</li>
          <li>Instant invoices</li>
        </ul>
      ),
    },
    {
      img: '/business-page/advantages/advantage-trust.webp',
      title: 'A service you can trust',
      content: (
        <ul className={css.cardContentList}>
          <li>5 years of successful service</li>
          <li>Fully licensed, EU-based company</li>
          <li>Trusted by over 400 businesses</li>
        </ul>
      ),
    },
    {
      img: '/business-page/advantages/advantage-support.webp',
      title: 'Personal customer care',
      content: (
        <ul className={css.cardContentList}>
          <li>Personal account manager</li>
          <li>Dedicated support staff</li>
          <li>Fully guided onboarding process</li>
        </ul>
      ),
      dark: true,
    },
  ],
};

export const CashOutSection = () => (
  <section className={css.section}>
    <div className={css.sectionContainer}>
      <h2 className={css.title}>{data.title}</h2>
      <div className={css.cardContainer}>
        {data.advantages.map((card) => (
          <div key={card.title} className={css.card}>
            <img src={card.img} alt={card.title} className={css.cardImg} />
            <div className={css.cardContent}>
              <h3 className={card.dark ? css.cardTitleDark : css.cardTitle}>{card.title}</h3>
              <div className={card.dark ? css.cardTextDark : css.cardText}>{card.content}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={css.action}>
        <a href='https://partner.guardarian.com/sign-up' className={css.linkPartner}>
          <span>Exchange</span>
        </a>
      </div>
    </div>
  </section>
);
