import React from 'react';
import get from 'lodash/get';
import css from './styles.module.scss';

function TableRowCell({ item, column }) {
  const value = get(item, column.key);

  return <div className={css.cell}>{column.render ? column.render(column, item) : value}</div>;
}

export { TableRowCell };
