import React from 'react';
import css from './BuyCurrencyBenefits.module.scss';

export const BuyCurrencyBenefits = () => {
  const cards = [
    {
      image: '/iconBestCoise.svg',
      title: 'Best choice of crypto',
      text: 'Auto-invest into any major cryptocurrency or buy 400+ altcoins directly with Guardarian.',
    },
    {
      image: '/iconFees.svg',
      title: 'Low Transaction Fees',
      text: 'Stop overpaying for crypto exchanges with only 1% fee on all transactions.',
    },
    {
      image: '/iconKYC.svg',
      title: 'Minimal KYC Process',
      text: 'Our customer verification takes less than 5 minutes & requires minimal personal information.',
    },
  ];

  return (
    <div className={css.component}>
      <div className='container'>
        <div className={css.cardFlex}>
          {cards.map((card, index) => (
            <div className={css.card} key={index}>
              <img className={css.image} src={card.image} alt={card.title} decoding='async' loading='lazy' />
              <div className={css.cardWrapper}>
                <h2 className={css.title}>{card.title}</h2>
                <p className={css.subtitle}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
