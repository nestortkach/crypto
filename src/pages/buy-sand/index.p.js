import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-sand',
    title: 'Buy Sandbox (SAND) | Buy SAND Coin with Flat, EUR & USD',
    description:
      'SAND is the official token for The Sandbox, which is an Ethereum blockchain-based virtual world. Get the best EUR & USD to SAND exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Sandbox (SAND)',
    text: 'SAND is the official token for The Sandbox, which is an Ethereum blockchain-based virtual world. It is meant to serve as your new public gallery on the internet where you can store all of your worlds in. In it you can play, create, own and even govern over the world that you currently have in your possession and you can even store your NFTs in it if you so please.',
    info: {
      release: 2020,
      ticker: 'SAND',
      creator: 'Sebastien Borget, Arthur Madrid',
    },
    theme: 'sand',
    currency: 'sand',
  },
  about: {
    articles: [
      {
        title: 'What is SAND?',
        text: 'SAND is a utility token for The Sandbox, which is a blockchain-based virtual world developer made by Pixowl. Its main purpose is to actually help people create and even explore a vast array of universes at the tip of their fingertips.',
      },
      {
        title: 'Why to Buy SAND?',
        text: 'Although there have been other virtual world projects, not many of them have been as interesting or well thought out as SAND. If you have any NFTs in your possession and you want to show them off this is the perfect place to do so.',
      },
    ],
    theme: 'sand',
  },
  exchange: {
    currency: 'sand',
    name: 'SAND',
    usdImageSrc: '/sand/usd-sand.png',
    eurImageSrc: '/sand/eur-sand.png',
    usdText:
      'The current 1 Dollar to SAND exchange rate is SAND. Get SAND fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get SAND',
    eurText:
      'The current 1 Euro to SAND exchange rate is SAND. Get SAND fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get SAND.',
  },
  howToBuy: {
    name: 'Sandbox',
    ticker: 'SAND',
    youtube: 'https://www.youtube.com/embed/7wvFyNQBNyg',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
