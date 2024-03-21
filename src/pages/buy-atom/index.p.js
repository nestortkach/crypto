import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-atom',
    title: 'Buy COSMOS (ATOM) | Buy COSMOS with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing COSMOS. Discover the best EUR to ATOM and USD to ATOM exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy COSMOS (ATOM)',
    text: `Cosmos is building a network of interconnected blockchains that allows apps and services to interact with each other freely and efficiently. 
    Cosmos Hub is the central blockchain in this operation. ATOM is its native currency & is used to run transactions & distribute rewards on-chain.
     Guardarian allows you to buy & sell ATOM in an instant - keep reading to know more!`,
    info: {
      release: 2016,
      ticker: 'ATOM',
      creator: 'Jae Kwon',
    },
    theme: 'atom',
    currency: 'atom',
  },
  about: {
    articles: [
      {
        title: 'What is Cosmos (ATOM)?',
        text: (
          <>
            Called “The Internet of Blockchains”, Cosmos facilitates transactions & data flow between multiple crypto
            networks. Newly created blockchains are called “zones” & these are tethered to the Cosmos Hub. The Cosmos
            Hub is itself a proof-of-stake blockchain that is powered by ATOM - its native currency.
            <h4>The benefits of using this token:</h4>
            <ul>
              <li>Discounted price for white label setup fee at WhiteLotto.com for a lottery or casino project</li>
              <li>Generous casino and sportsbook bonuses (deposit bonus, free spin bonuses, cashback bonuses).</li>
              <li>Instant deposits and withdrawals without additional transfer costs.</li>
              <li>Up to 80% discounts in e-shops when buying digital and physical goods with GGTKN</li>
              <li>Low and limited token supply</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Why to buy Cosmos (ATOM)?',
        text: 'Fragmentation is a major concern in crypto industry - there a hundreds of blockchains in existence, however very few of them can actually communicate with each other. Cosmos gets its unique selling point from providing an infrastructure for blockchains to communicate with each other. It is even sometimes described as “Blockchain 3.0”. Its potential to bring scalability and modularity into blockchain makes it a valuable asset in the eyes of many investors, envisioning a growing adoption and popularity for Cosmos.',
      },
    ],
    theme: 'atom',
  },
  exchange: {
    currency: 'atom',
    network: 'atom',
    name: 'Atom',
    usdImageSrc: '/atom/atom-usd.svg',
    eurImageSrc: '/atom/atom-eur.svg',
    usdText: ``,
    eurText: ``,
  },
  howToBuy: {
    name: 'COSMOS',
    ticker: 'ATOM',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
