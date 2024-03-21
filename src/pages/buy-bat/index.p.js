import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-bat',
    title: 'Buy Basic Attention Coin (BAT) | Buy BAT with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing the Basic Attention Coin coin. Get the best EUR & USD to BAT exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Basic Attention Token (BAT)',
    text: 'BAT was designed to incentivize and reward digital advertising through a more equitable distribution of resources between users, advertisers and blogs (the triangle in its logo indicates the importance given to these three parts).',
    info: {
      release: 2017,
      ticker: 'BAT',
      creator: 'Brendan Eich',
    },
    theme: 'bat',
    currency: 'bat',
  },
  about: {
    articles: [
      {
        title: 'What is Basic Attention Token (BAT)?',
        text: 'The Basic Attention Token is an ERC-20 service token built on the Ethereum blockchain and specifically designed for the Brave browser.',
      },
      {
        title: 'Why to buy Basic Attention Token (BAT)?',
        text: 'Unlike other cryptocurrencies, which include Ethereum inside their network, BAT is not a currency, but rather a means of calculating and managing accounts between publisher content, user attention and advertising costs. Therefore, it is considered a service token or cryptocurrency service token, but not a cryptocurrency.',
      },
    ],
    theme: 'bat',
  },
  exchange: {
    currency: 'bat',
    network: 'ETH',
    name: 'Basic Attention Token',
    usdImageSrc: '/bat/usd-bat.png',
    eurImageSrc: '/bat/eur-bat.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Basic Attention Token',
    ticker: 'BAT',
    youtube: 'https://www.youtube.com/embed/_dem9fPfbBk',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
