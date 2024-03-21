import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-near',
    title: 'Buy NEAR Protocol (NEAR) | Buy NEAR with Fiat, EUR & USD',
    description:
      'NEAR is an exciting new software that is meant to help developers create and launch decentralized applications with ease. On top of being a very safe option to invest in because of its elevated security guarantee, NEAR is also very simple to understand and take full advantage of.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy NEAR Protocol (NEAR)',
    text: 'NEAR is an exciting new software that is meant to help developers create and launch decentralized applications with ease. On top of being a very safe option to invest in because of its elevated security guarantee, NEAR is also very simple to understand and take full advantage of.',
    info: {
      release: 2018,
      ticker: 'NEAR',
      creator: 'Alexander Skidanov, Ilya Polosukhin',
    },
    theme: 'near',
    currency: 'near',
  },
  about: {
    articles: [
      {
        title: 'What is NEAR?',
        text: 'NEAR Protocol (NEAR) is a layer-one blockchain that specializes in Web 3.0 problem-solving. Its main goal is to help developers with slow transaction rates, limited throughout, and poor compatibility. Through NEAR, the developers can build decentralized apps, grow on their platform, and of course, find a community of like-minded individuals to discuss with and continuously improve upon your projects through.',
      },
      {
        title: 'Why to Buy NEAR?',
        text: 'What separates NEAR Protocol (NEAR) from most other decentralized app platforms out there is the fact that it almost completely diminishes the barriers to Web 3 adoption. The progressive UX, the high speeds, the low fees involved in the process made NEAR into the powerhouse that it is today.',
      },
    ],
    theme: 'near',
  },
  exchange: {
    currency: 'near',
    network: 'near',
    name: 'NEAR',
    usdImageSrc: '/near/usd-near.png',
    eurImageSrc: '/near/eur-near.png',
    usdText:
      'The current 1 Dollar to NEAR exchange rate is NEAR. Get NEAR fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get NEAR.',
    eurText:
      'The current 1 Euro to NEAR exchange rate is NEAR. Get NEAR fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get NEAR.',
  },
  howToBuy: {
    name: 'NEAR',
    ticker: 'NEAR',
    youtube: 'https://www.youtube.com/embed/Gy3HsLt0MRs',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
