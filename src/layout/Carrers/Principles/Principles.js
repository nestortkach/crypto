import React, { useCallback } from 'react';

import { Title } from 'components/Title';
import { CardList } from 'components/CardList';
import { Card } from 'components/CardList/Card';
import { Text } from 'components/Text';

import css from './Principles.module.scss';

const data = {
  title: 'Our principles',
  advantages: [
    {
      img: '/careers/honest.svg',
      label_icon: '/careers/checkmark-cloud.svg',
      title: 'Be honest and transparent',
      content: 'with Teammates, Clients, and Partners',
    },
    {
      img: '/careers/brave.svg',
      label_icon: '/careers/chart-arrow-up.svg',
      title: 'Be brave',
      content: 'in ideas, goals and actions',
    },
    {
      img: '/careers/purpose.svg',
      label_icon: '/careers/lightning.svg',
      title: 'Act with a sense of purpose',
      content: 'in approaching the challenges',
    },
  ],
  footer_text: 'Be the Coolest on the Block 😎',
};

export const Principles = () => {
  const cardRenderer = useCallback(
    (item) => (
      <Card
        icon={
          <div className={css.cardIcon}>
            <span className={css.labelIcon}>
              <img src={item.label_icon} alt='' />
            </span>
            <img src={item.img} alt='' />
          </div>
        }
        className={css.card}
        title={item.title}
        text={item.content}
      />
    ),
    [],
  );

  return (
    <section className={css.section}>
      <div className='container'>
        <Title className={css.title}>{data.title}</Title>

        <CardList cards={data.advantages} cardsInRow={3} cardRenderer={cardRenderer} />

        <Text className={css.footer} size='lg' fontWeight='medium' tag='footer'>
          <p>{data.footer_text}</p>
        </Text>
      </div>
    </section>
  );
};
