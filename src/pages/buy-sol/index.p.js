import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-sol',
    title: 'Buy Solana (SOL) | Buy SOL Coin with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing SOL. Discover the best EUR to SOL and USD to SOL exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Solana (SOL)',
    text: "Solana is the world's highest-performing blockchain. Testing performed on the Solana test network showed that the network of 200 physically separate nodes maintains a sustained throughput of more than 50,000 transactions per second on GPUs. Guardarian allows you to become part of this blockchain by buying their tokens in a fast and secure way.",
    info: {
      release: 2020,
      ticker: 'SOL',
      creator: 'Anatoly Yakovenko',
    },
    theme: 'solana',
    currency: 'sol',
  },
  about: {
    articles: [
      {
        title: 'What is Solana (SOL)?',
        text: 'Solana is an open-source blockchain project that aims to democratize financial systems, becoming an option for all those decentralized applications that are rapidly growing and frequently used.',
      },
      {
        title: 'Why to buy Solana (SOL)?',
        text: 'This project solves two great problems of the cryptocurrency world: scalability and speed, which prevent mass use of cryptocurrencies. As long as transactions with crypto currencies are not fast, they cannot be considered an effective means of paying for everyday purchases. While Solana is solving this problem.',
      },
    ],
    theme: 'solana',
  },
  exchange: {
    currency: 'sol',
    network: 'BSC',
    name: 'Solana',
    usdImageSrc: '/sol/usd-sol.png',
    eurImageSrc: '/sol/eur-sol.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Solana',
    ticker: 'SOL',
    youtube: 'https://www.youtube.com/embed/IeL1wdpUIC8',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
