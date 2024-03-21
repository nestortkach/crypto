import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'BCH',
  tickerLower: 'bch',
  name: 'Bitcoin Cash',
  nameCamelCase: 'bitcoinCash',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-bch',
    title: `Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} Coin with Fiat, EUR & USD`,
    description: `Guardarian offers the most user-friendly environment for purchasing ${coin.tickerUpper}. Discover the best EUR to FIL and USD to ${coin.tickerUpper} exchange rate at Guardarian.com`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'Bitcoin Cash uses a large block size of 8 MB. This speeds up the blockchain verification process and increases the speed of transactions regardless of the number of miners who approve it. This is a big advantage of Bitcoin Cash over the Bitcoin cryptocurrency. By the way, ',
    info: {
      release: 2017,
      ticker: coin.tickerUpper,
      creator: 'Craig Wright',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name} (${coin.tickerUpper})?`,
        text: 'Bitcoin Cash (an acronym for BCH and rarely BCC, BCHABC or BAB on some trading platforms) is a cryptocurrency similar to Bitcoin , which was created on August 1, 2017. It is a fork of Bitcoin, meaning the two cryptocurrencies share some common characteristics but have operated on different blockchains since their separation.',
      },
      {
        title: `Why to buy ${coin.name} (${coin.tickerUpper})?`,
        text: 'As exchanges manage the tokens and new owners take control of their assets, one of the big questions is what will happen to the price of BCH. While the controversy over its birth is likely to continue, the truth is that when it comes to blockchain, only the market can decide.',
      },
    ],
    theme: coin.nameCamelCase,
  },
  exchange: {
    currency: coin.tickerLower,
    network: 'BCH',
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
