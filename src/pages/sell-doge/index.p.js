import React from 'react';

import SellCoinPage from 'layout/SellCoinPage';

const pageInfo = {
  banner: {
    title: 'Sell Dogecoin (DOGE)',
    text: 'The first thing we should know about Dogecoin is that it is not a cryptocurrency developed from scratch, it’s just a copy. This cryptocurrency is based on the Litecoin code, which is available to everyone. Litecoin, in turn, is a copy of Bitcoin. Something completely new about Dogecoin is it’s unified mining system. It allows Bitcoin miners to receive Dogecoin, even if the second cryptocurrency is not mined. It’s kind of a unique system when both tokens are using the same type of algorithm.',
    info: {
      release: 2013,
      ticker: 'DOGE',
      creator: 'Billy Markus',
    },
    theme: 'doge',
    currency: 'doge',
  },
  exchange: {
    currency: 'doge',
    name: 'Dogecoin',
    usdImageSrc: '/doge/doge-usd.png',
    eurImageSrc: '/doge/doge-eur.png',
  },
  howToBuy: {
    name: 'Dogecoin',
    ticker: 'DOGE',
    youtube: 'https://www.youtube.com/embed/y76A142ymGk',
  },
};

export default function index() {
  return <SellCoinPage pageInfo={pageInfo} />;
}
