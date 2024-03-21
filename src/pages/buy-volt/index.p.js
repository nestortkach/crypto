import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'VOLT',
  tickerLower: 'volt',
  name: 'Volt Inu',
  nameCamelCase: 'voltInu',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-volt',
    title: `Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} Coin with Fiat, EUR & USD`,
    description: `Guardarian offers the most user-friendly environment for purchasing ${coin.name}. Discover the best EUR to FIL and USD to ${coin.tickerUpper} exchange rate at Guardarian.com`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'Volt Inu (VOLT) is a hyper-deflationary token whose aim is to invest in multiple asset classes such as NFTs, nodes, altcoins, staking and farming of stablecoins.',
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
        text: 'Volt Inu (VOLT) is a hyper-deflationary token whose aim is to invest in multiple asset classes such as NFTs, nodes, altcoins, staking & farming of stablecoins. Holders will benefit from it since the profits are used to buyback and burn VOLT, thus creating a rising price floor.',
      },
      {
        title: `Why to buy ${coin.name} (${coin.tickerUpper})?`,
        text: 'VOLT is a prominent project launched in December 2021. The VOLT team is hard at work by continuously delivering new developments, partnerships, listings and utilities which allowed this project to already gather a community of 50,000+ holders.',
      },
    ],
    theme: coin.nameCamelCase,
  },
  exchange: {
    currency: coin.tickerLower,
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
