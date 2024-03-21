import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'ALGO',
  tickerLower: 'algo',
  name: 'ALGORAND',
  nameCamelCase: 'algorand',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-algo',
    title: `Buy Algorand (${coin.tickerUpper}) | Buy ${coin.tickerUpper} with Fiat, EUR & USD | Guardarian`,
    description: `Guardarian offers the most user-friendly environment for purchasing Algorand. Discover the best EUR to ${coin.tickerUpper} and USD to ${coin.tickerUpper} exchange rate at Guardarian.com`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'We at Guardarian have developed a fully automated system that allows each user to purchase ALGORAND within seconds without having to face a long registration process. Still not sure to buy? Find out what ALGORAND is and how it works below. If you end up being interested in this crypto asset, we will tell you how to buy ALGORAND on Guardarian. ',
    info: {
      release: 2019,
      ticker: coin.tickerUpper,
      creator: 'Silvio Micali',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name}?`,
        text: 'Algorand is a decentralized network built to solve the blockchain trilemma to achieve speed, security and decentralization at the same time. Launched in June 2019 by computer scientist and MIT professor Silvio Micali, Algorand is an unofficial and open blockchain network that anyone can build. Algorand is designed as a payment-centric network with fast transactions and a strong focus on achieving near-instantaneous finality - that is, processing over 1,000 transactions per second (TPS) and reaching transaction finality in less than five seconds.',
      },
      {
        title: `Why to buy ${coin.name}?`,
        text: 'Algorand is a great project. It enables developers (individual and organizational) to build applications in areas such as gaming, securities, identity, supply chain, and decentralized finance. It has over 500 use cases and has a great future ahead of it.',
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
    youtube: 'https://www.youtube.com/embed/WACiVoNK4DU',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
