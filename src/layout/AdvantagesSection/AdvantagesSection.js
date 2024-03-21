import React, { useCallback } from 'react';
import Image from 'next/image';
import { Title } from 'components/Title';
import { CardList } from 'components/CardList';
import { Card } from 'components/CardList/Card';

import css from './AdvantagesSection.module.scss';

const data = {
  title: 'We make buying crypto as easy as it should be',
  advantages: [
    {
      img: '/advantages/kyc.svg',
      title: 'Fast and simple KYC',
      content: <p>Takes up to 5 minutes. All you need is a document and a device with a camera.</p>,
      alt: 'kyc',
    },
    {
      img: '/advantages/market-rates.svg',
      title: 'Best rates at the market',
      content: (
        <p>
          Operations with more than <strong>200</strong> cryptocurrencies at the best rates and reasonable fees.
        </p>
      ),
      alt: 'market-rates',
    },
    {
      img: '/advantages/kyc.svg',
      title: 'Variety of payment options',
      content: <p>SEPA, Visa, Mastercard, UnionPay, SWIFT and multiple local bank transfers.</p>,
      alt: 'kyc',
    },
  ],
};

export const AdvantagesSection = () => {
  const cardRenderer = useCallback(
    (item) => (
      <Card
        icon={<Image src={item.img} alt={item.alt} width={158} height={190} />}
        title={item.title}
        text={item.content}
        shadow
      />
    ),
    [],
  );

  return (
    <section className={css.section}>
      <div className='container'>
        <Title className={css.title}>{data.title}</Title>

        <CardList cards={data.advantages} cardsInRow={3} cardRenderer={cardRenderer} />
      </div>
    </section>
  );
};
