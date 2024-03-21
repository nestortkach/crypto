import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'FIL',
  tickerLower: 'fil',
  name: 'Filecoin',
  nameCamelCase: 'filecoin',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-fil',
    title: `Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} Coin with Fiat, EUR & USD`,
    description: `Guardarian offers the most user-friendly environment for purchasing ${coin.tickerUpper}. Discover the best EUR to FIL and USD to ${coin.tickerUpper} exchange rate at Guardarian.com`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'Filecoin allows the user to configure privacy levels, allowing the entire file to be visible until it is promptly provided to anyone. It allows users to distribute data through this network. That’s why Guardarian may help you in buying the asset that may be the biggest part of future file systems.',
    info: {
      release: 2014,
      ticker: coin.tickerUpper,
      creator: 'Juan Benet',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name} (${coin.tickerUpper})?`,
        text: 'FileCoin is a cryptocurrency and protocol that works as a storage solution. Developed by Protocol Labs, cryptocurrency works on IPFS, seeking to create new ways to store and exchange information on the Internet. However, its difference from web protocols is that instead of storing files in a centralized URL, its routing algorithm allows you to receive content from any place or channel that connects to network nodes. ',
      },
      {
        title: `Why to buy ${coin.name} (${coin.tickerUpper})?`,
        text: 'FileCoin developers have created a particular consensus mechanism for the Filecoin network, called Replication Test (PoRep), which requires miners to check before confirming that they have created multiple copies of the same file and saved them to the network, which makes information storage more reliable and encourages nodes to increase the space on their hard drives for more rewards.',
      },
    ],
    theme: coin.nameCamelCase,
  },
  exchange: {
    currency: coin.tickerLower,
    name: coin.name,
    network: 'FIL',
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
