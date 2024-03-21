import React from 'react';
import cn from 'classnames';

import css from './CurrenciesTableCell.module.scss';

const CurrenciesTableCell = (props) => {
  const { textAlign, marginRight = 0, children, title } = props;
  const classes = cn({
    [css.textAlignLeft]: textAlign === 'left',
    [css.textAlignCenter]: textAlign === 'center',
    [css.textAlignRight]: textAlign === 'right',
    [css.mr10]: marginRight === 10,
    [css.mr5]: marginRight === 5,
    [css.mr3]: marginRight === 3,
  });

  return <div className={classes}>{children || title}</div>;
};

export default CurrenciesTableCell;
