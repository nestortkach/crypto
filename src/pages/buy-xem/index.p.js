import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-xem',
    title: 'Buy NEM (XEM) | Buy XEM with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing the NEM coin. Get the best EUR & USD to XEM exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy NEM (XEM)',
    text: 'The NEM team believes it can revolutionize the following areas, among others: financing, loans, legal documents, medical records, gaming data, royalties, smart contracts, distribution chains, accounting, ownership of records and securing an ICO launch. By the way, if you want to be part of this whole ecosystem, be sure to buy your NEM tokens on the Guardarian platform.',
    info: {
      release: 2021,
      ticker: 'XEM',
      creator: 'David Shaw',
    },
    theme: 'nem',
    currency: 'xem',
  },
  about: {
    articles: [
      {
        title: 'What is NEM (XEM)?',
        text: 'Rather known as "social cryptocurrency," NEM (an acronym in English for «new economy movement") is a virtual P2P payment platform with a linked cryptocurrency called XEM.',
      },
      {
        title: 'Why to buy NEM (XEM)?',
        text: 'To be honest, NEM is a fairly new cryptocurrency, and its success depends a lot on the team. However, its unique algorithm and its platform, tuned to applications and processes not available on other networks, make it an opponent to be reckoned with.',
      },
    ],
    theme: 'nem',
  },
  exchange: {
    currency: 'xem',
    name: 'NEM',
    usdImageSrc: '/xem/usd-xem.png',
    eurImageSrc: '/xem/eur-xem.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'NEM',
    ticker: 'XEM',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
