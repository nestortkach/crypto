import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-ltc',
    title: 'Buy Litecoin (LTC) | Buy Litecoin with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Litecoin. Discover the best EUR to LTC and USD to LTC exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Litecoin (LTC) ',
    text: `Litecoin is a cryptocurrency that was created in 2011 as a lighter and faster version of the original Bitcoin. It is often referred to as the "silver" to Bitcoin's "gold" and is widely considered to be one of the top cryptocurrencies in the world. Buy LTC with Guardarian without registration or keep reading to know more!`,
    info: {
      release: 2011,
      ticker: 'LTC',
      creator: 'Charlie Lee',
    },
    theme: 'ltc',
    currency: 'ltc',
  },
  about: {
    articles: [
      {
        title: 'What is Litecoin (LTC)?',
        text: `Litecoin has a strong track record of stable development and adoption, making it a potentially attractive
              investment opportunity. Though its market capacity is lower than most other popular coins, it remains one
              of the most traded coins on the market, never having left the top 30.`,
      },
      {
        title: 'Why to buy Litecoin (LTC)?',
        text: `Litecoin has a strong track record of stable development and adoption, making it a potentially attractive investment opportunity. Though its market capacity is lower than most other popular coins, it remains one of the most traded coins on the market, never having left the top 30.`,
      },
    ],
    theme: 'ltc',
  },
  exchange: {
    currency: 'LTC',
    network: 'BSC',
    name: 'LTC',
    usdImageSrc: '/ltc/ltc-usd.svg',
    eurImageSrc: '/ltc/ltc-eur.svg',
    usdText: `The current 1 Dollar to LTC exchange rate is LTC. Get LTC fast and without registration. Choose one of payment methods, that suits you most, either its credit or debit card or bank transfer and get LTC.`,
    eurText: `The current 1 Euro to LTC exchange rate is LTC. Get LTC fast and without registration. Choose one of payment methods that suits you most, either its credit or debit card or bank transfer and get LTC.
    `,
  },
  howToBuy: {
    name: 'Litecoin',
    ticker: 'LTC',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
