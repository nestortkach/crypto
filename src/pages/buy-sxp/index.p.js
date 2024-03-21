import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-sxp',
    title: 'Buy Solar (SXP) | Buy SXP with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing SXP. Discover the best EUR to SXP and USD to SXP exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Solar (SXP) ',
    text: `Solar is a decentralised blockchain using a Delegated Proof of Stake consensus model secured by 53 elected block producers. SXP is Solar’s native coin used for voting for block producers, transferring value and using various services across the Solar ecosystem. Buy SXP instantly with Guardarian or keep reading to know more about it.`,
    info: {
      release: 2022,
      ticker: 'SXP',
      creator: 'Solar Foundation',
    },
    theme: 'sxp',
    currency: 'sxp',
  },
  about: {
    articles: [
      {
        title: 'What is Solar (SXP)?',
        text: (
          <>
            <p>
              The Solar blockchain is fast, with transactions taking 8 seconds to process. It is extremely secure,
              sustainable, and energy efficient. SXP holders can vote for Solar block producers using the Solar Desktop
              Wallet. Voting is very simple and voters can choose to vote for one or more block producers who can then
              reward their voters with a percentage of block rewards. Unlike other DPoS projects, voting does not lock
              funds, votes can be changed at will and SXP can be added or removed from a voters wallet at any time.
            </p>
          </>
        ),
      },
      {
        title: 'Why buy Solar (SXP)?',
        text: `The Solar mainnet launched in 2022. Since then the project has seen steady and continuous development. According to official announcements, Solar will be launching its own debit card in Q2 2023. The release of Core v 5.0 is eagerly anticipated and aims to bring increased functionality to the Solar blockchain, including the ability to create fungible and non-fungible tokens.`,
      },
    ],
    theme: 'sxp',
  },
  exchange: {
    currency: 'SXP',
    network: 'SXP',
    name: 'SXP',
    usdImageSrc: '/sxp/sxp-usd.svg',
    eurImageSrc: '/sxp/sxp-eur.svg',
    usdText: `The current 1 Dollar to SXP exchange rate is SXP. Get SXP fast and without registration. Choose one of payment methods, that suits you most, either its credit or debit card or bank transfer and get SXP.`,
    eurText: `The current 1 Euro to SXP exchange rate is SXP. Get SXP fast and without registration. Choose one of payment methods that suits you most, either its credit or debit card or bank transfer and get SXP.`,
  },
  howToBuy: {
    name: 'Solar',
    ticker: 'SXP',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
