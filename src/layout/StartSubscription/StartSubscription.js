import React from 'react';
import css from './StartSubscription.module.scss';
import { Button } from 'components/Button';
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export const StartSubscriptions = () => {
  const cards = [
    {
      image: '/step1IMG.png',
      image2x: '/step1IMG@2x.png',
      title: 'Select your plan',
      text: 'Choose your start date, exchange frequency, desired crypto, and fiat currency to pay with in our intuitive subscription widget, then click “Subscribe”.',
    },
    {
      image: '/step2IMG.png',
      image2x: '/step2IMG@2x.png',
      title: 'Complete checkout',
      text: 'Enter your crypto wallet address, choose your preferred payment method and complete our intuitive checkout process - no registration required.',
    },
    {
      image: '/step3IMG.png',
      image2x: '/step3IMG@2x.png',
      title: 'Manage subscriptions',
      text: 'Completing the checkout gives you access to your customer cabinet. In it you can manage subscriptions, see transaction history, buy and sell crypto & much more.',
    },
  ];

  return (
    <div className={css.component}>
      <div className='container'>
        <h2 className={css.maintitle}>How to start a subscription</h2>
        <div className={css.cardFlex}>
          {cards.map((card, index) => (
            <div className={css.card} key={index}>
              <p className={css.stepNumber}>{index + 1}</p>
              <img
                decoding='async'
                loading='lazy'
                src={card.image}
                srcSet={`${card.image}, ${card.image2x} 2x`}
                alt={card.title}
                className={css.image}
              />
              <h3 className={css.title}>{card.title}</h3>
              <p className={css.subtitle}>{card.text}</p>
            </div>
          ))}
        </div>
        <Button onClick={scrollToTop} size='md' green className={css.buyButton}>
          Try it out
        </Button>
      </div>
    </div>
  );
};
