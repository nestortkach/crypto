import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'CHZ',
  tickerLower: 'chz',
  name: 'Chiliz',
  nameCamelCase: 'chiliz',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-chz',
    title: `Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} with Fiat, EUR & USD`,
    description: `Guardarian offers the most user-friendly environment for purchasing the ${coin.name} coin. Get the best EUR & USD to ${coin.tickerUpper} exchange rate at Guardarian.com'`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'Chilies is currently spearheading a platform that allows any sports organization to monetize their fans by creating a "Fan Token Offer (FTO)" associated with their team. Tokens created on this occasion will allow, among other things, certain rights to manage the respective team, to participate in VIP events or to be rewarded for their loyalty in the form of discounts on ticket prices.',
    info: {
      release: 2021,
      ticker: coin.tickerUpper,
      creator: 'Alexandre Dreyfus',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name} (${coin.tickerUpper})?`,
        text: 'The Chiliz token was created to create a system that facilitates interaction between top athletes and their fans.',
      },
      {
        title: `Why to buy ${coin.name} (${coin.tickerUpper})?`,
        text: 'At the moment, fans of a team can only interact with the team by buying tickets to watch matches or merchandise, such as jerseys. For example, they cannot vote in strategic decisions. Buying shares in a sports organization, especially a big one, is absolutely overpriced. Using the system that Chiliz wants to create, each fan would be able to buy a certain number of tokens related to their favorite team according to their budget, with each token corresponding to a share of the company. All fans would then be able to voice their opinions in proportion to the number of tokens they have. In a sense, they would be micro-shareholders.',
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
