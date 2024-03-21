import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-farm',
    title: 'Buy Harvest Finance (FARM) | Buy FARM with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing the FARM coin. Get the best EUR & USD to FARM exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Harvest Finance (FARM)',
    text: 'When DeFi farmers deposit tokens, Harvest Protocol automatically maximizes yields using the latest farming techniques. FARM is a token for Harvest. When Harvest generates revenue, 70% of that revenue is used to increase the value of the revenue. The remaining 30% is converted into FARM tokens, which are used to reward farmers for placing their FARM token in the FARM pool.',
    info: {
      release: 2020,
      ticker: 'FARM',
      creator: 'Anonymous',
    },
    theme: 'harvestFinance',
    currency: 'farm',
  },
  about: {
    articles: [
      {
        title: 'What is Harvest Finance (FARM)?',
        text: "FARM is Harvest's management token. Those who own FARM tokens have a vote to manage the project and can give their opinion on future project choices. To receive FARM tokens, you must become a liquidity provider and deposit tokens or pool tokens. By the way, Guardian is the most easy method to buy some FARM coins.",
      },
      {
        title: 'Why to buy Harvest Finance (FARM)?',
        text: 'In fact, Harvest Finance will study and list the latest DeFi protocols and list the ones that offer the most profit when optimized. So, with Harvest.finance, users are going to have access to the latest protocols running on DeFi.',
      },
    ],
    theme: 'harvestFinance',
  },
  exchange: {
    currency: 'farm',
    name: 'Harvest Finance',
    usdImageSrc: '/farm/usd-farm.png',
    eurImageSrc: '/farm/eur-farm.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Harvest Finance',
    ticker: 'FARM',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
