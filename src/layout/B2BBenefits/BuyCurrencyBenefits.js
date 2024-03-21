import React from 'react';
import css from './BuyCurrencyBenefits.module.scss';

export const BuyCurrencyBenefits = () => {
  const cards = [
    {
      image: '/embeddable-checkout.svg',
      title: 'Embeddable checkout',
      text: 'Offer your customers instant crypto subscriptions directly within your service.',
    },
    {
      image: '/licensed-compilant.svg',
      title: 'Licensed & compliant',
      text: 'Guardarian is fully licensed in EU & provides complete regulation compliance.',
    },
    {
      image: '/feed-integrations.svg',
      title: 'Free integrations',
      text: 'Integrate us completely free, enjoy 0 monthly costs.',
    },
  ];

  return (
    <div className={css.component}>
      <div className='container'>
        <div className={css.cardFlex}>
          {cards.map((card, index) => (
            <div className={css.card} key={index}>
              <img className={css.image} src={card.image} alt='Card' />
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
