import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-matic',
    title: 'Buy Polygon (MATIC) | Buy Polygon with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Polygon. Discover the best EUR to MATIC and USD to MATIC exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Polygon (MATIC)',
    text: `Polygon is a decentralized scaling platform, facilitating blockchain app connection and scaling. It runs on Ethereum blockchain and connects Ethereum-based projects, increasing their security, scalability and compatibility. MATIC is Polygon’s cryptocurrency used to secure and govern the network as well as pay transaction fees. Buy MATIC with Guardarian instantly or keep reading to know more.`,
    info: {
      release: 2017,
      ticker: 'MATIC',
      creator: 'Sandeep Nailwal',
    },
    theme: 'matic',
    currency: 'matic',
  },
  about: {
    articles: [
      {
        title: 'What is Polygon (MATIC)?',
        text: (
          <>
            <p>
              Polygon is meant to improve and compliment the Ethereum network by providing extra features to it. It uses
              a modified proof-of-stake mechanism ensuring that every block achieves consensus. Validators stake their
              MATIC to approve network transactions and are rewarded with more MATIC.
            </p>
            <p>
              Polygon's main strengths are its fast transaction speeds (average 2.1s block processing time) and low
              transaction fees (around 0.01$). And its main weakness is not being fully autonomous - if Ethereum's
              network is disrupted, so is Polygon.
            </p>
          </>
        ),
      },
      {
        title: 'Why to buy Polygon (MATIC)?',
        text: (
          <>
            <p>
              While only supporting the Ethereum basechain currently, the network has plans to extend support for other
              chains. Polygon has undergone a “London Hard Fork” in 2022, making transaction fees more stable and
              reducing overpayments.
            </p>
            <p>
              Polygon is also generating new partners regularly, Walmart and Flipkart being some of the latest ones.
              These unique features, active improvements and partnerships make MATIC an attractive asset for many
              investors.
            </p>
          </>
        ),
      },
    ],
    theme: 'matic',
  },
  exchange: {
    currency: 'MATIC',
    network: 'BSC',
    name: 'MATIC',
    usdImageSrc: '/matic/matic-usd.svg',
    eurImageSrc: '/matic/matic-eur.svg',
    usdText: `The current 1 Dollar to MATIC exchange rate is MATIC. Get MATIC fast and without registration. Choose one of payment methods, that suits you most, either its credit or debit card or bank transfer and get MATIC.`,
    eurText: `The current 1 Euro to MATIC exchange rate is MATIC. Get MATIC fast and without registration. Choose one of payment methods that suits you most, either its credit or debit card or bank transfer and get MATIC.`,
  },
  howToBuy: {
    name: 'Polygon',
    ticker: 'MATIC',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
