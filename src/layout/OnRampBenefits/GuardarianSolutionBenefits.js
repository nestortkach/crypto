import React from 'react';
import css from './GuardarianSolutionBenefits.module.scss';
import Link from 'next/dist/client/link';
import { Button } from '../../components/Button';

export const GuardarianSolutionBenefits = () => {
  const cards = [
    {
      image: '/Trading-Volumes.svg',
      title: 'Boosted trading volumes',
      text: 'Increase your trading volumes with lower transaction limits & seamless checkout.',
    },
    {
      image: '/Global-Outreach.svg',
      title: 'Global outreach',
      text: 'Expand your user base with local payment methods & wide choice of fiat currencies.',
    },
    {
      image: '/Security.svg',
      title: 'Compliance & security',
      text: 'Let us handle your security risks & ensure your full regulation compliance. ',
    },
  ];

  return (
    <div className={css.component}>
      <div className='container'>
        <h2 className={css.maintitle}>Benefits of Guardarian Solutions</h2>
        <div className={css.cardFlex}>
          {cards.map((card, index) => (
            <div className={css.card} key={index}>
              <img className={css.image} src={card.image} alt='Card' />
              <div className={css.cardWrapper}>
                <h3 className={css.title}>{card.title}</h3>
                <p className={css.subtitle}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href='https://guardarian.com/for-partners#contactUsCrypto'>
          <Button size='md' green className={css.salesButton}>
            Contact sales
          </Button>
        </Link>
      </div>
    </div>
  );
};
