import React from 'react';

import { Title } from 'components/Title';
import { Text } from 'components/Text';

import css from './ValuesSection.module.scss';

const data = {
  title: 'Our values',
  content:
    'Our mission is to drive cryptocurrency adoption, providing services that make using crypto simple and convenient',
  values: ['Transparency', 'Passion', 'Commitment'],
};

export const ValuesSection = () => (
  <section className={css.section}>
    <div className='container'>
      <Title className={css.title}>{data.title}</Title>

      <div className={css.stepper}>
        {data.values.map((item, index) => (
          <div className={css.step} key={item}>
            <div className={css.number}>{index + 1}</div>
            <Text className={css.text} size='xxl'>
              {item}
            </Text>
          </div>
        ))}
      </div>

      <Text className={css.subtext} size='lg' fontWeight='medium'>
        <p>{data.content}</p>
      </Text>
    </div>
  </section>
);
