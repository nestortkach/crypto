import React from 'react';

import { Button } from 'components/Button';

import css from './WayToSell.module.scss';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
const cards = [
  {
    title: 'SECURE PLATFORM',
    content:
      'The safest platform to sell your cryptocurrency assets. Guardarian protects its users from all sides to fully ensure the safety of transactions.',
    img: '/way-to-sell/PAYMENT_METHODS.png',
  },
  {
    title: 'FAST TRANSACTION',
    content:
      'If previously you had to wait a long time for fiat transactions to clear, now Guardarian processes payments in seconds.',
    img: '/way-to-sell/FAST_TRANSACTION.png',
  },
  {
    title: 'SECURE PLATFORM',
    content:
      'Guardarian supports all kinds of payment systems, which helps consumers buy and sell cryptocurrency any way and any time they want.',
    img: '/way-to-sell/SECURE_PLATFORM.png',
  },
  {
    title: 'BACKED BY PARTNERS',
    content:
      'Guardarian has a large number of partners who help to implement the product and carefully fulfill their obligations to their customers.',
    img: '/way-to-sell/BACKED_BY_PARTNERS.png',
  },
];

const Card = ({ img, title, content }) => (
  <div className={css.cardContainer}>
    <img src={img} className={css.cardImage} alt={title} />
    <h4 className={css.cardTitle}>{title}</h4>
    <p className={css.cardContent}>{content}</p>
  </div>
);

export const WayToSell = ({ name, ticker }) => (
  <div className={css.wayToSell}>
    <div className='container'>
      <h3 className={css.title}>Secure Way To Sell {name}</h3>
      <div className={css.content}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className={css.buttonContainer}>
        <Button size='md' green className={css.button} onClick={scrollToTop}>
          Sell {ticker?.toUpperCase()} NOW
        </Button>
      </div>
    </div>
  </div>
);
