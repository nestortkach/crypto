import React, { Children } from 'react';
import { Text } from 'components/Text';
import css from './Item.module.scss';

export const Item = ({ title, children = [] }) => (
  <>
    {children.length > 0 && (
      <>
        <li className={css.item}>
          <Text className={css.subTitle} tag='p' fontWeight='light' size='md'>
            {title}
          </Text>
        </li>
        <ul className={css.items}>{Children.toArray(children.map(Item))}</ul>
      </>
    )}
    {children.length === 0 && (
      <li className={css.item}>
        <Text className={css.subTitle} tag='p' fontWeight='light' size='md'>
          {title}
        </Text>
      </li>
    )}
  </>
);
