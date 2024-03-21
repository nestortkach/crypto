import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-cro',
    title: 'Buy Crypto.com (CRO) | Buy CRO with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing the Crypto.com coin. Get the best EUR & USD to CRO exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Crypto.com (CRO)',
    text: 'Crypto.com Coin (CRO) is the new name of the Monaco project, founded in 2016 in Hong Kong. Its goal is to promote the democratization of cryptocurrencies through a range of products that facilitate their use. Namely, the development of wallets, cryptocurrency payment cards, investment services, blockchains and so on.',
    info: {
      release: 2021,
      ticker: 'CRO',
      creator: 'Kris Marszalek',
    },
    theme: 'cryptoCom',
    currency: 'cro',
  },
  about: {
    articles: [
      {
        title: 'What is Crypto.com (CRO)?',
        text: 'Crypto.com is a crypto mobile app that gives you the ability to buy and sell digital currencies, store them, invest them, earn interest on them, get loans with them as collateral and pay with them.',
      },
      {
        title: 'Why to buy Crypto.com (CRO)?',
        text: 'The Crypto.com team aims to bring cryptocurrencies closer to everyday life by bridging the gap between the world of cryptocurrency and the world of traditional banking. As the company itself mentions in its business goal, its mission is to "accelerate the global usage of cryptocurrency."',
      },
    ],
    theme: 'cryptoCom',
  },
  exchange: {
    currency: 'cro',
    network: 'CRO',
    name: 'Crypto.com',
    usdImageSrc: '/cro/usd-cro.png',
    eurImageSrc: '/cro/eur-cro.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Crypto.com',
    ticker: 'CRO',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
