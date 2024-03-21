import { Button } from 'components/Button';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { estimate } from 'components/Calculator/action';
import css from './CarrensyChangeBox.module.scss';

export const CarrensyChangeBox = ({
  currency,
  name,
  network,
  fromNetwork,
  ticker,
  logo,
  currencyImg,
  fromCurrency,
  route,
}) => {
  const router = useRouter();
  console.log(logo);
  const [rate, setRate] = useState('');

  useEffect(() => {
    const getEstimate = async () => {
      await estimate({
        from_amount: '500',
        from_currency: fromCurrency,
        from_network: fromNetwork,
        to_currency: currency,
        to_network: network,
        setError: () => {},
        onSuccess: (data) => setRate(data.estimated_exchange_rate),
        setLoading: () => {},
        setFromAmountError: () => {},
        setMinMaxRange: () => {},
      });
    };

    getEstimate();
  }, []);

  const goTo = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <a href={route} onClick={(e) => goTo(e, route)}>
      <div className={css.row} onClick={() => router.push(route)}>
        <span className={css.content}>
          <div className={css.imgBox}>
            <img src={currencyImg} alt={``} className={css.imgCurrency} />
            <img src='/vector.png' alt='' className={css.imgVector} />
            <img src={logo} alt={''} className={css.imgLogo} />
          </div>
          <div className={css.rateText}>
            <h3>
              {' '}
              {fromCurrency.toUpperCase()} to {ticker}
            </h3>
            <p>
              {' '}
              1 {fromCurrency.toUpperCase()} equals {rate} {ticker}
            </p>
          </div>
        </span>

        <Button green className={css.buyButton} onClick={() => router.push(route)}>
          Buy {name} with {fromCurrency.toUpperCase()}
        </Button>
      </div>
    </a>
  );
};
