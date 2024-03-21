import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'ARK',
  tickerLower: 'ark',
  name: 'ARK',
  nameCamelCase: 'ark',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-ark',
    title: `Buy ${coin.tickerUpper} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} Coin with Fiat, EUR & USD | Guardarian`,
    description: `Guardarian offers the most user-friendly environment for purchasing Ark. Discover the best EUR to ${coin.tickerUpper} and USD to ${coin.tickerUpper} exchange rate at Guardarian.com`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: "Buy ARK quickly and securely with Guardarian. We at Guardarian have developed a fully automated system that allows each user to purchase ARK within seconds without having to face a long registration process.Still not sure to buy? Find out what ARK is and how it works below. If you end up being interested in this crypto asset, we'll tell you how to buy ARK on Guardarian.",
    info: {
      release: 2017,
      ticker: coin.tickerUpper,
      creator: 'Ark Ecosystem SCIC',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name}?`,
        text: 'ARK is a cryptocurrency and also blockchain-based development platform. The goal of the Ark platform is to enable anyone to create their chain on their platform, with their customizations. While creating a blockchain can be very difficult and especially for newbies, Ark aims to remove the complexity behind building blockchains by reducing the need for smart contracts and using custom transactions, logic and multiple programming languages. The Ark project started in 2016 and by the end of the same year, they had raised $800,000.The Ark system has grown slowly since then but has the potential to bring value to crypto investors, and even allow a large number of non-technical people to help them create blockchains.',
      },
      {
        title: `Why to buy ${coin.name}?`,
        text: 'Ark was a pump and dump recently, it went from $0.90 to $3 in a matter of hours. Arc has potentials. It has a good long term shelf life. It has a great team and a very strong community behind it. I would suggest buying it because Investing in ARK is a great way to increase your wealth.',
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
