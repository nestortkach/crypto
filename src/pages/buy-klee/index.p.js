import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-klee',
    title: 'Buy KLEE (KleeKai) | Buy KLEE with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing KLEE. Get the best EUR & USD to KLEE exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy KLEE (KleeKai)',
    text: `KleeKai (Klee) is an exciting new Play-2-Earn Token that is currently used to support a unique and addictive new game - KleeRun. This game can be played by all ages & was developed to allow people to earn income while having fun! Earn up to $240 USD per month with KleeRun - Available on Google Play and PC at KleeRun.game`,
    info: {
      release: 2021,
      ticker: 'KLEE',
      creator: 'KleeRun team',
    },
    theme: 'klee',
    currency: 'klee',
  },
  about: {
    articles: [
      {
        title: 'What is KLEE?',
        text: `Currently, there are over 100 Quadrillion KLEE coins available that you can either win by
playing the game or you can get them through your own virtual wallet. Although it was first launched as
a meme coin, it attracted a lot of attention early on thanks to its 2% reflection feature which makes it so
that every token that is used gets redistributed amongst all the other holders.`,
      },
      {
        title: 'Why to buy KLEE?',
        text: `Even though it is tied to an online game, Klee Kai (KLEE) can also end up making you a lot of money if you
play your cards right. On top of that, there is a safety net to fall back on as there are so many tokens out
there that the liquidity has been completely burned to a crisp, meaning that nobody can pull the rug and
thus you can enjoy the game without that fear in the back of your head.`,
      },
    ],
    theme: 'klee',
  },
  exchange: {
    currency: 'klee',
    network: 'ETH',
    name: 'KLEE',
    usdImageSrc: '/klee/usd-klee.png',
    eurImageSrc: '/klee/eur-klee.png',
    usdText:
      'The current 1 Dollar to KLEE exchange rate is KLEE. Get KLEE fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get KLEE.',
    eurText:
      'The current 1 Euro to KLEE exchange rate is KLEE. Get KLEE fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get KLEE.',
  },
  howToBuy: {
    name: 'KleeKai',
    ticker: 'KLEE',
    youtube: 'https://www.youtube.com/embed/Xqbrid9BwGE',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
