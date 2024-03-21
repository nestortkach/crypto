import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-iota',
    title: 'Buy Iota (IOTA) | Buy Iota with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Iota. Discover the best EUR to IOTA and USD to IOTA exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Iota (IOTA) ',
    text: `Iota is a ledger that is meant to power transactions between Internet of Things (IoT) devices. And though it functions like one, it is actually not a blockchain. Instead, it uses Tangle - a decentralized network of nodes to confirm transactions. IOTA (or MIOTA) is the cryptocurrency this network uses to facilitate transactions and reward network participants. Buy it instantly with Guardarian or read on to know more!`,
    info: {
      release: 2015,
      ticker: 'MIOTA',
      creator: 'Sergey Ivancheglo',
    },
    theme: 'iota',
    currency: 'iota',
  },
  about: {
    articles: [
      {
        title: 'What is Iota (IOTA)?',
        text: (
          <>
            <p>
              Iota is built on a distributed ledger tech, though it operates somewhat differently to other blockchains.
              It’s network, Tangle, uses a different consensus algorithm - a Direct Acyclic Grapg (DAG). This allows the
              network to run without miners, validators, blocks or any transaction fees.{' '}
            </p>
            <p>
              As a result, Iota network is highly scalable and has lower computing costs than other blockchains. This is
              important for operating IoT devices within an IoT economy - reducing the high transaction costs, improving
              energy efficiency and as such allowing for more use cases.
            </p>
          </>
        ),
      },
      {
        title: 'Why to buy Iota (IOTA)?',
        text: `IoT is a growing economy sector and Iota provides a unique a set of advantages within it - lower cost, higher scalability, better energy efficiency among others. Iota has established some partnerships with high-profile organizations such as Volkswagen and the city of Taipei. And being different from the rest of the blockchain tech, IOTA attracts many investors who believe in a future full of possibilities for it.`,
      },
    ],
    theme: 'iota',
  },
  exchange: {
    currency: 'IOTA',
    network: 'IOTA',
    name: 'IOTA',
    usdImageSrc: '/iota/iota-usd.svg',
    eurImageSrc: '/iota/iota-eur.svg',
    usdText: `The current 1 Dollar to IOTA exchange rate is IOTA. Get IOTA fast and without registration. Choose one of payment methods, that suits you most, either its credit or debit card or bank transfer and get IOTA.`,
    eurText: `The current 1 Euro to IOTA exchange rate is IOTA. Get IOTA fast and without registration. Choose one of payment methods that suits you most, either its credit or debit card or bank transfer and get IOTA.`,
  },
  howToBuy: {
    name: 'Iota',
    ticker: 'IOTA',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
