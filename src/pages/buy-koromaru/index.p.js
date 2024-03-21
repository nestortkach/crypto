import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-koromaru',
    title: 'Buy Koromaru (KOROMARU) | Buy KOROMARU with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing the Koromaru coin. Get the best EUR & USD to KOROMARU exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy KOROMARU (Koromaru)',
    text: 'Despite the fact that it was only released recently, KOROMARU has already taken the world by storm by providing one of the best templates for Ethereum-based cryptocurrencies as of 2021. What makes it so special is the fact that it actually uses a bag of fiat-pegged stable coins which end up being re-established by the reserve cryptocurrency.',
    info: {
      release: 2021,
      ticker: 'KOROMARU',
      creator: 'Anonymous',
    },
    theme: 'koromaru',
    currency: 'koromaru',
  },
  about: {
    articles: [
      {
        title: 'What is KOROMARU?',
        text: 'KOROMARU is a decentralized financial billing network which is meant to reconstruct the conventional payment stack by taking full advantage of the blockchain system. As of 2021, more than two million users have used this network to facilitate their transactions, coming up to a total of $300 billion having been used through it',
      },
      {
        title: 'Why to Buy KOROMARU?',
        text: 'You will want to use KOROMARU because of its amazing growth spurs. Despite only having been around for a very short period of time, KOROMARU has already garnered a lot of attention from the community and have big expectations for it in the following years.',
      },
    ],
    theme: 'koromaru',
  },
  exchange: {
    currency: 'koromaru',
    network: 'ETH',
    name: 'KOROMARU',
    usdImageSrc: '/koromaru/usd-koromaru.png',
    eurImageSrc: '/koromaru/eur-koromaru.png',
    usdText:
      'The current 1 Dollar to KOROMARU exchange rate is KOROMARU. Get KOROMARU fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get KOROMARU.',
    eurText:
      'The current 1 Euro to KOROMARU exchange rate is KOROMARU. Get KOROMARU fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get KOROMARU',
  },
  howToBuy: {
    name: 'KOROMARU',
    ticker: 'Koromaru',
    youtube: 'https://www.youtube.com/embed/NUtafc48WZw',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
