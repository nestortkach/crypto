import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-kdoe',
    title: 'Buy Kudoe (KDOE) | Buy Kudoe with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Kudoe. Discover the best EUR to KDOE and USD to KDOE exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Kudoe (KDOE)',
    text: `Kudoe is a blockchain-based project that aims to build a self-sustaining ecosystem powered by the native KDOE token and the Dogs of Elon NFT collection. Its mission is to empower the blockchain community through web3 technologies, decentralized governance, and innovative economic models. Buy KDOE instantly with Guardarian or keep reading to know more!`,
    info: {
      release: 2023,
      ticker: 'KDOE',
      creator: 'Kudoe',
    },
    theme: 'kdoe',
    currency: 'kdoe',
  },
  about: {
    articles: [
      {
        title: 'What is Kudoe (KDOE)?',
        text: (
          <>
            <p>
              KDOE token is an ERC-20 utility token built on the Ethereum blockchain and is an integral component of the
              Kudoe ecosystem. With a total token supply of 1,000,000,000, KDOE serves as the primary currency for
              transactions within the gaming, metaverse and decentralized applications, as well as the underlying
              currency for our governance protocol (DAO).
            </p>
          </>
        ),
      },
      {
        title: 'Why to buy Kudoe (KDOE)?',
        text: `Kudoe is working towards developing a thriving ecosystem through the development of entertaining and lively games and tools that incorporate KDOE Token as the central asset. We hold that blockchain gaming is tedious, and we strive to address this issue with the introduction of KDOE.`,
      },
    ],
    theme: 'kdoe',
  },
  exchange: {
    currency: 'kdoe',
    name: 'KDOE',
    usdImageSrc: '/kdoe/kdoe-usd.svg',
    eurImageSrc: '/kdoe/kdoe-eur.svg',
    usdText: `The current 1 Dollar to KDOE exchange rate is KDOE. Get KDOE fast and without registration. Choose one of payment methods that suits you most, whether its credit or debit card or bank transfer and get KDOE.
    
    `,

    eurText: `The current 1 Euro to KDOE exchange rate is KDOE. Get KDOE fast and without registration. Choose one of payment methods that suits you most, whether its credit or debit card or bank transfer and get KDOE.`,
  },
  howToBuy: {
    name: 'Kudoe',
    ticker: 'KDOE',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
