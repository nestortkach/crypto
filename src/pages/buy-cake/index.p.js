import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-cake',
    title: 'Buy Pancake Swap (CAKE) | Buy CAKE with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing the Pancake Swap coin. Get the best EUR & USD to CAKE exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Pancake Swap (CAKE)',
    text: 'PancakeSwap is a decentralized exchange platform that allows you to trade cryptocurrencies and tokens without a centralized intermediary, keeping your assets safe at all times. It is based on automated smart contracts deployed on Binance Smart Chain, a blockchain platform operated by Binance.',
    info: {
      release: 2020,
      ticker: 'CAKE',
      creator: 'Julian Hosp',
    },
    theme: 'pancake',
    currency: 'cake',
  },
  about: {
    articles: [
      {
        title: 'What is Pancake Swap (CAKE)?',
        text: 'PancakeSwap is a decentralized exchange platform similar to Uniswap Ethereum, but running on Binance Smart Chain.',
      },
      {
        title: 'Why to buy Pancake Swap (CAKE)?',
        text: 'In the case of PancakeSwap, instead of running on Ethereum, it is based on Binance Smart Chain and offers much lower trading fees. Binance Smart Chain is newer and less well-known than Ethereum, but PancakeSwap is already causing a sensation among DEX.',
      },
    ],
    theme: 'pancake',
  },
  exchange: {
    currency: 'cake',
    name: 'Pancake Swap',
    usdImageSrc: '/cake/usd-cake.png',
    eurImageSrc: '/cake/eur-cake.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Pancake Swap',
    ticker: 'CAKE',
    youtube: 'https://www.youtube.com/embed/wksXKcc6aec',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
