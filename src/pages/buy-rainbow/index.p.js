import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-dom',
    title: 'Buy Rainbow | Buy RAINBOW Coin with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing RAINBOW. Discover the best EUR to RAINBOW and USD to RAINBOW exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy RAINBOW (Rainbow Token)',
    text: 'Rainbow is a fresh and innovative ecosystem that is aiming to make crypto more accessible. It is powered by the RAINBOW Token, which utilizes several strong protocols. Their ultimate goal is to build the connection between the people and the many opportunities of crypto by developing and curating dApps that focus on low-fees and usability.',
    info: {
      release: 2021,
      ticker: 'RAINBOW',
      creator: 'Dom',
    },
    theme: 'rainbow',
    currency: 'rainbow',
  },
  about: {
    articles: [
      {
        title: 'What is RAINBOW?',
        text: 'RAINBOW is a hyper-deflationary DeFi token on the Binance Smart Chain which combines several features into a single cryptoasset. The project was released on the 18th August 2021 and is developed by a team based in the UK. They’ve developed and launched Bifrost, which is a decentralized token launchpad service. It specializes in user friendliness, flexibility and low fees.',
      },
      {
        title: 'Why to Buy RAINBOW?',
        text: 'The development of the decentralized platform service called Bifrost allows users to launch their own tokens in a safe way. It’s goal is to improve upon current solutions, with a particular focus on reduced fees. If you’d like to get involved with this then the RAINBOW token is the key to opening the right doors.',
      },
    ],
    theme: 'rainbow',
  },
  exchange: {
    currency: 'rainbow',
    network: 'ETH',
    name: 'RAINBOW',
    usdImageSrc: '/rainbow/usd-rainbow.png',
    eurImageSrc: '/rainbow/eur-rainbow.png',
    usdText:
      'The current 1 Dollar to RAINBOW exchange rate is RAINBOW. Get RAINBOW fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get RAINBOW.',
    eurText:
      'The current 1 Euro to RAINBOW exchange rate is RAINBOW. Get RAINBOW fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get RAINBOW',
  },
  howToBuy: {
    name: 'RAINBOW',
    ticker: 'Rainbow Token',
    youtube: 'https://www.youtube.com/embed/UzDSrM6ZAFg',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
