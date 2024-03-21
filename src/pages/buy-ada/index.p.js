import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-ach',
    title: 'Buy Cardano | Buy ADA with Fiat, EUR & USD',
    description:
      "The Guardarian platform provides the best conditions in Cardano purchasing. We've worked out every aspect of your experience with our system so that buying an ADA token is the easiest way for you to interact with buying cryptocurrency.",
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Cardano (ADA)',
    text: 'Cardano is still growing at the moment, but some are calling it a top 10 coin. It works with peer-reviewed articles and professors from universities around the world to incorporate academic research into its design. Because it has individual layers, you solve problems that other cryptocurrencies have, and we may see smarter and more secure crypto in the future.',
    info: {
      release: 2021,
      ticker: 'ADA',
      creator: 'Unknown',
    },
    theme: 'ada',
    currency: 'ada',
  },
  about: {
    articles: [
      {
        title: 'What is Cardano (ADA)?',
        text: "Cardano is a smart contract platform similar to Ethereum, with an emphasis on security through a layered architecture. The so-called 'third-generation blockchain' is the first of its kind, built on a scientific philosophy and based on peer-reviewed academic research.",
      },
      {
        title: 'Why to Cardano (ADA)?',
        text: 'Cardano is still growing at the moment, but some are calling it a top 10 coin. It works with peer-reviewed articles and professors from universities around the world to incorporate academic research into its design. Because it has individual layers, you solve problems that other cryptocurrencies have, and we may see smarter and more secure crypto in the future.',
      },
    ],
    theme: 'ada',
  },
  exchange: {
    currency: 'ada',
    network: 'ADA',
    name: 'ADA',
    usdImageSrc: '/ada/usd-ada.png',
    eurImageSrc: '/ada/eur-ada.png',
    usdText:
      'Cardano is one of the most popular cryptocurrencies on the current scene, ranked among the first TOP-10 cryptocurrencies.',
    eurText:
      'Current 1 EUR to ADA  exchange rate is 0,35 ADA. Guardarian providing it’s users the concept of buying Cardano in EUR. ',
  },
  howToBuy: {
    name: 'Cardano',
    ticker: 'ADA',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
