import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-feg',
    title: 'Buy FEG (FEG) | Buy FEG Coin with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing FEG. Discover the best EUR to FEG and USD to FEG exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy FEG (FEG Token)',
    text: 'FEG Token is an intriguing new hyper-deflationary token that has a massive circulation supply of up to 100 quadrillion in total. This applies both to the Ethereum blockchain and the Binance Smart Chain which makes it extremely valuable if you’re looking to cash out quickly and effortlessly.',
    info: {
      release: 2021,
      ticker: 'FEG',
      creator: 'Anonymous',
    },
    theme: 'feg',
    currency: 'feg',
  },
  about: {
    articles: [
      {
        title: 'What is FEG?',
        text: 'FEG Token is a hyper-deflationary token which gives the holders a tax of 1% and an extra 1% that will be burnt in the process. Because of this, the crypto coin actually rewards the holders for holding onto their assets and essentially it decreases the supply overtime.',
      },
      {
        title: 'Why to Buy FEG?',
        text: 'Within the short period of time that it’s been active, FEG token has already garnered quite a lot of attention and to this day people are still looking forward to seeing how far it can get. As of 2021, the community is expecting a large jump in FEG value during the next following years. Today might still be early.',
      },
    ],
    theme: 'feg',
  },
  exchange: {
    currency: 'feg',
    network: '',
    name: 'FEG',
    usdImageSrc: '/feg/feg-usd.webp',
    eurImageSrc: '/feg/feg-eur.webp',
    usdText:
      'The current 1 Dollar to FEG exchange rate is FEG. Get FEG fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get FEG',
    eurText:
      'The current 1 Euro to FEG exchange rate is FEG. Get FEG fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get FEG',
  },
  howToBuy: {
    name: 'FEG',
    ticker: 'FEG token',
    youtube: 'https://www.youtube.com/embed/b5a4G888sNI',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
