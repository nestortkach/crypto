import { useRouter } from 'next/dist/client/router';
import React from 'react';
import css from './OtherCurrensies.module.scss';
import { CarrensyChangeBox } from '../../../components/CarrensyChange/CarrensyChanngeBox';

export const OtherCurrensies = ({ currency, name, ticker, network, fromNetwork, logo, otherCurrensies }) => {
  const router = useRouter();

  return (
    <div className={css.component}>
      <div className='container'>
        <div className={css.boxContainers}>
          <div className={css.textContent}>
            <h2>Buy {name} with other currencies</h2>
            <p>A selection of the most popular currencies that people buy {name} with.</p>
          </div>
          <div className={css.boxContainers}>
            <div className={css.box}>
              {otherCurrensies.map((item) => (
                <CarrensyChangeBox
                  key={item.name}
                  currency={currency}
                  name={name}
                  network={network}
                  fromNetwork={fromNetwork}
                  ticker={ticker}
                  logo={logo}
                  currencyImg={item.img}
                  fromCurrency={item.name}
                  route={item.route}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
