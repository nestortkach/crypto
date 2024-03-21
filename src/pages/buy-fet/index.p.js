import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-fet',
    title: 'Buy Fet (FET) | Buy Fet with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Fet. Discover the best EUR to FET and USD to FET exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Fetch.ai token (FET) ',
    text: `Fetch.ai is a platform aiming to create a decentralized economy where agents can perform tasks autonomously and efficiently, powered by AI and blockchain technology. Its native token, FET, is used for staking, governance, and access to services on the platform. Buy FET instantly with Guardarian or keep reading to know more.`,
    info: {
      release: 2019,
      ticker: 'FET',
      creator: 'Humayun Sheikh',
    },
    theme: 'fet',
    currency: 'fet',
  },
  about: {
    articles: [
      {
        title: 'What is Fetch.ai (FET)?',
        text: (
          <>
            <p>
              Fetch.ai uses multi-agent systems (MAS) and blockchain technology to enable the creation of autonomous
              agents that can interact with each other and the external world. The platform is built on top of a DAG
              (Directed Acyclic Graph) ledger that allows for fast and secure transaction processing.
            </p>
            <br />
            <p>
              The autonomous agents are programmed with specific skills and objectives, and can communicate and trade
              with other agents on the platform. Fetch.ai platform is meant to improve sectors like smart cities, smart
              homes, supply chain and many others.
            </p>
          </>
        ),
      },
      {
        title: 'Why buy FET Token (FET)?',

        text: (
          <>
            <p>
              Fetch.ai is unique due to its combination of innovative technologies such as DAG, DLT, smart contracts,
              AI, and machine learning. The project can be applied in various sectors that help develop a digital
              economy that grows together with the network.
            </p>
            <br />
            <p>
              Fetch.ai's intrinsic value comes from its technology, use cases, and multi-purpose native token, FET,
              which is used to reward node operators and unlock network operations. Though the price of FET may differ
              due to volatility in the cryptocurrency market, its supporters believe in its growth potential as the
              Fetch.ai network continues to grow.
            </p>
          </>
        ),
      },
    ],
    theme: 'fet',
  },
  exchange: {
    currency: 'FET',
    network: 'FET',
    name: 'FET',
    usdImageSrc: '/fet/fet-usd.svg',
    eurImageSrc: '/fet/fet-eur.svg',
    usdText: `The current 1 Dollar to FET exchange rate is FET. Get FET fast and without registration. Choose one of payment methods that suits you most, whether it’s credit or debit card or bank transfer and get FET.`,
    eurText: `The current 1 Euro to FET exchange rate is FET. Get FET fast and without registration. Choose one of payment methods that suits you most, whether it’s credit or debit card or bank transfer and get FET.`,
  },
  howToBuy: {
    name: 'Fet',
    ticker: 'FET',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
