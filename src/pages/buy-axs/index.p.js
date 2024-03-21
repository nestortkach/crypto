import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-axs',
    title: 'Buy Axie Infinity Shards (AXS) | Buy AXS with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing AXS. Get the best EUR to AXS & USD to AXS exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Axie Infinity (AXS)',
    text: 'AXS or Axie Infinity Shards are tokens of Axie Infinity - a play-to-earn type of an online game that is meant to reward the player for the time that they actually spend in the game. You can actually purchase different animated characters in the game known as Axies which serve as NFTs. These animated characters can then be used to battle other players, you can trade them around each other and you can even collect very rare and expensive Axies altogether.',
    info: {
      release: 2018,
      ticker: 'AXS',
      creator: 'Trung Nguyen',
    },
    theme: 'axs',
    currency: 'axs',
  },
  about: {
    articles: [
      {
        title: 'What is AXS?',
        text: "AXS is a governance token for Axie Infinity. In Axie Infinity the players will actually get to purchase their very own Axies or breed them with the game's native token AXS. These NFTs are then used to either battle other players or to be exchanged for monetary value. The more they play, the higher the chances are of them breeding rare Axies, which they can use to win more matches, which in turn brings them more tokens.",
      },
      {
        title: 'Why to Buy AXS?',
        text: 'Axie Infinity manages to offer a safe and fun experience that everyone can get into. Axies can vary in prices but unless you’re looking to purchase some of the rarest characters online there really isn’t any reason as to why you should find yourself avoiding AXS.',
      },
    ],
    theme: 'axs',
  },
  exchange: {
    currency: 'axs',
    network: 'ETH',
    name: 'AXS',
    usdImageSrc: '/axs/usd-axs.png',
    eurImageSrc: '/axs/eur-axs.png',
    usdText:
      'The current 1 Dollar to AXS exchange rate is AXS. Get AXS fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get AXS',
    eurText:
      'The current 1 Euro to AXS exchange rate is AXS. Get AXS fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and getAXS.',
  },
  howToBuy: {
    name: 'Axie Infinity',
    ticker: 'AXS',
    youtube: 'https://www.youtube.com/embed/bk-vMWaZpVw',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
