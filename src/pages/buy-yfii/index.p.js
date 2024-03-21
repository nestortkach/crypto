import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-yfii',
    title: 'Buy DFI.Money (YFII) | Buy YFII with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing YFII. Get the best EUR & USD to YFII exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy DFI.Money (YFII)',
    text: 'DFI.Money is the Fork of YEarn Finance (YFI), a decentralized financial platform launched in 2020 that allows users to use automated strategies to yield from different pools of loans.',
    info: {
      release: 2020,
      ticker: 'FARM',
      creator: 'Andre Cronje',
    },
    theme: 'dfiMoney',
    currency: 'yfii',
  },
  about: {
    articles: [
      {
        title: 'What is DFI.Money (YFII)?',
        text: 'FI.Money, also known as YFII, is a fork of the popular decentralized finance aggregator (DeFi) platform yearn.finance (YFI). DFI.Money essentially fulfills the same role in the DeFi marketplace as yearn.finance, subject to different protocol rules for its token and with some new features. Thus, its appeal is aimed at users of its predecessor, who voted for YIP-8, as well as new DeFi investors who want to maximize profits by providing liquidity.',
      },
      {
        title: 'Why to buy DFI.Money (YFII)?',
        text: 'This type of network rewards users who bring liquidity to DeFi pools. Launched in July 2020, it aims to optimize profits for DeFi investors while complying with changes proposed in an update plan called YIP-8.',
      },
    ],
    theme: 'dfiMoney',
  },
  exchange: {
    currency: 'yfii',
    name: 'DFI.Money',
    usdImageSrc: '/yfii/usd-yfii.png',
    eurImageSrc: '/yfii/eur-yfii.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'DFI.Money',
    ticker: 'YFII',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
