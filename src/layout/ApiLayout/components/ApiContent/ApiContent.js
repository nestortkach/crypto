import React, { Children } from 'react';
import Link from 'next/link';
import { Title } from 'components/Title';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import css from './ApiContent.module.scss';
import { Item } from './components/Item';

export const ApiContent = ({ title, subTitle, itemsTitle, items, button }) => (
  <div className={css.component}>
    <Title className={css.title} size='lg' tag='h2'>
      {title}
    </Title>
    <Text className={css.subTitle} tag='p' fontWeight='light' size='md'>
      {subTitle}
    </Text>
    <Title className={css.itemsTitle} size='lg' tag='h2'>
      {itemsTitle}
    </Title>
    <ul className={css.items}>{Children.toArray(items.map(Item))}</ul>
    <Link href={button.link} passHref>
      <Button className={css.button}>{button.title}</Button>
    </Link>
  </div>
);
