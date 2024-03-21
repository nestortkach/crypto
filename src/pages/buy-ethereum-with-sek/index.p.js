import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-eth',
    title: 'Buy Ethereum (ETH) with SEK - Guardarian',
    description:
      'Guardarian is the easiest way to buy & sell Ethereum. Exchange SEK to ETH and ETH to AUD without registration or any hidden fees.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Ethereum (ETH) with SEK',
    text: 'Starting with smart contracts and decentralized applications, Ethereum soon realized that they needed a cryptocurrency for their platform that could be trusted according to their protocols. This prompted the Ethereum Foundation, company that works on Ethereum but cannot independently change the protocols - to create Ethereum. Now you can easily buy ETH with Guardarian in a fast and secure way. Just click on the buy button!',
    info: {
      release: 2015,
      ticker: 'ETH',
      creator: 'Vitalik Buterin',
    },
    theme: 'ethereum',
    currency: 'ETH',
  },
  about: {
    articles: [
      {
        title: 'What is Ethereum (ETH)?',
        text: 'Ethereum is a user-driven system that uses thousands of independent computers around the world to monitor and verify transactions. This is achieved by each computer keeping records and relying solely on its own history to ensure the legitimacy of the transaction, without relying on any central authority.',
      },
      {
        title: 'Why to buy ethereum (ETH)?',
        text: 'In fact, Ethereum blockchain is not only used for commercial exchanges. Its usefulness for verifying electoral processes or for sending sensitive information has been noted. It is likely that we will see more developments in the near future. The increased security it offers is undoubtedly its best advantage.',
      },
    ],
    theme: 'ethereum',
  },
  exchange: {
    currency: 'eth',
    name: 'Ethereum',
    usdImageSrc: '/eth/usd-eth.png',
    eurImageSrc: '/eth/eur-eth.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Ethereum',
    ticker: 'ETH',
    youtube: 'https://www.youtube.com/embed/D9KYTtw4gRE',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
