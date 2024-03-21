import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-usdt',
    title: 'Buy Tether (USDT) with USD - Guardarian',
    description:
      'Guardarian is the easiest way to buy & sell Tether. Exchange USD to USDT and USDT to USD without registration or any hidden fees.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Tether (USDT) with USD',
    text: 'Guardarian allows you to purchase one of the most stable tokens in the cryptocurrency ecosystem. Meet Tether, which has long established itself in the market. If you want to buy a USDT token, now is the time.\n',
    info: {
      release: 2014,
      ticker: 'USDT',
      creator: 'Brock Pierce',
    },
    theme: 'tether',
    currency: 'USDT',
  },
  about: {
    articles: [
      {
        title: 'What is Tether (USDT)?',
        text: 'Tether developed USDT to build the necessary bridge between fiat currencies and cryptocurrencies and to offer users stability, transparency and minimal transaction fees. This maintains a 1: 1 ratio with USDT in terms of value, meaning that USDT will always have a value equal to or very close to USDT.',
      },
      {
        title: 'Why to buy Tether (USDT)?',
        text: 'Tether is backed by a real currency, users can enjoy the benefits of blockchain-based digital transactions without being exposed to the volatility of most cryptocurrencies. When sending money between two Tether accounts or two blockchain-based wallets that can store Tether, there is no transaction fee. However, conversion of Tether into fiat currency may require payment of some services or transaction fees to the parent company.',
      },
    ],
    theme: 'tether',
  },
  exchange: {
    currency: 'usdt',
    name: 'Tether',
    network: 'ETH',
    usdImageSrc: '/usdt/usd-usdt.png',
    eurImageSrc: '/usdt/eur-usdt.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Tether',
    ticker: 'USDT',
    youtube: 'https://www.youtube.com/embed/rMtCr25pfQU',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
