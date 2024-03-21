import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-xvg',
    title: 'Buy XVG (XVG) | Buy XVG Coin with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Xvg. Discover the best EUR to XVG and USD to XVG exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Verge (XVG)',
    text: 'Buy XVG fast and securely with Guardarian. We provide only the best Verge rates and have fully automated the purchase process. There is no need to go through the complicated registration process. All you have to do is choose a currency, enter your details and the system will automatically send you the XVG. Spend your time and energy on what matters: Guardarian will handle the rest!\n',
    info: {
      release: 2014,
      ticker: 'XVG',
      creator: 'Justin Sunerok',
    },
    theme: 'verge',
    currency: 'xvg',
  },
  about: {
    articles: [
      {
        title: 'What is Verge (XVG)?',
        text: 'Verge is a decentralized blockchain-based cryptocurrency that emphasizes security and anonymity. It uses nodes that guarantee privacy, such as TOR and I2P, and uses a simple verification technology that allows transactions to be confirmed in 5 seconds. The main goal of Verge is to allow a large community of people to use it by setting up its mining in such a way that its coins are distributed in a balanced way with a multi-algorithmic version: a large variety of algorithms allows more users to mine.',
      },
      {
        title: 'Why to buy Verge (XVG)?',
        text: "Keeping in mind that the cryptocurrency market is especially volatile, the updates and improvements planned by Verge in the short and long term could tip the scales in your favor. Examples include a project to create a digital wallet that performs anonymous mobile transactions through the I2P network, a new approach to mining, and the creation of an online store where you can shop with XVG. What's more, the Verge rates presented on Guardarian can help you choose the best time to buy, and not lose out on the fees.",
      },
    ],
    theme: 'verge',
  },
  exchange: {
    currency: 'xvg',
    name: 'Verge',
    usdImageSrc: '/xvg/usd-xvg.png',
    eurImageSrc: '/xvg/eur-xvg.png',
    eurText:
      'Despite the fact that exchanges mainly equate the value of Verge to USD, Guardarian provided the concept of buying XVG in EUR. If you want to discover a new type of currency, then hurry up to take advantage of our offers. Choose your preferred payment methods and buy XVG in EUR today.',
    usdText:
      'At the moment, the USD exchange rate to XVG shows significant growth, and the trend is not going to reverse. Even in comparison with other cryptocurrencies, Verge XVG price does not show such volatility. Find the best payment methods below to buy XVG right now.',
  },
  howToBuy: {
    name: 'Verge',
    ticker: 'XVG',
    youtube: 'https://www.youtube.com/embed/DyVyZQvQ4Q0',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
