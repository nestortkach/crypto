import React from 'react';
import Link from 'next/dist/client/link';
import css from './HowItWorks.module.scss';
import { Button } from '../../components/Button';

export const HowItWorks = () => {
  const cards = [
    {
      image: '/onramp-step1IMG.svg',
      title: 'Create an account',
      text: 'Create your Guardarian partner account and complete a quick KYB verification.',
    },
    {
      image: '/onramp-step2IMG.svg',
      title: 'Choose your integration',
      text: 'Integrate our plug-and-play widget in just a few clicks, or use our powerful and highly customisable API.',
    },
    {
      image: '/onramp-step3IMG.svg',
      title: 'Integrate and enjoy',
      text: 'Our experts will guide you through the entire process. After that you can sit back and enjoy the benefits.',
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
          <Link href='https://partner.guardarian.com/sign-up'>
            <Button size='md' green className={css.buyButton}>
              Sign up
            </Button>
          </Link>
          <Link href='https://guardarian.com/for-partners#contactUsCrypto'>
            <Button size='md' outline className={css.buyButtonTwo}>
              Talk to us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
