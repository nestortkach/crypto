import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-usdt',
    title: 'Buy USD Coin (USDC) | Buy USDC with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing USD Coin. Discover the best EUR to USDC and USD to USDC exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy USD Coin (USDC)',
    text: 'USD Coin is among the most popular cryptocurrencies in the world right now. Fully backed by the US dollar, its value stays stable by design, which makes it a stablecoin. Because of this, USDC is a great way to protect your assets from the crypto market volatility. Guardarian offers the easiest way to purchase USDC - read on to find out how!\n',
    info: {
      release: 2018,
      ticker: 'USDC',
      creator: 'Circle',
    },
    theme: 'usdc',
    currency: 'usdc',
  },
  about: {
    articles: [
      {
        title: 'What is USD Coin (USDC)?',
        text: 'USD Coin was developed by a global financial firm Circle to become a “digital dollar”. The main goal behind it was to create a fast, safe and efficient way to transfer money anywhere in the world. While it first launched on Ethereum’s ERC-20 blockchain, it has since expanded to over 8 other blockchains, like Solana, Tron and Algorand. USDC has it’s value attached to the US dollar, so you can always exchange it for cash in a 1:1 ratio.',
      },
      {
        title: 'Why to buy USD Coin (USDC)?',
        text: 'Because of its stable nature, USDC can be used to hedge your funds against the crypto market volatility. USD Coin can also be used to send money across borders without having to use a bank account. And because it operates on multiple blockchains, USDC can easily be transferred between these and used to buy many other currencies or NFTs.',
      },
    ],
    theme: 'usdc',
  },
  exchange: {
    currency: 'usdc',
    name: 'USD Coin',
    network: 'ETH',
    usdImageSrc: '/usdc/usdc-exchange-usa.png',
    eurImageSrc: '/usdc/usdc-exchange-europ.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'USD Coin',
    ticker: 'USDC',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
