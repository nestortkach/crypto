import React, { useCallback } from 'react';

import { Title } from 'components/Title';
import { CardList } from 'components/CardList';
import { Card } from 'components/CardList/Card';

import css from './WorkAdvantages.module.scss';

const data = {
  title: 'Working with Guardarian means',
  advantages: [
    {
      img: '/careers/start-up.svg',
      title: 'Empower to grow',
      content: (
        <p>
          We grow fast and empower teammates to grow fast too. We encourage responsibility, autonomy, and leadership in
          reaching company goals.
        </p>
      ),
    },
    {
      img: '/careers/app-development.svg',
      title: 'Freedom to act ',
      content: (
        <p>
          Everybody in the team has an opportunity to act. We motivate team members to generate new ideas and share them
          openly.{' '}
        </p>
      ),
    },
    {
      img: '/careers/augmented-reality.svg',
      title: 'Agile work processes',
      content: (
        <p>
          We use best practices in team management. Our approach is to make work comfortable for all team members, both
          in the office and remotely.
        </p>
      ),
    },
  ],
};

export const WorkAdvantages = () => {
  const cardRenderer = useCallback(
    (item) => <Card icon={<img src={item.img} alt='' />} title={item.title} text={item.content} shadow />,
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
