import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-xym',
    title: 'Buy Symbol Token (XYM) | Buy XYM Coin with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Symbol Token. Discover the best EUR to XYM and USD to XYM exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Symbol Token (XYM)',
    text: 'Symbol is a next-generation NEM Proof-of-Stake (PoS) blockchain with enterprise-class programmability and security. Symbol by NEM brings advanced technical features that can be used by innovative projects that are building a new economy. That’s why Guardarian decided to list this token and allow it’s buying to all the customers.',
    info: {
      release: 2021,
      ticker: 'XYM',
      creator: "Kailin O'Donnell",
    },
    theme: 'symbolToken',
    currency: 'xym',
  },
  about: {
    articles: [
      {
        title: 'What is Symbol Token (XYM)?',
        text: 'NEM Group has launched Symbol, its new proof-of-stake blockchain, which is reportedly aimed at a business audience. Symbol aims to be a decentralized, open-source blockchain. It aims to attract traditional companies to use its technology, and it is a hybrid blockchain because it allows the implementation of public and private networks. It gives developers a lot of flexibility.',
      },
      {
        title: 'Why to buy Symbol Token (XYM)?',
        text: 'Symbol will support data management, logistics, notarization, construction, finance and asset management. What NEM aims to do is reduce operational costs while providing new ways to create value. The goal is for companies to be able to develop blockchains, private, open or hybrid, with different levels of interaction, customizing the asset tokenization system.',
      },
    ],
    theme: 'symbolToken',
  },
  exchange: {
    currency: 'xym',
    name: 'Symbol Token',
    usdImageSrc: '/xym/usd-xym.png',
    eurImageSrc: '/xym/eur-xym.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Symbol Token',
    ticker: 'XYM',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
