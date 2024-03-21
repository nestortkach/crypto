import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-shr',
    title: 'Buy ShareToken (SHR) | Buy SHR with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing SHR. Get the best EUR & USD to SHR exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy ShareToken (SHR)',
    text: 'The current sharing economy is incredibly fragmented and multifaceted, which can be overwhelming for consumers. Using ShareToken on the ShareRing platform solves this problem by offering a single, decentralized trading platform and digital currency that allows you to securely access and pay for services around the world. You can be part of it in a while with Guardarian!',
    info: {
      release: 2019,
      ticker: 'SHR',
      creator: 'Tim Bos',
    },
    theme: 'share',
    currency: 'shr',
  },
  about: {
    articles: [
      {
        title: 'What is ShareToken (SHR)?',
        text: "A ShareToken is a digital service token that is used to pay for sharing services across industries and geographies on the ShareRing platform, which includes the ShareRing app, the ShareRing store, and each user's ShareRing ID.",
      },
      {
        title: 'Why to buy ShareToken (SHR)?',
        text: 'ShareToken (SHR) is the proprietary service token of ShareRing\'s shared consumption platform, which is positioned by developers as "the most complete blockchain-based ecosystem for securely accessing and purchasing goods and services around the world."        ',
      },
    ],
    theme: 'share',
  },
  exchange: {
    currency: 'shr',
    name: 'ShareToken',
    usdImageSrc: '/shr/usd-shr.png',
    eurImageSrc: '/shr/eur-shr.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'ShareToken',
    ticker: 'SHR',
    youtube: 'https://www.youtube.com/embed/OT9hFlQsdZA',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
