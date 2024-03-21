import React from 'react';
import cn from 'classnames';

import css from './CurrenciesTableButton.module.scss';

const CurrenciesTableButton = ({ disabled, children }) => {
  const classes = cn(css.button, {
    [css.disabled]: disabled,
  });

  return <div className={classes}>{children}</div>;
};

export default CurrenciesTableButton;
