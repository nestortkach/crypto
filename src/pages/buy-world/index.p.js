import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-world',
    title: 'Buy World Token (WORLD) | Buy WORLD with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing World Token. Get the best EUR & USD to WORLD exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy World Token (WORLD)',
    text: 'Buy World Token on a reliable resource that will guarantee the safety of your funds. Guardarian allows you to buy it in the protected system without much steps. We developed a fully automated service that allows every user to buy WORLD in a seconds. Spend your time on what’s matters: we will handle the rest.\n',
    info: {
      release: 2021,
      ticker: 'WORLD',
      creator: 'Benjamin',
    },
    theme: 'world',
    currency: 'world',
  },
  about: {
    articles: [
      {
        title: 'What is World Token (WORLD)?',
        text: 'Effectively advertised project with a trading system on the roadmap. This is a project for people who already know how to work with the Ethereum ecosystem. ',
      },
      {
        title: 'Why to buy World Token (WORLD)?',
        text: 'The WORLD system guarantees rewards in tokens to members for each block, regardless of whether there has been a WORLD transaction on it or not. Under the same system, rewards will scale as the project grows, while ensuring that the reward pool never runs out.',
      },
    ],
    theme: 'world',
  },
  exchange: {
    currency: 'world',
    network: 'ETH',
    name: 'World Token',
    usdImageSrc: '/world/usd-world.png',
    eurImageSrc: '/world/eur-world.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'World Token',
    ticker: 'WORLD',
    youtube: 'https://www.youtube.com/embed/juP37ae4R3s',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
