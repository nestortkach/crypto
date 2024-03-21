import React from 'react';

import { Title } from 'components/Title';
import { Text } from 'components/Text';
import { Banner } from 'components/Banner';

import css from './CareersBanner.module.scss';

const data = {
  title: 'Working with Guardarian, you will take part in the building of a world-class fintech company',
  subtext: 'We drive cryptocurrency adoption, provide services that make using crypto simple and convenient',
  img: '/careers/strategy.svg',
};

export const CareersBanner = () => (
  <Banner className={css.component}>
    <div className={css.content}>
      <Title tag='h1' size='xl' className={css.heading}>
        {data.title}
      </Title>

      <div className={css.imgWrap}>
        <img src={data.img} alt='' />
      </div>

      <Text size='md' className={css.subText}>
        <p>{data.subtext}</p>
      </Text>
    </div>
  </Banner>
);
