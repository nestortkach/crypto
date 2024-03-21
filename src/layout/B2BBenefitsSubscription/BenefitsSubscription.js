import React from 'react';
import Link from 'next/dist/client/link';
import css from './BenefitsSubscription.module.scss';
import { Button } from '../../components/Button';

export const BenefitsSubscription = () => {
  const cards = [
    {
      image: '/customer-onboarding.svg',
      title: 'Instant customer onboarding',
      text: 'Our on-ramp solutions offer near-instant buying experience and don’t require registration. This allows new customers to buy crypto and set-up subscriptions in minutes, directly from within your service.',
    },
    {
      image: '/revenue-streams.svg',
      title: 'Predictable revenue streams',
      text: 'Subscriptions provide a steady flow of income that you can rely on. Leverage this predictability to plan your finances more accurately, make better decisions, improve budgeting, and stabilise your revenue generation.',
    },
    {
      image: '/checkout-widget.svg',
      title: 'Personalised checkout & widget',
      text: 'With Guardarian’s customisable solutions, you can confidently represent your brand throughout the entire transaction process. Use this to increase trust and leave a lasting positive impression on your customers.',
    },
    {
      image: '/risk-free.svg',
      title: 'Outstanding security',
      text: 'We use industry-leading fraud protection, KYC verification and non-custodial exchanges to achieve 0 chargeback on all transactions. And in case you need it, our 24/7 customer support is always ready to help you out.',
    },
  ];

  return (
    <div className={css.component}>
      <div className='container'>
        <h2 className={css.maintitle}>Guardarian Subscriptions Benefits</h2>
        <div className={css.cardGrid}>
          {cards.map((card, index) => (
            <div className={css.card} key={index}>
              <img src={card.image} alt='Card' />
              <h3 className={css.title}>{card.title}</h3>
              <p className={css.subtitle}>{card.text}</p>
            </div>
          ))}
        </div>
        <Link href='https://guardarian.com/for-partners#contactUsCrypto'>
          <Button size='md' green className={css.buyButton}>
            Integrate now
          </Button>
        </Link>
      </div>
    </div>
  );
};
