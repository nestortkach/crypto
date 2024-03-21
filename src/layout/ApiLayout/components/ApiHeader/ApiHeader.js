import React from 'react';
import { Title } from 'components/Title';
import { Text } from 'components/Text';
import css from './ApiHeader.module.scss';

export const ApiHeader = ({ title, subTitle }) => (
  <div className={css.component}>
    <Title className={css.title} size='xl' tag='h1'>
      {title}
    </Title>
    <Text className={css.subTitle} tag='p' fontWeight='light' size='md'>
      {subTitle}
    </Text>
  </div>
);
