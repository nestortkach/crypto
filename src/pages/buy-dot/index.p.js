import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-dot',
    title: 'Buy Polkadot (DOT) | Buy DOT Coin with Flat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Polkadot. Get the best EUR & USD to DOT exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Polkadot (DOT)',
    text: 'A new generation has brought the Polkadot protocol, a network of multiple interconnected blockchains. The Polkadot network provides scalability, allowing these specialized blockchains to communicate with each other in a secure and transparent environment.',
    info: {
      release: 2020,
      ticker: 'DOT',
      creator: 'Robert Habermeier',
    },
    theme: 'polkadot',
    currency: 'dot',
  },
  about: {
    articles: [
      {
        title: 'What is Polkadot (DOT)?',
        text: 'Polkadot is a decentralized protocol based on blockchain technology that allows blockchains and other technologies to exchange information and transactions between them in a completely secure way.',
      },
      {
        title: 'Why to buy Polkadot (DOT)?',
        text: 'Polkadot can process multiple transactions on several different blockchains in parallel using the Parachain feature. Polkadot, called a fragmented multi-chain network, can help make blockchains such as Ethereum more scalable. In addition, users can add their own blockchains to the Polkadot network with little or no friction.',
      },
    ],
    theme: 'polkadot',
  },
  exchange: {
    currency: 'dot',
    name: 'Polkadot',
    network: 'DOT',
    usdImageSrc: '/dot/usd-dot.png',
    eurImageSrc: '/dot/eur-dot.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Polkadot',
    ticker: 'DOT',
    youtube: 'https://www.youtube.com/embed/2ProLI7Vx4s',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
