import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-avax',
    title: 'Buy Avalanche (AVAX) | Buy AVAX Coin with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing AVAX. Discover the best EUR to AVAX and USD to AVAX exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Avalanche (AVAX)',
    text: 'AVAX or Avalanche is a smart-contract-capable blockchain platform that is meant to directly increase your transaction speed, reduce your costs, all while also helping the environment at the same time. It was originally released back in 2020 by Ava Labs and it soon rose to the very top of the marketplace, with only a handful of other virtual platforms able to actually compete with it.',
    info: {
      release: 2020,
      ticker: 'AVAX',
      creator: 'Sirer',
    },
    theme: 'avax',
    currency: 'avax',
  },
  about: {
    articles: [
      {
        title: 'What is AVAX?',
        text: 'As a fixed-supply coin, AVAX is the platform’s main unit of account, meaning that through it you will be able to pay transaction fees and stake the consensus process that Avalanche’s based on. Although it is currently considered to be one of the best alternatives on the market, Avalanche are aiming even higher than that by claiming that they will attempt to conduct faster transactions that are also cheaper than the ones on Ethereum.',
      },
      {
        title: 'Why to Buy AVAX?',
        text: 'The main problem that most people have with the crypto market is the fact that there isn’t a lot of security or decentralization which is where AVAX comes in. As a blockchain platform it really just aims to make everyone’s life easier by lowering the prices and increasing the transaction speed while also adding a layer to the security of the buyers.',
      },
    ],
    theme: 'avax',
  },
  exchange: {
    currency: 'avax',
    network: '',
    name: 'AVAX',
    usdImageSrc: '/avax/usd-avax.png',
    eurImageSrc: '/avax/eur-avax.png',
    usdText:
      'The current 1 Dollar to AVAX exchange rate is AVAX. Get AVAX fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get AVAX',
    eurText:
      'The current 1 Euro to AVAX exchange rate is AVAX. Get AVAX fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get AVAX',
  },
  howToBuy: {
    name: 'Avalanche',
    ticker: 'AVAX',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
