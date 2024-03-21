import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-uni',
    title: 'Buy Uniswap (UNI) | Buy UNI with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Uniswap. Get the best EUR & USD to UNI exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy swap (UNI)',
    text: "The UNI token is Uniswap's cryptocurrency management platform. This token allows holders to vote for new proposals or solutions. On our platform you can purchase UNI quickly, easily and without lengthy registration using Guardarian",
    info: {
      release: 2020,
      ticker: 'UNI',
      creator: 'Hayden Adams',
    },
    theme: 'uniswap',
    currency: 'uni',
  },
  about: {
    articles: [
      {
        title: 'What is Uniswap (UNI)?',
        text: 'Uniswap is one of the most powerful protocols in the world of DeFi. This DeFi project plays a big role in the cryptocurrency world. The project was designed to automatically provide liquidity to Ethereum. This decentralised exchange protocol (DEX) has become one of the market leaders due to the large volume of transactions it performs and its specific operating system. Also, they issued a token called UNI to operate on their platform.',
      },
      {
        title: 'Why to buy Uniswap (UNI)?',
        text: 'The growing decentralised finance (DeFi) ecosystem aims to use decentralised, non-storage financial products to replace centralised intermediaries in financial applications such as loans, insurance and derivatives.',
      },
    ],
    theme: 'uniswap',
  },
  exchange: {
    currency: 'uni',
    network: 'ETH',
    name: 'Uniswap',
    usdImageSrc: '/uni/usd-uni.png',
    eurImageSrc: '/uni/eur-uni.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Uniswap',
    ticker: 'UNI',
    youtube: 'https://www.youtube.com/embed/ysEP1G9bHGw',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
