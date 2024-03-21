import React from 'react';
import css from './BenefitsSubscription.module.scss';
import { Button } from '../../components/Button';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export const BenefitsSubscription = () => {
  const cards = [
    {
      image: '/invest.svg',
      title: 'Invest in crypto effortlessly',
      text: 'Stop loosing time on making manual crypto transactions and exchanges through slow centralized platforms. Delegate your routine investments to us and watch your portfolio grow while you do what matter to you the most.',
    },
    {
      image: '/riskFree.svg',
      title: 'Stay in control of your assets',
      text: 'Giving away the custody over your crypto is always a risk. Guardarian’s non-custodial platform keeps you in control by sending your assets directly to your wallet of choice, without holding on to them.',
    },
    {
      image: '/deal.svg',
      title: 'Enjoy the best deals',
      text: 'Get the most out of your crypto investments with a mere 1% transaction fee! Our transparent platform and lack of hidden fees ensure you getting the best deal possible on every exchange you make. ',
    },
    {
      image: '/case.svg',
      title: 'All investments in one place',
      text: 'Manage subscriptions, buy your favourite tokens and cash out crypto profits on our user-friendly platform. Make your first exchange now to gain access to your personal cabinet without registration.',
    },
  ];

  return (
    <div className={css.component}>
      <div className='container'>
        <h2 className={css.maintitle}>Benefits of Guardarian Subscriptions</h2>
        <div className={css.cardGrid}>
          {cards.map((card, index) => (
            <div className={css.card} key={index}>
              <img src={card.image} alt={card.title} decoding='async' loading='lazy' />
              <h3 className={css.title}>{card.title}</h3>
              <p className={css.subtitle}>{card.text}</p>
            </div>
          ))}
        </div>
        <Button onClick={scrollToTop} size='md' green className={css.buyButton}>
          Start investing
        </Button>
      </div>
    </div>
  );
};
