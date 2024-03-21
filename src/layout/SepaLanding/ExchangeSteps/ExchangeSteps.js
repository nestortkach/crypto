import React, { useCallback } from 'react';
import classNames from 'classnames';

import { Title } from 'components/Title';
import { CardList } from 'components/CardList';
import { Card } from 'components/CardList/Card';

import css from './ExchangeSteps.module.scss';

const data = {
  title: 'We have a simple tool to exchange crypto using SEPA transfers',
  steps: [
    {
      title: 'Choose Crypto',
      text: (
        <p>
          <strong>300+</strong> coins available
        </p>
      ),
    },
    {
      title: 'Pass Verification',
      text: <p> in less than 5 minutes</p>,
    },
    {
      title: 'Make  bank transfer',
      text: <p>via SEPA </p>,
    },
    {
      title: 'Receive your Crypto',
      text: <p> and be happy 😉</p>,
    },
  ],
};

export const ExchangeSteps = () => {
  const cardRenderer = useCallback(
    (item, index) => (
      <Card
        className={css.card}
        icon={
          <Title tag='div' size='xl' className={classNames(css.index, `bg_${index + 1}`)}>
            {index + 1}
          </Title>
        }
        title={item.title}
        text={item.text}
        shadow
      />
    ),
    [],
  );

  return (
    <div className={css.component}>
      <div className='container'>
        <Title className={css.title} size='xl' tag='h2'>
          {data.title}
        </Title>

        <CardList
          className={css.cardList}
          listItemClassName={css.cardListItem}
          cards={data.steps}
          cardsInRow={4}
          cardRenderer={cardRenderer}
        />
      </div>
    </div>
  );
};
