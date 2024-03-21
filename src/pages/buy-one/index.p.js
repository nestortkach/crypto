import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-one',
    title: 'Buy Harmony (ONE) | Buy ONE with Fiat, EUR & USD',
    description:
      'The Harmony network can support thousands of nodes across multiple shards, creating blocks in seconds for instant completion. Its partitioning mechanism reduces centralization while supporting share delegation. At Guardarian, we think this is a great reason to buy a token that could become an indispensable part of the cryptocurrency ecosystem in the near future.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Harmony (ONE)',
    text: 'The Harmony network can support thousands of nodes across multiple shards, creating blocks in seconds for instant completion. Its partitioning mechanism reduces centralization while supporting share delegation. At Guardarian, we think this is a great reason to buy a token that could become an indispensable part of the cryptocurrency ecosystem in the near future.',
    info: {
      release: 2018,
      ticker: 'ONE',
      creator: 'Unknown',
    },
    theme: 'one',
    currency: 'one',
  },
  about: {
    articles: [
      {
        title: 'What is ONE?',
        text: 'Harmony (ONE) is a public blockchain with a fragmentation infrastructure focused on the speed and security of decentralized applications.',
      },
      {
        title: 'Why to Buy ONE?',
        text: 'The most important aspect of this project is the use of fragmentation as a scaling technology. This technology has been proven to scale without sacrificing decentralization or security. This blockchain uses various security components to prevent attacks on the network. ',
      },
    ],
    theme: 'one',
  },
  exchange: {
    currency: 'one',
    name: 'ONE',
    usdImageSrc: '/one/usd-one.png',
    eurImageSrc: '/one/eur-one.png',
    usdText:
      'Current USD to ONE price is 0,004$ per token. Harmony is trying to bring the usability and features of blockchain to real-world economic use cases.',
    eurText:
      'Current EUR to ONE price is 0,003 EUR per token. With the wide crypto adoption, Harmony to EUR price may rise very fast.',
  },
  howToBuy: {
    name: 'ONE',
    ticker: 'ONE',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
