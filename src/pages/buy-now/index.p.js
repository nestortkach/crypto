import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'NOW',
  tickerLower: 'now',
  name: 'Now Token',
  nameCamelCase: 'nowToken',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-now',
    title: `Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} Coin with Fiat, EUR & USD`,
    description: `Guardarian offers the most user-friendly environment for purchasing ${coin.name}. Discover the best EUR to FIL and USD to ${coin.tickerUpper} exchange rate at Guardarian.com`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'The ChangeNOW platform provides users with simple and easy-to-use crypto-swaps for more than 160 cryptocurrencies and offers an open-access API with two streams, a fixed rate stream and a standard one, already used by many well-known partners. And Guardairan grant its customers an opportunity to be a part of this community. Be sure to buy some NOW coins for you!',
    info: {
      release: 2021,
      ticker: coin.tickerUpper,
      creator: 'Ian',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name} (${coin.tickerUpper})?`,
        text: 'NOW token is the first token created by the instant exchange platform. NOW tokens are created to get special benefits of the ChangeNOW service.\n',
      },
      {
        title: `Why to buy ${coin.name} (${coin.tickerUpper})?`,
        text: 'NOW Token is a proprietary asset created by the Change Now exchange development team. NOW token can be used by Change Now clients for accelerated customer support, access to new lists, special trading fees and other benefits. NOW token is launched as an ERC-20 compliant Ethereum token, but is also supported in the Binance blockchain and plans to launch in other blockchains.',
      },
    ],
    theme: coin.nameCamelCase,
  },
  exchange: {
    currency: coin.tickerLower,
    network: 'ETH',
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
