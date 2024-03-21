import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'XNO',
  tickerLower: 'xno',
  name: 'Nano',
  nameCamelCase: 'nano',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-xno',
    title: `Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} with Fiat, EUR & USD`,
    description: `Guardarian offers the most user-friendly environment for purchasing the ${coin.name} coin. Get the best EUR & USD to ${coin.tickerUpper} exchange rate at Guardarian.com'`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'Nano (XNO) is a digital currency designed to provide fast transactions, zero fees and high scalability. Originally known as RaiBlocks, Nano uses a combination of blockchain and directional acyclic technology; and ties each account to its own blockchain. Simply, Nano stores incoming and outgoing transaction data in designated, individual blocks on your own blockchain. This way your wallet balance is always kept up to date and secure, while the blockchain keeps working properly.',
    info: {
      release: 2015,
      ticker: coin.tickerUpper,
      creator: 'Colin LeMahieu',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name} (${coin.tickerUpper})?`,
        text: 'Nano is a digital currency that aims to offer an effective and viable alternative to fiat currencies. Using a unique "blockchain" structure, Nano promises several key advantages over other payment currencies. The general concept and idea behind the Nano cryptocurrency is the main goal behind one process. The company has one priority - scalability.',
      },
      {
        title: `Why to buy ${coin.name} (${coin.tickerUpper})?`,
        text: 'Nano is a cryptocurrency that likely has a long future ahead of it. One of the long-term goals of its creators is to see the protocol itself configured as an Internet standard that can be touched and handled several times by a group of different people, and to make sure that none of those groups have to add or change network parameters to avoid possible problems, such as arguments over block size.',
      },
    ],
    theme: coin.nameCamelCase,
  },
  exchange: {
    currency: 'XNO',
    name: coin.name,
    network: 'NANO',
    usdImageSrc: `/${coin.nameCamelCase}/usd-${coin.nameCamelCase}.png`,
    eurImageSrc: `/${coin.nameCamelCase}/eur-${coin.nameCamelCase}.png`,
  },
  howToBuy: {
    name: coin.name,
    ticker: coin.tickerUpper,
    youtube: 'https://www.youtube.com/embed/Jl_xvvofthk',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
