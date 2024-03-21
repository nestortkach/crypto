import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'DAO',
  tickerLower: 'dao',
  name: 'DAO Maker',
  nameCamelCase: 'daoMaker',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-dao',
    title: `Buy ${coin.tickerUpper} MAKER (${coin.tickerUpper}) | Buy ${coin.tickerUpper} with Fiat, EUR & USD | Guardarian`,
    description: `Guardarian offers the most user-friendly environment for purchasing Dao Maker. Discover the best EUR to ${coin.tickerUpper} and USD to ${coin.tickerUpper} exchange rate at Guardarian.com`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'DAO is a service token used for rewards and management, premium access and more. It is widely used and has great benefits for DAO Maker users. By the way, you can always buy this token with Guardarian.',
    info: {
      release: 2014,
      ticker: coin.tickerUpper,
      creator: 'Giorgio Marciano',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name} (${coin.tickerUpper})?`,
        text: 'DAO Maker is a launch pad for projects (a launcher) that seeks funding from retail investors. Before this type of launcher, investors had to endure higher levels of uncertainty and risk. DAO Maker provides a lower-risk interaction framework for both parties - investors and startups - that facilitates global retailing in the venture capital space.',
      },
      {
        title: `Why to buy ${coin.name} (${coin.tickerUpper})?`,
        text: 'The DAO Maker platform works as an incubator for cryptocurrency startups and helps them get the funding they need to launch their project. With growth technologies and financing schemes, it makes it easier and safer for investors.',
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
