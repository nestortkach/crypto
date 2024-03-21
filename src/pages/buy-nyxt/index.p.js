import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'NYXT',
  tickerLower: 'nyxt',
  name: 'NYX Token',
  nameCamelCase: 'nyxToken',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-nyxt',
    title: `Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} Coin with Fiat, EUR & USD`,
    description: `Guardarian offers the most user-friendly environment for purchasing ${coin.name}. Discover the best EUR to FIL and USD to ${coin.tickerUpper} exchange rate at Guardarian.com`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'Nyx Token is transparent and is built from the ground with the understanding of trust.',
    info: {
      release: 2021,
      ticker: coin.tickerUpper,
      creator: 'Anonymous',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name} (${coin.tickerUpper})?`,
        text: 'Nyx Token is transparent and is built from the ground with the understanding of trust. Everything from the website to social media accounts, from the community discussions to the future development of the community, is open to the public.',
      },
      {
        title: `Why to buy ${coin.name} (${coin.tickerUpper})?`,
        text: 'In recent years, the worldwide crypto community has found that there was a desperate need for a safe crypto token that the community could stand behind. Rug pulls, fake ICO, and unsavory utility tokens became common. Nyx Token is following revolution guidelines. First, a two-year liquidity lock will provide security against any possible rug pull. The Dev Team would provide that liquidity, but there will be no advantages or direct benefits for helping to provide that liquidity. Secondly, there would be no pre-sale or special benefits to any community members; everyone will be on the same playing field from day one. Third, Devs are treated as equals to all community members and had to buy their own tokens at launch!',
      },
    ],
    theme: coin.nameCamelCase,
  },
  exchange: {
    currency: coin.tickerLower,
    network: 'eth',
    name: coin.name,
    usdImageSrc: `/${coin.tickerLower}/usd-${coin.tickerLower}.png`,
    eurImageSrc: `/${coin.tickerLower}/eur-${coin.tickerLower}.png`,
  },
  howToBuy: {
    name: coin.name,
    ticker: coin.tickerUpper,
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
