import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-arb',
    title: 'Buy Arbitrum (ARB) | Buy Arbitrum with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Arbitrum. Discover the best EUR to ARB and USD to ARB exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Arbitrum (ARB)',
    text: `Arbitrum (ARB) is a popular scaling solution for Ethereum blockchain. Its goal is to increase transaction throughput and minimize gas fees, making it an attractive solution for DeFi platforms and dApps. Keep reading to learn more about how it works and its potential benefits, or buy ARB right away on Guardarian & take advantage of its potential.`,
    info: {
      release: 2021,
      ticker: 'ARB',
      creator: 'Offchain Labs',
    },
    theme: 'arb',
    currency: 'arb',
  },
  about: {
    articles: [
      {
        title: 'What is Arbitrum (ARB)?',
        text: (
          <>
            <p>
              Arbitrum was created by Offchain Labs - a New York-based company founded by three former university
              researchers with backgrounds in computer science, blockchain and cryptography. In 2021, they secured $120
              million of funding and received a $1.2 billion evaluation.
            </p>
            <br />
            <p>
              Arbitrum is what you call an Optimistic Rollup protocol, which is a Layer 2 approach to increasing
              blockchain scalability. Arbitrum protocol offers off-chain transaction verification and processing, which
              takes the burden off the Ethereum mainnet. Optimistic Rollups also ensure better security than other
              scaling solutions by verifying transactions on the Ethereum network while storing them off-chain.
            </p>
            <br />
            <p>
              ARB, Arbitrum’s native token, was airdropped in March 2023 when 12.75% of its total supply were distributed
              among Arbitrum users. ARB will be used by the holders to vote on protocol-related decisions, which is part
              of the long-running plan of turning Arbitrum into a decentralized autonomous organization (DAO)
            </p>
            <br />
            <p>
              Arbitrum's design allows for fast and cheap funds withdrawal, allowing users to move their assets between
              Ethereum mainnet & Arbitrum sidechain fast and easy. By enabling faster and cheaper transactions, Arbitrum
              has the potential to greatly improve the usability and accessibility of decentralized applications and
              DeFi platforms built on Ethereum.
            </p>
          </>
        ),
      },
      {
        title: 'Why to buy Arbitrum (ARB)?',
        text: (
          <>
            <p>Many see Arbitrum as an interesting investment opportunity, and here is why.</p>
            <br />
            <p>
              Arbitrum’s strength lies in the increased speed and reduced cost of transactions it offers in comparison
              to the Ethereum mainnet, which can potentially drive up its usage by DeFi platforms and dApps.
            </p>
            <br />
            <p>
              Optimistic Rollups enable scalability without compromising transaction security, which is another good
              design decision on Arbitrum’s behalf.
            </p>
            <br />
            <p>
              Though there is a range of scaling solutions on the market, such as Polygon or Optimism, Arbitrum has
              shown significant growth in 2023. It currently boasts the most total value locked than any of its
              competitors, by far, showcasing the potential the users see in this protocol.
            </p>
          </>
        ),
      },
    ],
    theme: 'arb',
  },
  exchange: {
    currency: 'ARB',
    network: 'ARBITRUM',
    name: 'ARB',
    usdImageSrc: '/arb/arb-usd.svg',
    eurImageSrc: '/arb/arb-eur.svg',
    usdText: `The current 1 Dollar to ARB exchange rate is ARB. Get ARB fast and without registration. Choose one of payment methods, that suits you most, either its credit or debit card or bank transfer and get ARB.`,
    eurText: `The current 1 Euro to ARB exchange rate is ARB. Get ARB fast and without registration. Choose one of payment methods that suits you most, either its credit or debit card or bank transfer and get ARB.`,
  },
  howToBuy: {
    name: 'Arbitrum',
    ticker: 'ARB',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
