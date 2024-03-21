import { useState, useMemo } from 'react';
import cn from 'classnames';

import { Pagination } from './components/pagination/Pagination';
import css from './Table.module.scss';
import { TableHeader } from './components/tableHeader/TableHeader';
import { TableRow } from './components/tableRow/TableRow';

function Table({ rows, pageSize, columns, title, emptyMessage, containerClassName }) {
  const [activePage, setActivePage] = useState(1);

  const totalPages = useMemo(() => Math.ceil(rows?.length / pageSize), [rows, pageSize]);
  const calculatedRows = useMemo(
    () => rows?.slice((activePage - 1) * pageSize, activePage * pageSize),
    [activePage, rows, pageSize],
  );

  return (
    <div className={cn(css.table, containerClassName)}>
      <div className={css.title}>{title}</div>
      <div className={css.tableContainer}>
        <div className={cn(css.tableBg, { [css.tableBg_minHeight]: totalPages > 1 })}>
          <TableHeader columns={columns} />
          {rows?.length === 0 ? (
            <div className={css.emptyTableMessage}>{emptyMessage}</div>
          ) : (
            <TableRow data={calculatedRows} columns={columns} />
          )}
        </div>
      </div>
      {rows?.length > pageSize && (
        <Pagination activePage={activePage} totalPages={totalPages} setActivePage={setActivePage} />
      )}
    </div>
  );
}

export { Table };
