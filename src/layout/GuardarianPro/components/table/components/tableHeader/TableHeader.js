import React from 'react';
import css from './styles.module.scss';

function TableHeader({ columns }) {
  return (
    <div className={css.titleRow}>
      {columns.map((column) => (
        <div key={column.id} className={css.cell}>
          {column.title}
        </div>
      ))}
    </div>
  );
}

export { TableHeader };
