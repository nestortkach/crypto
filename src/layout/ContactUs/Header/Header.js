import React from 'react';

import { Banner } from 'components/Banner';
import { Title } from 'components/Title';
import { Header } from 'layout/Header';

import css from './Header.module.scss';

export const PageHeader = ({ title }) => (
  <Header>
    <Banner className={css.component}>
      <Title className={css.title} tag='h1' size='xl'>
        {title}
      </Title>
    </Banner>
  </Header>
);
