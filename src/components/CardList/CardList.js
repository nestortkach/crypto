import React from 'react';
import classNames from 'classnames';

import css from './CardList.module.scss';

export const CardList = (props) => {
  const { cardsInRow, cards, cardRenderer, className = '', listItemClassName = '' } = props;

  const classes = classNames(css.component, className, {
    [css[`cardsInRow-${cardsInRow}`]]: cardsInRow,
  });

  return (
    <div className={classes}>
      {cards.map((item, index) => (
        <div className={classNames(css.item, listItemClassName)} key={item.title || index}>
          {cardRenderer(item, index)}
        </div>
      ))}
    </div>
  );
};

CardList.defaultProps = {
  cardsInRow: 3,
};
