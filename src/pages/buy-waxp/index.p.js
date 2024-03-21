import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'WAXP',
  tickerLower: 'waxp',
  name: 'Wax',
  nameCamelCase: 'wax',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-waxp',
    title: `Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} with Fiat, EUR & USD`,
    description: `Guardarian offers the most user-friendly environment for purchasing the ${coin.tickerUpper} coin. Get the best EUR & USD to ${coin.tickerUpper} exchange rate at Guardarian.com'`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'WAX is short for Worldwide Asset eXchange. It is a decentralized blockchain platform designed as an open, transparent, fair, immutable, reliable and widely available trading platform for the exchange of tokenized virtual commodities such as NFT. ',
    info: {
      release: 2021,
      ticker: coin.tickerUpper,
      creator: 'William Quigley',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name} (${coin.tickerUpper})?`,
        text: "WAX (WAXP) is a blockchain designed to make e-commerce transactions faster, easier and more secure. Essentially, Wax platform allows anyone to operate a fully functioning virtual marketplace with zero investment in security or infrastructure. OPSkins, Wax's algorithm, creates a secure electronic trade that allows customers to exchange virtual items. Every transaction is automatically settled, affecting all parties involved. In this way, WAX utilities create secure transactions.",
      },
      {
        title: `Why to buy ${coin.name} (${coin.tickerUpper})?`,
        text: 'With WAX blockchain technology, you can easily create your own, buy, sell and trade various forms of tokenized digital assets or NFT digital assets. WAX was originally developed to trade collectible or highly desirable items in video games, such as weapons, armor, vehicles, properties, character skins, clothing, power-ups, perks, achievements, and anything else that can be worn or valued.',
      },
    ],
    theme: coin.nameCamelCase,
  },
  exchange: {
    currency: coin.tickerLower,
    network: 'WAXP',
    name: coin.name,
    usdImageSrc: `/${coin.tickerLower}/usd-${coin.tickerLower}.png`,
    eurImageSrc: `/${coin.tickerLower}/eur-${coin.tickerLower}.png`,
  },
  howToBuy: {
    name: coin.name,
    ticker: coin.tickerUpper,
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
