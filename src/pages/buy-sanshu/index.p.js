import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-sanshu',
    title: 'Buy Sanshu Inu (SANSHU) | Buy SANSHU with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing SANSHU. Get the best EUR & USD to SANSHU exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy SANSHU (Sanshu Inu)',
    text: 'This cryptocurrency was launched back in May the 12th, 2021, but despite this it has actually garnered a lot of attention to the point where it became one of the top contenders for the Dogecoin. Many people have been quick to compare the two, but SANSHU is different in that it does offer a one percent auto staking rate. What this means is that every holder will actually get one percent of every transaction made with the coin, which ensures that as long as the coin is still used, everybody gets to make a profit.',
    info: {
      release: 2021,
      ticker: 'SANSHU',
      creator: 'Anonymous',
    },
    theme: 'sanshu',
    currency: 'sanshu',
  },
  about: {
    articles: [
      {
        title: 'What is SANSHU?',
        text: 'SANSHU is a decentralized ERC-20 token that takes all of the tokens that have ever been used and redistributes them by giving 1% of everything to the holders. So, every time anyone actually uses a SANSHU Inu coin to purchase something, everyone else gets a piece of that profit with them.',
      },
      {
        title: 'Why to Buy SANSHU?',
        text: 'The main reasons as to why you’d want to actually invest in this coin is because, as we’ve seen time and time again with meme coins, their potential is literally through the roof. On top of that, their redistribution process is very well thought out to ensure that everyone makes a profit at the end of the day.',
      },
    ],
    theme: 'sanshu',
  },
  exchange: {
    currency: 'sanshu',
    network: 'ETH',
    name: 'SANSHU',
    usdImageSrc: '/sanshu/usd-sanshu.png',
    eurImageSrc: '/sanshu/eur-sanshu.png',
    usdText:
      'The current 1 Dollar to SANSHU exchange rate is SANSHU. Get SANSHU fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get SANSHU.',
    eurText:
      'The current 1 Euro to SANSHU exchange rate is SANSHU. Get SANSHU fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get SANSHU',
  },
  howToBuy: {
    name: 'SANSHU',
    ticker: 'Sanshu Inu',
    youtube: 'https://www.youtube.com/embed/r6mgdW5bjXQ',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
