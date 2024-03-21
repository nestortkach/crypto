import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'THETA',
  tickerLower: 'theta',
  name: 'Theta',
  nameCamelCase: 'theta',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-theta',
    title: `Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} with Fiat, EUR & USD`,
    description: `Guardarian offers the most user-friendly environment for purchasing the ${coin.name} coin. Get the best EUR & USD to ${coin.tickerUpper} exchange rate at Guardarian.com'`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'Theta is a blockchain project that operates as a decentralized video network provider . Its goal is focused on solving basic problems associated with the growing video streaming ecosystem. To do this, it relies on blockchain technology, which also allows users to generate passive income through collaboration and sharing their bandwidth.',
    info: {
      release: 2021,
      ticker: coin.tickerUpper,
      creator: 'Mitch Liu, Jieyi Long',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name} (${coin.tickerUpper})?`,
        text: 'Theta is a project that aims to decentralize streaming and video on demand. It mainly aims to be a decentralized p2p platform, and this allows users to share bandwidth and computing resources to earn tokens. This is a very ambitious plan because more than two-thirds of the current Internet bandwidth is used for video streaming.',
      },
      {
        title: `Why to buy ${coin.name} (${coin.tickerUpper})?`,
        text: 'Theta promises excellent transaction speed. For this, it has chosen between 10 and 20 validation nodes that generate blocks. In addition, it has a large number of "keeper" nodes . To validate a block, 2/3 of the consensus of the block\'s checkpoints must be reached. The platform also serves as an advertising medium. Customers can advertise by paying viewers with Theta tokens in exchange for their time and reward influencers.',
      },
    ],
    theme: coin.nameCamelCase,
  },
  exchange: {
    currency: coin.tickerLower,
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
