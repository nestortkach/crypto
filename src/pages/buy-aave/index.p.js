import React from 'react';

import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'AAVE',
  tickerLower: 'aave',
  name: 'Aave',
  nameCamelCase: 'aave',
};

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-aave',
    title: `Buy ${coin.name} (${coin.tickerUpper}) | Buy ${coin.tickerUpper} with Fiat, EUR & USD`,
    description: `Guardarian offers the most user-friendly environment for purchasing the ${coin.name} coin. Get the best EUR & USD to ${coin.tickerUpper} exchange rate at Guardarian.com'`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper})`,
    text: 'AAVE is one of the first DeFi protocols in crypto space. It was launched in late 2017 under the name LEND, which it still maintains in its token, having managed to raise $17 million during the ICO. The project began as P2P loans between users with different types of collateral, and then evolved into loans based on liquidity markets that calculate the price depending on the availability of assets in said markets.',
    info: {
      release: 2017,
      ticker: coin.tickerUpper,
      creator: 'Stani Kulechov',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name} (${coin.tickerUpper})?`,
        text: 'The word Aave comes from Finnish and means ghost. The ghost name illustrates the goal of this protocol to be transparent and open in the DeFi (decentralized finance) space. Aave is an Ethereum-based "decentralized finance" platform that started as ETHLend (LEND). Their main proposal is to allow users to lend, borrow, and benefit from fixed or variable interest rates in a decentralized space.',
      },
      {
        title: `Why to buy ${coin.name} (${coin.tickerUpper})?`,
        text: 'AAVE creates a market in which the interest rate is algorithmically determined by supply and demand with near-second accuracy, in which assets can be lent or borrowed. The most financial definition is money markets.\n',
      },
    ],
    theme: coin.nameCamelCase,
  },
  exchange: {
    currency: coin.tickerLower,
    network: 'BSC',
    name: coin.name,
    usdImageSrc: `/${coin.tickerLower}/usd-${coin.tickerLower}.png`,
    eurImageSrc: `/${coin.tickerLower}/eur-${coin.tickerLower}.png`,
  },
  howToBuy: {
    name: coin.name,
    ticker: coin.tickerUpper,
  },
};

export default function indexP() {
  return <CoinPage pageInfo={pageInfo} />;
}
