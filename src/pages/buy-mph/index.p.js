import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-mph',
    title: 'Buy 88mph (MPH) | Buy MPH with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing the 88mph coin. Get the best EUR & USD to MPH exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy MPH (88mph)',
    text: '88mph is a new token which works based on the 99mph system. It works based on a non-custodial protocol which facilitates the trading and earning of the cryptocurrency on the open market that goes by the same name. Since it is Decentralized Finance (DeFi) it is fully compatible with most crypto wallets and crypto exchanges. With a total supply of 409,831 MPH coins, you can start investing in it at this very moment.',
    info: {
      release: 2020,
      ticker: 'MPH',
      creator: 'Anonymous',
    },
    theme: 'mph',
    currency: 'mph',
  },
  about: {
    articles: [
      {
        title: 'What is MPH?',
        text: 'MPH represents a brand new ERC20 token that has already taken the world by storm by offering fixed rates on USDC, DAI, BTC, ETH and basically most other options on the market. Since it is a universal token, you can also use it later on to purchase items on different platforms as well.',
      },
      {
        title: 'Why to Buy MPH?',
        text: 'The main reason as to why you should be looking into MPH as a worthy investment is because according to the price live data, it has actually been on the rise a lot as of late and it is said to be slowly yet surely increasing exponentially for the next couple of years to the point where it may even become one of the top choices on the market.',
      },
    ],
    theme: 'mph',
  },
  exchange: {
    currency: 'mph',
    network: 'ETH',
    name: 'MPH',
    usdImageSrc: '/mph/usd-mph.png',
    eurImageSrc: '/mph/eur-mph.png',
    usdText:
      'The current 1 Dollar to MPH exchange rate is MPH. Get MPH fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get MPH.',
    eurText:
      'The current 1 Euro to MPH exchange rate is MPH. Get MPH fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get MPH.',
  },
  howToBuy: {
    name: 'MPH',
    ticker: '88mph Token',
    youtube: 'https://www.youtube.com/embed/pu9AdqA7MXU',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
