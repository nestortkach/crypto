import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'BRD',
  tickerLower: 'brd',
  name: 'BREAD',
  nameCamelCase: 'bread',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-brd',
    title: `Buy Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} Coin with Fiat, EUR & USD | Guardarian`,
    description: `Guardarian offers the most user-friendly environment for purchasing Bread. Discover the best EUR to ${coin.tickerUpper} and USD to ${coin.tickerUpper} exchange rate at Guardarian.com`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'Buy BRD quickly and secure with Guardarian. We at Guardarian have developed a fully automated system that allows each user to purchase BRD within seconds without having to face a long registration process. Still not sure to buy? Find out what BRD is and how it works below. If you end up being interested in this crypto asset, we will tell you how to buy BRD on Guardarian. ',
    info: {
      release: 2015,
      ticker: coin.tickerUpper,
      creator: 'Aaron Voisine, Adam Traidman',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name}?`,
        text: 'Bread is a cryptocurrency wallet and financial services platform. Bread is detailed in a revised white paper published in October 2017. At its core, Bread is a digital wallet, but its app aims to accelerate the widespread adoption of cryptocurrencies by simplifying the process of buying, converting, and storing. Bread Wallet users can purchase Bread Tokens (BRD) and receive rewards (for example, trading fee discounts) based on the number of BRD tokens they own. BRD is also a digital asset token that can be used to pay for services in the Bread wallet. It is built on Ethereum by the ERC20 standard for tokens. BRD can be bought and sold in fiat currency or other digital wallets. Also, BRD can be stored in a crypto wallet with a custodian like Gemini',
      },
      {
        title: `Why to buy ${coin.name}?`,
        text: 'If you are looking for a good return virtual currency, BRD can be a profitable investment option. It is an amazing investment for every crypto trader and has a profitable lifetime probability. BRD has a proven track record of security and the wallet has never been hacked.',
      },
    ],
    theme: coin.nameCamelCase,
  },
  exchange: {
    currency: coin.tickerLower,
    network: 'bread',
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
