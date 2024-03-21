import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { buyTokenUrlGenerator } from 'utils/buyTokenHelper';

import css from './CurrenciesTableCoinContainer.module.scss';

const CurrenciesTableCoinContainer = ({ ticker, name, logo_url }) => {
  const getImageURL = (coin) => {
    // added switch for future image ovverides
    switch (coin.toLowerCase()) {
      case 'nano':
        return '/nano/nano-bg.svg';
      case 'ufo':
        return '/ufo/ufo-bg.png';
      case 'tenfi':
        return '/tenfi/tenfi-bg.png';
      case 'volt':
        return '/volt/volt-bg.webp';
      default:
        return logo_url;
    }
  };

  return (
    <div className={css.container}>
      <div className={css.icon}>
        <Link href={buyTokenUrlGenerator(ticker)}>
          <Image unoptimized src={getImageURL(ticker)} alt={name} width='40' height='40' />
        </Link>
      </div>

      <Link href={buyTokenUrlGenerator(ticker)}>{name}</Link>
    </div>
  );
};

export default CurrenciesTableCoinContainer;
