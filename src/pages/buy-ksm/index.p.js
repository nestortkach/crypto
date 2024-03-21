import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'KSM',
  tickerLower: 'ksm',
  name: 'Kusama',
  nameCamelCase: 'kusama',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-ksm',
    title: `Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} with Fiat, EUR & USD`,
    description: `Guardarian offers the most user-friendly environment for purchasing the ${coin.name} coin. Get the best EUR & USD to ${coin.tickerUpper} exchange rate at Guardarian.com'`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'Kusama (KSM) is a Polkadot test network, a blockchain protocol that connects several specialized blockchains into a single unified network. It can be said that Kusama looks like a Polkadot bodyguard (DOT). It represents an experimental version of community research and development for the original Polkadot protocol.',
    info: {
      release: 2016,
      ticker: coin.tickerUpper,
      creator: 'Peter Czaban',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name} (${coin.tickerUpper})?`,
        text: 'Kusama is an experimental network for public research and development that will serve as a platform for testing. But Polkadot, run by the Web3 Foundation, a Swiss nonprofit organization, argues that even as a test network it has real economic value.',
      },
      {
        title: `Why to buy ${coin.name} (${coin.tickerUpper})?`,
        text: 'Kusama will help in problems detection, and help in ensuring that Polkadot has been running smoothly since launch. Without the launch of this experimental network, it would be really hard to decipher the potential hazards that could arise.',
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
    youtube: 'https://www.youtube.com/embed/2_VN4idKPEk',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
