import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'BRISE',
  tickerLower: 'brise',
  name: 'Bitgert',
  nameCamelCase: 'bitgert',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-brise',
    title: `Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} Coin with Fiat, EUR & USD`,
    description: `Guardarian offers the most user-friendly environment for purchasing ${coin.name}. Discover the best EUR to FIL and USD to ${coin.tickerUpper} exchange rate at Guardarian.com`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'Bitgert is a crypto engineering organization that has built the fastest blockchain, which has +100k TPS and has zero cost gas fees.',
    info: {
      release: 2021,
      ticker: coin.tickerUpper,
      creator: 'Gert Sanem',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name} (${coin.tickerUpper})?`,
        text: 'Bitgert is the fastest blockchain of 2022 and the fastest-growing ecosystem with projects spanning DeFi, NFTs, Web3 & Much More. Bitgert also has developed a BRC20/ERC20/BEP20 supported wallet on Android & iOS, Bitgert coin exists on Binance Smart Chain & Bitgert Chain.',
      },
      {
        title: `Why to buy ${coin.name} (${coin.tickerUpper})?`,
        text: 'Bitgert is on the radar of investors since it was launched in the summer of 2021. The BRISE developers team are working daily on the success of their crypto-baby, building more products and bringing hundreds of projects to the Brise chain. Bitgert has delivered more than 4 amazing products within just 200 days from the launch date.',
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
