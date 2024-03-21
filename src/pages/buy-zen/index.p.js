import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-zen',
    title: 'Buy Horizen (ZEN) | Buy ZEN with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing the Horizen coin. Get the best EUR & USD to ZEN exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Horizen (ZEN)',
    text: "Horizen is a blockchain system supported by a decentralized infrastructure of nodes. Its platform focuses on scalable data privacy and allows companies and developers to create private or public blockchains. That's why Guardarian lets you become part of the ecosystem, and purchase ZEN tokens right now.",
    info: {
      release: 2017,
      ticker: 'ZEN',
      creator: 'Robert Viglione',
    },
    theme: 'horizen',
    currency: 'zen',
  },
  about: {
    articles: [
      {
        title: 'What is Horizen (ZEN)?',
        text: 'The project was launched in May 2017 and was the result of a fork of the Zcash. Horizen aims to be more than just a cryptocurrency, they aim to enable the transmission and storage of messages, data or values safely and discreetly by integrating technologies that integrate three functions, namely transactions, communication and competitive management; using a globally distributed blockchain to do so.',
      },
      {
        title: 'Why to buy Horizen (ZEN)?',
        text: 'In the digital age, data privacy is one of the key factors that both individuals and companies are looking for. In this regard, Horizen (ZEN) has announced that it will build a dedicated sidechain for LTO networks on its Zendoo platform to add a layer of security to its daily network transactions. ',
      },
    ],
    theme: 'horizen',
  },
  exchange: {
    currency: 'zen',
    network: 'ZEN',
    name: 'Horizen',
    usdImageSrc: '/zen/usd-zen.png',
    eurImageSrc: '/zen/eur-zen.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Horizen',
    ticker: 'ZEN',
    youtube: 'https://www.youtube.com/embed/_uUw0xuGdZ4',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
