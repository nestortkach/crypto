import React, { useEffect, useState } from 'react';

import { formatExchangeRate } from '../../utils';

import css from './ExchangeRate.module.scss';

const ExchangeRate = ({ exchangeRate, fromCurrency, to_currency, isSellInfo }) => {
  const [rate, setRate] = useState({
    number: exchangeRate,
    exp: 0,
  });

  useEffect(() => {
    setRate(formatExchangeRate(exchangeRate, isSellInfo));
  }, [exchangeRate, isSellInfo]);

  return (
    <p className={css.exchangeRate}>
      {rate.number}
      {!!rate.exp && (
        <>
          {' '}
          * 10<sup>{rate.exp}</sup>
        </>
      )}{' '}
      {isSellInfo ? to_currency : fromCurrency}/{isSellInfo ? fromCurrency : to_currency}
    </p>
  );
};

export { ExchangeRate };
