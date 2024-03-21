import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'KLV',
  tickerLower: 'klv',
  name: 'Klever',
  nameCamelCase: 'klever',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-klv',
    title: `Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} with Fiat, EUR & USD`,
    description: `Guardarian offers the most user-friendly environment for purchasing the ${coin.name} coin. Get the best EUR & USD to ${coin.tickerUpper} exchange rate at Guardarian.com'`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: "The Klever app is a simple, versatile and secure cryptocurrency wallet compatible with the world's major blockchains. ",
    info: {
      release: 2009,
      ticker: coin.tickerUpper,
      creator: 'Dio Lanakiara',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name} (${coin.tickerUpper})?`,
        text: 'The app offers over 300 trading pairs in Klever Swap and direct access to dApps based on ETH and TRX in the Klever browser. It is also a decentralized self-service p2p wallet network that puts private keys in the hands of its users.',
      },
      {
        title: `Why to buy ${coin.name} (${coin.tickerUpper})?`,
        text: 'The KLV token serves as gasoline for the entire Klever ecosystem and guarantees minimal Klever Swap fees. The stakes allow users to earn passive income, with over 60% of all KLVs in circulation currently frozen and placed by Klever users.',
      },
    ],
    theme: coin.nameCamelCase,
  },
  exchange: {
    currency: coin.tickerLower,
    name: coin.name,
    network: 'TRX',
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
