import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-trx',
    title: 'Buy Tron (TRX) | Buy TRX Coin with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing TRX. Discover the best EUR to TRX and USD to TRX exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy TRON (TRX)',
    text: 'It is easy to get lost in the cryptocurrency universe as more and more companies decide to bet on this new technology and bring their own cryptocurrency to market. But looking at the top 30 major currencies, that is, the ones with the highest capitalization, you will find Tron or TRX. You can easily buy this asset with Guardarian and become a part of the world gambling.',
    info: {
      release: 2017,
      ticker: 'TRX',
      creator: 'Justin Sun',
    },
    theme: 'tron',
    currency: 'TRX',
  },
  about: {
    articles: [
      {
        title: 'What is TRON (TRX)?',
        text: 'TRON is a decentralised blockchain-based protocol that aims to develop a digital entertainment platform. The cryptocurrency system allows the user to create and share content for free, free of charge and decentralised. In fact, the official currency is TRONIX (TRX) , the platforms payment instrument.',
      },
      {
        title: 'Why to buy TRON (TRX)?',
        text: 'TRON is the development of an entertainment content marketplace with great promise for the future. TRON cryptocurrency covers several areas and is simultaneously a video hosting, social network, streaming platform, gaming portal, online casino, online payment and publishing platform;',
      },
    ],
    theme: 'tron',
  },
  exchange: {
    currency: 'trx',
    network: 'TRX',
    name: 'TRON',
    usdImageSrc: '/trx/usd-trx.png',
    eurImageSrc: '/trx/eur-trx.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'TRON',
    ticker: 'TRX',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
