import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-rvn',
    title: 'Buy Raven (RVN) | Buy RVN with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing the Raven coin. Get the best EUR & USD to RVN exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Raven (RVN)',
    text: "Essentially, Ravencoin allows you to create and trade any real world asset (e.g. gold bullion, titles) and digital asset (e.g. gaming items, software licenses) online. The RVN token is Ravencoin's own blockchain currency. As in most blockchains, it serves as an incentive and is used to pay network fees and rewards for the work of developers and miners.",
    info: {
      release: 2018,
      ticker: 'RVN',
      creator: 'Bruce Fenton',
    },
    theme: 'raven',
    currency: 'rvn',
  },
  about: {
    articles: [
      {
        title: 'What is Raven (RVN)?',
        text: 'Ravencoin (RVN), launched in January 2018, is an experimental cryptocurrency that aims to create a digital network between people to facilitate asset transfers; for example, token transfers between users. Built on the forked Bitcoin (BTC) code, it is an open source platform designed with an emphasis on user control, privacy and resistance to censorship.',
      },
      {
        title: 'Why to buy Raven (RVN)?',
        text: 'Ravencoin is an open-source project designed to provide instant payments to anyone around the world. The goal of the project is to create a blockchain specifically optimized for the transfer of assets, such as tokens, from one holder to another.',
      },
    ],
    theme: 'raven',
  },
  exchange: {
    currency: 'rvn',
    name: 'Raven',
    usdImageSrc: '/rvn/usd-rvn.png',
    eurImageSrc: '/rvn/eur-rvn.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Raven',
    ticker: 'RVN',
    youtube: 'https://www.youtube.com/embed/7uaQdB3-oGg',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
