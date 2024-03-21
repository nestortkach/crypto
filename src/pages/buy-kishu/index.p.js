import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-kishu',
    title: 'Buy Kishu Inu (KISHU) | Buy KISHU with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing KISHU. Get the best EUR & USD to KISHU exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Kishu Inu (KISHU)',
    text: 'Buy KISHU fast and securely at the best exchange rate with Guardarian. Free of registration and worries. Spend your time and energy on what matters — we’ll handle the rest.',
    info: {
      release: 2021,
      ticker: 'KISHU',
      creator: 'Kishu Man & Inu Dev',
    },
    theme: 'kishu',
    currency: 'kishu',
  },
  about: {
    articles: [
      {
        title: 'What is Kishu Inu (KISHU)?',
        text: 'Kishu Inu is a community-focused cryptocurrency. Started as a mem, Kishu Inu grew to over 150,000 holders and a market cap of over 2 Billion in less than a year. Kishu Inu wants to bring popular cryptocurenncy concenpts to the masses. Frictionless yield, NFTs, and decentralized exchanges, just to name a few.',
      },
      {
        title: 'Why to buy Kishu Inu (KISHU)?',
        text: 'Because you get paid just for holding the token. Kishu Inu holders receive 2% of every successful transaction that was finalized on the blockchain. Kishu Inu is fully decentralized and community-driven, which means that YOU can shape the future of KISHU by engaging and adding value; power to the people!',
      },
    ],
    theme: 'kishu',
  },
  exchange: {
    currency: 'kishu',
    network: 'ETH',
    name: 'KISHU',
    usdImageSrc: '/kishu/usd-kishu.png',
    eurImageSrc: '/kishu/eur-kishu.png',
    usdText:
      'Get KISHU fast and without registration. Choose one of payment methods, that suits you most, either its credit or debit card or bank transfer and get KISHU.',
    eurText:
      'Get KISHU fast and without registration. Choose one of payment methods, that suits you most, either its credit or debit card or bank transfer and get KISHU.',
  },
  howToBuy: {
    name: 'Kishu',
    ticker: 'KISHU',
    youtube: 'https://www.youtube.com/embed/HHS1at1TQd4',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
