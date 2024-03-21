import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-hex',
    title: 'Buy HEX (HEX) | Buy HEX Coin with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing HEX. Discover the best EUR to HEX and USD to HEX exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy HEX (HEX)',
    text: 'HEX is a brand-new financial tool that was released on the Ethereum network in 2019. As an ERC20 token, it was meant to actually be a replacement for the Certificate of Deposit. Because of this, the tool is a great store of value because of its overall increased security.',
    info: {
      release: 2019,
      ticker: 'HEX',
      creator: 'Richard Heart',
    },
    theme: 'hex',
    currency: 'hex',
  },
  about: {
    articles: [
      {
        title: 'What is HEX?',
        text: 'Launched by Richard Heart, this new crypto coin has always meant to be a way for investors to get into the banking system without the fear of being taken advantage of. Other than Richard Heart, this financial tool is also currently being worked on by Cody Lamson, Brent Morrissey and Dan Emmons.',
      },
      {
        title: 'Why to Buy HEX?',
        text: 'According to many members of the investing community, by 2025, the HEX coin will actually increase in price exponentially which is always great to hear if you’re looking to invest into something that you can trust your money into. There are also many interesting awards for users who are actively staking. All the more reason to be a part of the community.',
      },
    ],
    theme: 'hex',
  },
  exchange: {
    currency: 'hex',
    network: 'ETH',
    name: 'HEX',
    usdImageSrc: '/hex/usd-hex.png',
    eurImageSrc: '/hex/eur-hex.png',
    usdText:
      'The current 1 Dollar to HEX exchange rate is HEX. Get HEX fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get HEX',
    eurText:
      'The current 1 Euro to HEX exchange rate is HEX. Get HEX fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get HEX',
  },
  howToBuy: {
    name: 'HEX',
    ticker: 'HEX',
    youtube: 'https://www.youtube.com/embed/dJ4dquzSix8',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
