import React from 'react';

import CoinPage from 'layout/CoinPage';

const coin = {
  tickerUpper: 'AERGO',
  tickerLower: 'aergo',
  name: 'AERGO',
  nameCamelCase: 'aergo',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-aergo',
    title: `Buy Aergo (${coin.tickerUpper}) | Buy ${coin.tickerUpper} with Fiat, EUR & USD | Guardarian`,
    description: `Guardarian offers the most user-friendly environment for purchasing Aergo. Discover the best EUR to ${coin.tickerUpper} and USD to ${coin.tickerUpper} exchange rate at Guardarian.com`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy AERGO (Aergo)',
    text: 'Aergo is an open-source enterprise blockchain platform optimized for hybrid deployments. The platform was originally created by Blocko, a titan company in the industry that is backed up by Samsung themselves.',
    info: {
      release: 2021,
      ticker: 'AERGO',
      creator: 'Peter Wall',
    },
    theme: 'aergo',
    currency: 'aergo',
  },
  about: {
    articles: [
      {
        title: 'What is AERGO?',
        text: 'As an open-source enterprise blockchain platform, it is a breath of fresh air to see it actually facilitate easy data handling and familiar smart contract programming which shows the fact that it was made specifically for developers to do their magic on it.',
      },
      {
        title: 'Why to Buy AERGO?',
        text: 'What sets it apart from a lot of the other platforms out there is the fact that it was specifically built for hybrid deployments, which means that it can facilitate both permissioned and permissionless blockchain architectures. So, innovation that has potential.',
      },
    ],
    theme: 'aergo',
  },
  exchange: {
    currency: 'aergo',
    network: 'ETH',
    name: 'AERGO',
    usdImageSrc: '/aergo/usd-aergo.png',
    eurImageSrc: '/aergo/eur-aergo.png',
    usdText:
      'The current 1 Dollar to AERGO exchange rate is AERGO. Get AERGO fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get AERGO.',
    eurText:
      'The current 1 Euro to AERGO exchange rate is AERGO. Get AERGO fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get AERGO.',
  },
  howToBuy: {
    name: 'AERGO',
    ticker: 'Aergo Coin',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
