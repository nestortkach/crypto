import React from 'react';
import Link from 'next/dist/client/link';
import css from './HowItWorks.module.scss';
import { Button } from '../../components/Button';

export const HowItWorks = () => {
  const cards = [
    {
      image: '/step-1-img.svg',
      title: 'Integrate our on-ramp',
      text: 'Integrate Guardarian Subscriptions into your service for free. Choose between our plug-and play widget or the powerful API.',
    },
    {
      image: '/step-2-img.svg',
      title: 'Generate subscriptions',
      text: 'Start onboarding recurring customers directly from within your service. New subscriptions are made instantly and do not need registration.',
    },
    {
      image: '/step-3-img.svg',
      title: 'Maximise customer LTV',
      text: 'Maximise the lifetime value of your customers through recurring crypto exchanges and predictable revenue streams.',
    },
  ];

  return (
    <div className={css.component}>
      <div className='container'>
        <h2 className={css.maintitle}>How it works</h2>
        <div className={css.cardFlex}>
          {cards.map((card, index) => (
            <div className={css.card} key={index}>
              <p className={css.stepNumber}>{index + 1}</p>
              <img src={card.image} alt='Card' />
              <h3 className={css.title}>{card.title}</h3>
              <p className={css.subtitle}>{card.text}</p>
            </div>
          ))}
        </div>
        <div className={css.wrapper}>
          <Link href='/for-partners#contactUsCrypto'>
            <Button size='md' green className={css.buyButton}>
              Integrate now
            </Button>
          </Link>
          <Link href='/subscriptions'>
            <Button size='md' outline className={css.buyButtonTwo}>
              Try it out
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
