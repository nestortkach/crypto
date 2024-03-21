import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-dlt',
    title: 'Buy Agrello (DLT) | Buy DLT with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing the Agrello coin. Get the best EUR & USD to DLT exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy DLT (Agrello)',
    text: 'Agrello is a blockchain project which has actually gotten a lot of people’s interests by using the blockchain technology and smart contracts in order to change the way we look at cryptos and the way we build them up. DLT is meant to change the world of legally binding contracts and it is meant to facilitate the building of borderless networks that work entirely based on digital identities and signatures.',
    info: {
      release: 2017,
      ticker: 'DLT',
      creator: 'Toomas Pihl',
    },
    theme: 'dlt',
    currency: 'dlt',
  },
  about: {
    articles: [
      {
        title: 'What is DLT?',
        text: 'Agrello is a contract management and e-signing platform that lets you manage and sign documents while saving time on the entire process of signing. It is suitable for both personal and business use.',
      },
      {
        title: 'Why to Buy DLT?',
        text: 'Agrello is changing the face of digital signatures and legal contracts of all kinds. With the increasing security measures of today’s world, Agrello, with its DLT, is moving towards the future where we can sleep easily knowing that our contracts are signed legitimately and by the right people.',
      },
    ],
    theme: 'dlt',
  },
  exchange: {
    currency: 'dlt',
    network: 'ETH',
    name: 'DLT',
    usdImageSrc: '/dlt/usd-dlt.png',
    eurImageSrc: '/dlt/eur-dlt.png',
    usdText:
      'The current 1 Dollar to DLT exchange rate is DLT. Get DLT fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get DLT.',
    eurText:
      'The current 1 Euro to DLT exchange rate is DLT. Get DLT fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get DLT.',
  },
  howToBuy: {
    name: 'DLT',
    ticker: 'Agrello Token',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
