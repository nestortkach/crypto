import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-doge',
    title: 'Buy Dogecoin (DOGE) | Buy DOGE with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Dogecoin. Get the best EUR & USD to DOGE exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Doge',
    text: 'Buy Dogecoin with Guardarian. Nowadays it is one of the most traded cryptocurrencies in history.  Do you want to invest in Dogecoin? The hype surrounding the cryptocurrency creates great profit opportunities for the experienced trader, and newbies. That’s why you should consider DOGE as your next purchase.\n',
    info: {
      release: 2013,
      ticker: 'DOGE',
      creator: 'Billy Markus',
    },
    theme: 'doge',
    currency: 'doge',
  },
  about: {
    articles: [
      {
        title: 'What is Dogecoin (DOGE)?',
        text: 'Dogecoin is a cryptocurrency that was born in 2013 as a joke. The currency is actually based on the popular internet meme "doge", which depicts a Shiba Inu dog with funny phrases on it. Dogecoin has evolved from a joke to a serious cryptocurrency. Today, many people and companies around the world accept it as a form of payment, so much so that it now has a market capitalisation of more than USD 300 million and a transaction volume of more than USD 17 million.',
      },
      {
        title: 'Why to buy Dogecoin (DOGE)?',
        text: "It is always difficult to say how and why a cryptocurrency gains or loses value, becomes popular or not. However, in late January 2021, factors emerged that contributed to Dogecoins' rise in value. First, the Reddit community, which went to war with mutual funds that decided to close the GameStop chain of game shops, wondered: if it was possible to increase the value of GameStop, why not increase the value of Dogecoin? Since that time, DOGE prices have been constantly growing.",
      },
    ],
    theme: 'doge',
  },
  exchange: {
    currency: 'doge',
    name: 'Dogecoin',
    usdImageSrc: '/doge/usd-doge.png',
    eurImageSrc: '/doge/eur-doge.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Dogecoin',
    ticker: 'DOGE',
    youtube: 'https://www.youtube.com/embed/RS3bVFr7mFM',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
