import React, { useEffect, useState } from 'react';

import { Button } from 'components/Button';
import { estimate } from 'components/Calculator/action';

import css from './ExchangeRate.module.scss';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export const ExchangeRate = ({ currency, network, usdImageSrc, eurImageSrc, fromNetwork, name }) => {
  const [usdRate, setUsdRate] = useState('');
  const [eurRate, setEurRate] = useState('');

  useEffect(() => {
    const getEstimate = async () => {
      await estimate({
        from_amount: '500',
        from_currency: 'eur',
        from_network: fromNetwork,
        to_currency: currency,
        to_network: network,
        setError: () => {},
        onSuccess: (data) => setEurRate(data.estimated_exchange_rate),
        setLoading: () => {},
        setFromAmountError: () => {},
        setMinMaxRange: () => {},
      });

      await estimate({
        from_amount: '500',
        from_currency: 'usd',
        from_network: fromNetwork,
        to_currency: currency,
        to_network: network,
        setError: () => {},
        onSuccess: (data) => setUsdRate(data.estimated_exchange_rate),
        setLoading: () => {},
        setFromAmountError: () => {},
        setMinMaxRange: () => {},
      });
    };

    getEstimate();
  }, []);

  return (
    <div className={css.component}>
      <div className='container'>
        <div className={css.boxContainers}>
          <div className={css.box}>
            <div className={css.imageContainer}>
              <img src={eurImageSrc} alt={`Exchange ${currency?.toUpperCase()} to EUR`} />
            </div>

            <div className={css.textContent}>
              <h3>{currency?.toUpperCase()} to EUR Exchange Rate</h3>
              <p>
                The current 1 Euro to {name} exchange rate is {eurRate} {name}. Get {name} fast and without
                registration. Choose one of payment methods, that suits you most, either its credit or debit card or
                bank transfer and get {name}.
              </p>
            </div>
          </div>
          <div className={css.box}>
            <div className={css.imageContainer}>
              <img src={usdImageSrc} alt={`Exchange ${currency?.toUpperCase()} to USD`} />
            </div>

            <div className={css.textContent}>
              <h3>{currency?.toUpperCase()} to USD Exchange Rate</h3>
              <p>
                The current 1 Dollar to {name} exchange rate is {usdRate} {name}. Get {name} fast and without
                registration. Choose one of payment methods, that suits you most, either its credit or debit card or
                bank transfer and get {name}.
              </p>
            </div>
          </div>
        </div>

        <Button size='md' green className={css.buyButton} onClick={scrollToTop}>
          Sell {currency?.toUpperCase()} NOW
        </Button>
      </div>
    </div>
  );
};
