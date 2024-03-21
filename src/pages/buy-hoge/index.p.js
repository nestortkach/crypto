import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'HOGE',
  tickerLower: 'hoge',
  name: 'Hoge Finance',
  nameCamelCase: 'hogeFinance',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-hoge',
    title: `Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} with Fiat, EUR & USD`,
    description: `Guardarian offers the most user-friendly environment for purchasing ${coin.name}. Get the best EUR & USD to ${coin.tickerUpper} exchange rate at Guardarian.com'`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'HOGE is a meme token with the power of DeFi (decentralized finance). HOGE combines meme and yield farming. For each purchase and sale, tokens are burned, and HOGE holders receive a share of the transaction as a reward. Don’t miss your opportunity to try and buy it on Guardarian.',
    info: {
      release: 2021,
      ticker: coin.tickerUpper,
      creator: 'Anthony',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name} (${coin.tickerUpper})?`,
        text: 'Hoge Finance (HOGE) is a deflationary cryptocurrency. Every time a transaction occurs with HOGE, 2% of the transaction is allocated and burned from the total supply.',
      },
      {
        title: `Why to buy ${coin.name} (${coin.tickerUpper})?`,
        text: 'This increases the rarity of each HOGE coin in circulation. This means that every time HOGE is used, the value of the remaining HOGE tokens in circulation increases due to the simultaneous decrease in supply (deflation), as well as the distribution of HOGE to everyone who uses the token.',
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
    youtube: 'https://www.youtube.com/embed/a7cdqo9KXVY',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
