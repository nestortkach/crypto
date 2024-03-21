import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-ont',
    title: 'Buy Ontology (ONT) | Buy ONT with Fiat, EUR & USD ',
    description:
      'Guardarian offers the most user-friendly environment for purchasing the Ontology coin. Get the best EUR & USD to ONT exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Ontology (ONT)',
    text: 'Ontology Coin is the cryptocurrency of the Ontology ecosystem, a high-performance distributed collaboration platform that allows companies to implement blockchain-based solutions, but always maintain control over their data (with public and private blockchain). Consequently, Guardarian allows you to buy ONT that is a part of the ecosystem of future projects.',
    info: {
      release: 2017,
      ticker: 'ONT',
      creator: 'Li Jun',
    },
    theme: 'ontology',
    currency: 'ont',
  },
  about: {
    articles: [
      {
        title: 'What is Ontology (ONT)?',
        text: 'Ontology is a public platform created on the NEO network focused on project creation. As an objective, the platform tries to create a system of security, so that companies can exchange and process data securely.',
      },
      {
        title: 'Why to buy Ontology (ONT)?',
        text: "Ontology's blockchain charges no fees and records up to 1,000 transactions per second. It is highly secure because it works with distributed identity verification and various industry modules. Built on the NEO platform, it has features that prevent data decryption even using supercomputers.",
      },
    ],
    theme: 'ontology',
  },
  exchange: {
    currency: 'ont',
    network: 'ONT',
    name: 'Ontology',
    usdImageSrc: '/ont/ont-usd.png',
    eurImageSrc: '/ont/ont-eur.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Ontology',
    ticker: 'ONT',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
