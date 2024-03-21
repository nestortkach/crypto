import React, { useCallback, useState } from 'react';
import cn from 'classnames';

import Search from 'components/Icons/Search';

import css from './CurrenciesTable.module.scss';

const CurrenciesTable = (props) => {
  const { columns, items, currencies, onRowClick = () => undefined } = props;
  const [search, setSearch] = useState('');
  const filteredItems = useCallback(
    () =>
      search
        ? currencies.filter(
            (c) =>
              c.ticker.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
              c.name.toLowerCase().indexOf(search.toLowerCase()) > -1,
          )
        : items,
    [search, items],
  );

  const handleOnChange = (e) => {
    setSearch(e.target.value || '');
  };

  const align = (column, main) => cn({ [main]: true, [css[column.textAlign]]: true });

  const handleOnClickRow = (rowData) => () => onRowClick(rowData);

  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <td className={css.search} colSpan={columns.length}>
            <div className={css.searchInputContainer}>
              <Search />
              <input className={css.input} onChange={handleOnChange} placeholder='Search' />
            </div>
          </td>
        </tr>
        <tr className={css.tr}>
          {columns.map((column, index) => (
            <th className={align(column, css.th)} key={index}>
              {column.renderTitle ? column.renderTitle(column) : column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={css.tbody}>
        {filteredItems().map((item, itemIndex) => (
          <tr onClick={handleOnClickRow(item)} key={itemIndex} className={css.tr}>
            {columns.map((column, columnIndex) => (
              <td className={align(column, css.td)} key={columnIndex}>
                {column.render ? column.render(item, column, itemIndex) : item[column.field]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CurrenciesTable;
