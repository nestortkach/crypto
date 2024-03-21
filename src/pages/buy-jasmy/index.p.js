import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-jasmy',
    title: 'Buy JASMY (JASMY) | Buy Jasmy with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Jasmy. Discover the best EUR to JASMY and USD to JASMY exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Jasmy (JASMY)',
    text: `JASMY is a cryptocurrency project of a Tokyo-based Internet of Things (IoT) provider Jasmy Incorporated. As a system, the Internet of Things includes mechanical and digital elements endowed with an identifier and the ability to transmit data. The IoT company Jasmy specializes in buying/selling data, connecting service providers and data users through the Jasmy system. Buy JASMY instantly with Guardarian or keep reading to know more!`,
    info: {
      release: 2016,
      ticker: 'JASMY',
      creator: 'HARA, Jasmy CFO',
    },
    theme: 'jasmy',
    currency: 'jasmy',
  },
  about: {
    articles: [
      {
        title: 'What is Jasmy (JASMY)?',
        text: (
          <>
            <p>
              JasmyCoin (JASMY) is a utility token that keeps the network running, it’s deployed on the Ethereum
              blockchain and operates as an ERC-20 token.
            </p>
            <br />
            <p>
              JasmyCoin is the only currency of the Jasmy network, and the main use of the token is to pay for personal
              data from IoT devices. Customers can use JASMY purchasing products on the platform, as well as to protect
              information. Due to JasmyCoin, users have access to any data from the storage.
            </p>
          </>
        ),
      },
      {
        title: 'Why buy Jasmy (JASMY)?',
        text: (
          <>
            <p>
              JasmyCoin is a Japanese cryptocurrency that fully complies with the requirements of Japanese law, which
              strictly regulates transactions with cryptocurrencies and is subject to any financial audit.
            </p>
            <br />
            <p>
              And it is the first Japanese project token to be traded on Coinbase and Binance. Throughout its existence
              it has maintained high liquidity and remained a trustworthy choice for many investors.
            </p>
          </>
        ),
      },
    ],
    theme: 'jasmy',
  },
  exchange: {
    currency: 'JASMY',
    network: 'ETH',
    name: 'JASMY',
    usdImageSrc: '/jasmy/jasmy-usd.svg',
    eurImageSrc: '/jasmy/jasmy-eur.svg',
    usdText: `The current 1 Dollar to JASMY exchange rate is JASMY. Get JASMY fast and without registration. Choose one of payment methods, that suits you most, whether its credit or debit card or bank transfer and get JASMY.`,
    eurText: `The current 1 Euro to JASMY exchange rate is JASMY. Get JASMY fast and without registration. Choose one of payment methods that suits you most, whether its credit or debit card or bank transfer and get JASMY.`,
  },
  howToBuy: {
    name: 'Jasmy',
    ticker: 'JASMY',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
