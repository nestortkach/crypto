import React from 'react';
import classNames from 'classnames';

import { Title } from 'components/Title';
import { Text } from 'components/Text';

import css from './Card.module.scss';

export const Card = (props) => {
  const { shadow, icon, title, text, className = '' } = props;
  const classes = classNames(css.component, className, {
    [css.shadow]: shadow,
  });

  return (
    <div className={classes}>
      <div className={classNames('icon-wrap', css.iconWrap)}>{icon}</div>
      <Title className={classNames('card-title', css.title)} tag='h3' size='sm'>
        {title}
      </Title>
      <Text className='card-text' fontWeight='light' size='md'>
        {text}
      </Text>
    </div>
  );
};
