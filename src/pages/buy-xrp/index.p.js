import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-xrp',
    title: 'Buy Ripple (XRP) | Buy XRP Coin with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing XRP. Discover the best EUR to XRP and USD to XRP exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Ripple (XRP)',
    text: 'The fact that Ripple is not trying to replace an existing payment system, but rather to provide a platform that helps financial institutions, gives it more flexibility. And Guardarian allows it to become part of that system. Buy XRP instantly and without unnecessary verification steps right now.',
    info: {
      release: 2012,
      ticker: 'XRP',
      creator: 'Chris Larsen',
    },
    theme: 'ripple',
    currency: 'xrp',
  },
  about: {
    articles: [
      {
        title: 'What is Ripple (XRP)?',
        text: 'Ripple was founded by Ripple Labs (which still maintains it) in 2012 as a follow-on iteration of Ripplepay and consolidated as a platform for the cryptocurrency XRP, of which it is an acronym. Like most existing cryptocurrencies, Ripple is based on the idea of a distributed network that requires multiple parties to verify transactions, so it does not need a centralised authority to control what happens within it.',
      },
      {
        title: 'Why to buy Ripple (XRP)?',
        text: "Ripple provides a seamless global payment system using blockchain technology . By joining Ripple's growing global payment network, financial institutions can process their customers' money transfers anywhere in the world in real time, reliably and at low cost. Banks and payment service providers can use XRP's digital currency to further reduce costs and enter new markets securely.",
      },
    ],
    theme: 'ripple',
  },
  exchange: {
    currency: 'xrp',
    network: 'XRP',
    name: 'Ripple',
    usdImageSrc: '/xrp/usd-xrp.png',
    eurImageSrc: '/xrp/eur-xrp.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Ripple',
    ticker: 'XRP',
    youtube: 'https://www.youtube.com/embed/BiMmKVQ2S5Q',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
