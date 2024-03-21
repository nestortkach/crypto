import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-link',
    title: 'Buy Chainlink (LINK) | Buy LINK with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing LINK. Get the best EUR to LINK & USD to LINK exchange rate at Guardarian.com',
  },
  banner: {
    title: 'Buy Chain Link (LINK)',
    text: 'Chainlink offers a single solution for transferring data into and out of blockchain, between the digital and "real" world. And your Oracle service does this in a secure and decentralized way. What\'s more, Chainlink aims to solve the problem of centralized oracles through a network of nodes, eliminating the single point of failure. The Chainlink platform has generated enormous interest, including even from organizations such as Google and SWIFT.',
    info: {
      release: 2017,
      ticker: 'LINK',
      creator: 'Sergey Nazarov',
    },
    theme: 'chainlink',
    currency: 'link',
  },
  about: {
    articles: [
      {
        title: 'What is Chain Link (LINK)?',
        text: 'The idea behind San Francisco-based Chainlink is to connect smart contracts through blockchains, allowing them to access key off-chain resources, such as bank account payments, data feeds or webAPIs; Developer interest is focused on creating smart contracts that can interface with external systems to make them useful in the business world.',
      },
      {
        title: 'Why to buy Chain Link (LINK)?',
        text: 'The place where blockchain meets the outside world was a huge vulnerability in decentralized applications (dapps) until Chainlink created a secure bridge. The points where data enters the blockchain are also points where data can be tampered with, compromised, or simply tampered with - these points of failure are where Chainlink creates value.',
      },
    ],
    theme: 'chainlink',
  },
  exchange: {
    currency: 'link',
    name: 'Chain Link',
    network: 'ETH',
    usdImageSrc: '/link/usd-link.png',
    eurImageSrc: '/link/eur-link.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Chain Link',
    ticker: 'LINK',
    youtube: 'https://www.youtube.com/embed/7dpLB0P9RP4',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
