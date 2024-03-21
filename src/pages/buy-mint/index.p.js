import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-mint',
    title: 'Buy Mint Club (MINT) | Buy MINT with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing MINT. Get the best EUR to MINT & USD to MINT exchange rate at Guardarian.com',
  },
  banner: {
    title: 'Mint Club (MINT)',
    text: 'Mint Club is a web user interface that specifically makes use of a smart contract protocol. It represents a smart token-building platform that is meant to help developers establish themselves in the crypto world. Using a smart contract protocol also adds to the experience by removing the need to get involved with other developers to get your project started.',
    info: {
      release: 2021,
      ticker: 'MINT',
      creator: 'HUNT Team',
    },
    theme: 'mint',
    currency: 'MINT',
  },
  about: {
    articles: [
      {
        title: 'What is MINT?',
        text: 'MINT Club is a smart token-building platform that doesn’t require the users to have any knowledge of coding in order to make full use of their platform. On top of that, it offers liquidity on the Binance Smart Chain by utilizing a bonding curve which completely removes the need for liquidity providing or market making.',
      },
      {
        title: 'Why to Buy MINT?',
        text: 'MINT Club is a very simple-to-use token platform that you can get started with today. Decentralized token platforms are not exactly beginner-friendly, which is where MINT Club comes in. You have a plethora of embedded integrations that can be used to elevate your token to the next level, including widgets, plugins and more. ',
      },
    ],
    theme: 'mint',
  },
  exchange: {
    currency: 'MINT',
    name: 'MINT',
    usdImageSrc: '/mint/usd-mint.png',
    eurImageSrc: '/mint/eur-mint.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Mint Club',
    ticker: 'MINT',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
