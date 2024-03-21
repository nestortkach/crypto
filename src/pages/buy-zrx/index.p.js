import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-zrx',
    title: 'Buy 0x (ZRX) | Buy ZRX with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing the 0x coin. Get the best EUR & USD to ZRX exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy ZRX (Ox)',
    text: 'The ZRX system essentially works solely based on the 0x protocol. This protocol was built in a way that it would propagate the trading of Ethereum tokens on the open market at a much lower cost by coming directly from your wallet.',
    info: {
      release: 2016,
      ticker: 'ZRX',
      creator: 'Will Warren and Amir Bandeali',
    },
    theme: 'zrx',
    currency: 'zrx',
  },
  about: {
    articles: [
      {
        title: 'What is ZRX?',
        text: 'The ZRX token is a fairly new project that works based on the Ethereum blockchain. Because of the versatility of the Ethereum blockchain, you can actually end up purchasing and trading different assets in multiple different ways. In order to make a profit through it you will need to trade the tokens around which will result in you receiving a liquidity reward that is funded through a protocol fee. This protocol fee is applied to each and every trade that happens with this token.',
      },
      {
        title: 'Why to Buy ZRX?',
        text: 'The main reason as to why you should buy ZRX is because it offers the users the advantage of fixed money at no inflationary costs. Plus, on top of that, you also don’t need any intermediaries to facilitate the trading process.',
      },
    ],
    theme: 'zrx',
  },
  exchange: {
    currency: 'zrx',
    network: 'ETH',
    name: 'ZRX',
    usdImageSrc: '/zrx/usd-zrx.png',
    eurImageSrc: '/zrx/eur-zrx.png',
    usdText:
      'The current 1 Dollar to ZRX exchange rate is ZRX. Get ZRX fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get ZRX.',
    eurText:
      'The current 1 Euro to ZRX exchange rate is ZRX. Get ZRX fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get ZRX.',
  },
  howToBuy: {
    name: 'ZRX',
    ticker: 'ZRX token',
    youtube: 'https://www.youtube.com/embed/hHTHB4Zi-3Y',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
