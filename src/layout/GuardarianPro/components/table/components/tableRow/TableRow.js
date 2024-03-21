import React from 'react';
import { TableRowCell } from '../tableRowCell/TableRowCell';
import css from './styles.module.scss';

function TableRow({ data, columns }) {
  return (
    <>
      {data &&
        data.map((item) => (
          <div key={item.id} className={css.row}>
            {columns.map((column) => (
              <TableRowCell key={`table-row-cell-${column.id}`} item={item} column={column} />
            ))}
          </div>
        ))}
    </>
  );
}

export { TableRow };
