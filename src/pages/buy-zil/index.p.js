import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'ZIL',
  tickerLower: 'zil',
  name: 'ZILLIQA',
  nameCamelCase: 'zilliqa',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-zil',
    title: `Buy Zilliqa (${coin.tickerUpper}) | Buy ${coin.tickerUpper} with Fiat, EUR & USD | Guardarian`,
    description: `Guardarian offers the most user-friendly environment for purchasing Zilliqa. Discover the best EUR to ${coin.tickerUpper} and USD to ${coin.tickerUpper} exchange rate at Guardarian.com`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'Buy ZILLIQA quickly and secure with Guardarian. We at Guardarian have developed a fully automated system that allows each user to purchase ZILLIQA within seconds without having to face a long registration process. Still not sure to buy? Find out what ZILLIQA is and how it works below. If you end up being interested in this crypto asset, we will tell you how to buy ZILLIQA on Guardarian. ',
    info: {
      release: 2017,
      ticker: coin.tickerUpper,
      creator: 'Tianwei Liu',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name}?`,
        text: 'Zilliqa is a software that aims to control the global, computer network for managing blockchain platforms it aims to increase user value by sharding. In this way, Zilliqa is one of several competing blockchains that aim to grow an ecosystem of decentralized applications (apps) and cryptocurrencies, such as Ethereum, Tron and EOS. To differentiate itself from others, Zilliqa uses a sharding process that splits its infrastructure into several interconnected blockchains to support more transactions.',
      },
      {
        title: `Why to buy ${coin.name}?`,
        text: 'The goal of Zilliqa crypto is to solve the problems of blockchain scalability and speed, which it does by using sharding as a second-tier scaling solution. Zilliqa has many useful features for developers, such as the ability to in-depth deploy and manages DApps and Zilliqa for investors. This makes it decent to trade and it is certainly a profitable investment.',
      },
    ],
    theme: coin.nameCamelCase,
  },
  exchange: {
    currency: coin.tickerLower,
    network: 'ZIL',
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
