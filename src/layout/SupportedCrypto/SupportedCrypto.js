import React from 'react';
import css from './SupportedCrypto.module.scss';

export const SupportedCrypto = () => (
  <div className={css.component}>
    <div className='container'>
      <h2 className={css.maintitle}>Over 400 cryptocurrencies supported</h2>
      <div className={css.placeholder} />
    </div>
  </div>
);
