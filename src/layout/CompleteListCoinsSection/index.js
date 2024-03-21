import React from 'react';

import CurrenciesTable from 'components/CurrenciesTableComponents/CurrenciesTable';
import { Button } from 'components/Button';
import useCurrencies from 'hooks/useCurrencies';

import css from './completeListCoin.module.scss';

const CompleteListCoinsSection = ({ currencies }) => {
  const { items, columns, setItems, onRowClick } = useCurrencies(currencies);
  return (
    <div className={css.component}>
      <CurrenciesTable columns={columns} currencies={currencies} onRowClick={onRowClick} items={items} />

      <div className={css.showAll}>
        {currencies && currencies.length > 20 && currencies.length !== items.length && (
          <Button className={css.btn} onClick={() => setItems(currencies)}>
            Show all
          </Button>
        )}
      </div>
    </div>
  );
};
export default CompleteListCoinsSection;
