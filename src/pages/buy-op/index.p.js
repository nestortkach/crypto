import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-op',
    title: 'Buy Optimism (OP) | Buy Optimism with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Optimism. Discover the best EUR to OP and USD to OP exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Optimism (OP) ',
    text: `Optimism is one of the biggest Ethereum scaling solutions. It is a Layer 2 blockchain addressing the issues of scalability and high transaction fees on Ethereum by using Optimistic Rollups to offer efficient yet secure transactions. Optimism’s native token, OP, is used for governance and paying transaction fees. Buy OP instantly with Guardarian or keep reading to know more.`,
    info: {
      release: 2021,
      ticker: 'OP',
      creator: 'Optimism Foundation',
    },
    theme: 'op',
    currency: 'op',
  },
  about: {
    articles: [
      {
        title: 'What is Optimism (OP)?',
        text: (
          <>
            <p>
              To achieve scalability, Optimism uses Optimistic Rollups - a way of processing transactions off-chain in
              what is known as the Optimistic Virtual Machine (OVM). Transactions are then bundled and verified on the
              Ethereum mainnet using its security features. This approach ensures fast, secure transactions with
              significantly lowered transaction costs.
            </p>
            <br />
            <p>
              Developers can seamlessly deploy dApps and smart contracts on the Optimism network, which explains its
              popularity within the Ethereum ecosystem. Users can interact with Optimism dApps using their Ethereum
              addresses and easily transfer their assets between the two blockchains.
            </p>
            <br />
            <p>
              In 2022, Optimism airdropped OP, its native token. It is used for governance and paying transaction fees
              on the Optimism network.
            </p>
          </>
        ),
      },
      {
        title: 'Why buy Optimism (OP)?',
        text: (
          <>
            <p>
              Optimism is currently one of the biggest Layer 2 blockchains on the market, alongside Polygon and
              Arbitrum. As of May 2023, it is the 6th biggest blockchain in terms of its Total Value Locked (TVL), which
              shows the popularity of the project and the high activity levels on the network. Though it is hard to
              predict the future performance of OP, many investors believe in long-term growth for the token due to
              Optimism’s practical and sustainable design and the predicted growth of the DeFi sector.
            </p>
            <br />
            <p>
              Optimism has a solid roadmap that includes the introduction of sharded rollups among other technical
              solutions that would make it even more scalable and efficient. There is also a Superchain project - a plan
              to create a network of interconnected blockchains to achieve horizontal scalability and avoid isolated
              ecosystems.
            </p>
            <br />
            <p>
              Though it is hard to predict the future performance of OP, many investors believe in long-term growth for
              the token due to Optimism’s practical and sustainable design and the predicted growth of the DeFi sector.
            </p>
          </>
        ),
      },
    ],
    theme: 'op',
  },
  exchange: {
    currency: 'OP',
    name: 'OP',
    usdImageSrc: '/op/op-usd.svg',
    eurImageSrc: '/op/op-eur.svg',
    usdText: `The current 1 Dollar to OP exchange rate is OP. Get OP fast and without registration. Choose one of payment methods, that suits you most, either its credit or debit card or bank transfer and get OP.`,
    eurText: `The current 1 Euro to OP exchange rate is OP. Get OP fast and without registration. Choose one of payment methods that suits you most, either its credit or debit card or bank transfer and get OP.`,
  },
  howToBuy: {
    name: 'Optimism',
    ticker: 'OP',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
