import React from 'react';

import { Title } from 'components/Title';

import css from './Banner.module.scss';

const data = {
  title: 'Frequently Asked Questions',
};

export const FaqBanner = () => (
  <div className={css.component}>
    <div className='container'>
      <Title tag='h1' size='xl'>
        {data.title}
      </Title>
    </div>
  </div>
);
