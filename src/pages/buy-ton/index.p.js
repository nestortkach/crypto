import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-ton',
    title: 'Buy Toncoin (TON) | Buy Toncoin with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Toncoin. Discover the best EUR to TON and USD to TON exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Toncoin (TON) ',
    text: `TON is a decentralized blockchain platform created by the team behind Telegram. It offers fast transactions, smart contract capabilities, and a thriving dApp ecosystem. Toncoin was designed to be highly scalable, low-cost, and capable of handling millions of transactions per second. Buy Toncoin instantly with Guardarian or keep reading to know more!`,
    info: {
      release: 2018,
      ticker: 'TON',
      // creator: 'Telegram',
    },
    theme: 'ton',
    currency: 'ton',
  },
  about: {
    articles: [
      {
        title: 'What is Toncoin (TON)?',
        text: (
          <>
            <p>
            Telegram Open Network, or TON for short, was created by Nikolai and Pavel Durov in 2018 in order to attract Telegram users to blockchain. However, Telegram had to end their involvement in the project due to legal issues. 
            </p>
            <br/>
            <p>
            In May 2020, TON, now known as “The Open Network” was relaunched as an open-source project run by its community. It has since then evolved into a thriving ecosystem of blockchain applications, offering a wide range of crypto-related services.
            </p>
            <br/>
            <p>
            Toncoin, TON’s native currency, is used for running transactions on the network, accessing TON-based applications, acquiring domain names and much more. It also serves as a governance that holders use to vote on the direction of the project.
            </p>
          </>
        ),
      },
      {
        title: 'Why buy Toncoin (TON)?',
        text: (
            <>
                <p>TON blockchain is built to rival the likes of Solana in terms of its performance. It offers some of the best transaction speeds and scalability on the market, which makes Toncoin transactions very fast while keeping the fees low. 
                </p>
                <br/>
                <p>TON also boasts a quickly evolving ecosystem, offering crypto storage, trading, staking and even gaming. With its active and enthusiastic community, many expect TON to keep growing in the years to come.</p>
            </>
        ),
      },
    ],
    theme: 'ton',
  },
  exchange: {
    currency: 'TON',
    network: 'TON',
    name: 'TON',
    usdImageSrc: '/ton/ton-usd.svg',
    eurImageSrc: '/ton/ton-eur.svg',
    whether: `whether`,
    usdText: `The current 1 Dollar to TON exchange rate is TON. Get TON fast and without registration. Choose one of payment methods, that suits you most, whether its credit or debit card or bank transfer and get TON.`,
    eurText: `The current 1 Euro to TON exchange rate is TON. Get TON fast and without registration. Choose one of payment methods that suits you most, whether its credit or debit card or bank transfer and get TON.`,
  },
  howToBuy: {
    name: 'Toncoin',
    ticker: 'TON',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
