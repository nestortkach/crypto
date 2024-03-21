import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'ICX',
  tickerLower: 'icx',
  name: 'ICON',
  nameCamelCase: 'icon',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-icx',
    title: `Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} with Fiat, EUR & USD | Guardarian`,
    description: `Guardarian offers the most user-friendly environment for purchasing Icon. Discover the best EUR to ${coin.tickerUpper} and USD to ${coin.tickerUpper} exchange rate at Guardarian.com`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'Buy ICX quickly and secure with Guardarian. We at Guardarian have developed a fully automated system that allows each user to purchase ICX within seconds without having to face a long registration process. Still not sure to buy? Find out what ICX is and how it works below. If you end up being interested in this crypto asset, we will tell you how to buy ICX on Guardarian. ',
    info: {
      release: 2018,
      ticker: coin.tickerUpper,
      creator: 'Markus Jun',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name}?`,
        text: 'The ICON Cryptocurrency (ICX) is a cryptocurrency network launched in 2017 by a company based in South Korea. ICX is the corresponding cryptocurrency token or coin. ICON is a complete blockchain network, the main purpose of which is to facilitate the connection and interaction of various blockchain software programs through the ICON network ICON aims to serve as a kind of blockchain hub or connection point. One of the challenges to the widespread adoption of blockchain technology is that each blockchain community uses its network. The ability to connect the different separate networks is, therefore, a major step forward in blockchain technology, which is increasingly used as a more secure mechanism for the transfer and/or storage of all types of data.',
      },
      {
        title: `Why to buy ${coin.name}?`,
        text: 'Many things can go right for a platform like ICON. It has the potential to be a fully digital dimension and share the future. It can become special and each ICX symbol can cost hundreds or thousands of dollars. Overall, we rate ICX as a buy and see that the fund offers a good combination of returns and upside potential. With the previous boom and rise in ICX, the coin has amazing potential’s which make it a good coin to trade.',
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
