import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-awc',
    title: 'Buy Atomic Wallet Coin (AWC) | Buy AWC with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing AWC. Get the best EUR to AWC & USD to AWC exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy AWC (Atomic Wallet Coin)',
    text: 'AWC is the token issued by the cryptocurrency wallet AtomicWallet.io. Atomic Wallet Coin is the world’s first non-custodial decentralized wallet which has implemented the cross chain Atomic Swaps feature. AWC token holders receive benefits like staking, discounts on exchange services, dedicated support and more.',
    info: {
      release: 2021,
      ticker: 'AWC',
      creator: 'Konstantin Gladych',
    },
    theme: 'awc',
    currency: 'awc',
  },
  about: {
    articles: [
      {
        title: 'What is AWC?',
        text: 'AWC is, in its own terms, a non-custodial decentralized wallet which is meant to facilitate the transactions of crypto currencies and tokens with ease. The problem with the crypto market is that there are a ton of different wallets but very few actually support a vast amount of the crypto coins out there. This is where AWC shines, as they allow for the managing, exchanging and buying cryptocurrencies right from the get go.',
      },
      {
        title: 'Why to Buy AWC?',
        text: 'This wallet allows you to exchange many tokens or coins in an instant. If you’re a fan of the concept and the project overall then this coin is definitely for you. On top of that it will make your life a lot easier by not having to use multiple wallets for multiple coin transactions.',
      },
    ],
    theme: 'awc',
  },
  exchange: {
    currency: 'awc',
    network: 'ETH',
    name: 'AWC',
    usdImageSrc: '/awc/usd-awc.png',
    eurImageSrc: '/awc/eur-awc.png',
    usdText:
      'The current 1 Dollar to AWC exchange rate is AWC. Get AWC fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get AWC.',
    eurText:
      'The current 1 Euro to AWC exchange rate is AWC. Get AWCfast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get AWC',
  },
  howToBuy: {
    name: 'AWC',
    ticker: 'Atomic Wallet Coin',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
