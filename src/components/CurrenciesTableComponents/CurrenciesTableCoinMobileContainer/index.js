import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { buyTokenUrlGenerator } from 'utils/buyTokenHelper';

import css from './CurrenciesTableCoinMobileContainer.module.scss';

const CurrenciesTableCoinMobileContainer = ({ ticker, name, logo_url }) => (
  <div className={css.container}>
    <div className={css.icon}>
      <Link href={buyTokenUrlGenerator(ticker)}>
        <Image unoptimized src={logo_url} alt={name} width={24} height={24} />
      </Link>
    </div>
    <div>
      <Link href={buyTokenUrlGenerator(ticker)}>{name}</Link>
      <div className={css.ticker}>
        <Link href={buyTokenUrlGenerator(ticker)}>{ticker}</Link>
      </div>
    </div>
  </div>
);

export default CurrenciesTableCoinMobileContainer;
