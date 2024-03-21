import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-ach',
    title: 'Buy Alchemy Pay (ACH) | Buy ACH with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing the Alchemy Pay coin. Get the best EUR & USD to ACH exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy ACH (Alchemy Pay)',
    text: 'Alchemy Pay is a new Ethereum token which works directly through the platform that shares its name. This platform allows the users to make payments through a wide variety of fiat and currencies. Every fee on the platform is paid with the ACH tokens and by using these tokens you also end up earning ACH rewards as well.',
    info: {
      release: 2018,
      ticker: 'ACH',
      creator: 'John Tan',
    },
    theme: 'ach',
    currency: 'ach',
  },
  about: {
    articles: [
      {
        title: 'What is ACH?',
        text: 'Alchemy Pay is an Ethereum token that you can use to purchase different assets with. Your odds of making a profit vastly increase the more ACH tokens you use, but you can also make them by mining them. You can mine them using a specialized mining software such as XMR Stak',
      },
      {
        title: 'Why to Buy ACH?',
        text: 'There is currently a supply of 844,255 ACH circulating coins out there, and a total of over 5,000,000 of them on the open market. On top of that, the ACH token is very easy to purchase as it is available on most trading platforms. It also can be traded against fiat currenciesm cryptocurrencies and even stablecoins, so you will not be at a loss as far as options go here.',
      },
    ],
    theme: 'ach',
  },
  exchange: {
    currency: 'ach',
    network: 'ETH',
    name: 'ACH',
    usdImageSrc: '/ach/usd-ach.png',
    eurImageSrc: '/ach/eur-ach.png',
    usdText:
      'The current 1 Dollar to ACH exchange rate is ACH. Get ACH fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get ACH.',
    eurText:
      'The current 1 Euro to ACH exchange rate is ACH. Get ACH fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get ACH.',
  },
  howToBuy: {
    name: 'ACH',
    ticker: 'ACH',
    youtube: 'https://www.youtube.com/embed/ZLOdsDMbI00',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
