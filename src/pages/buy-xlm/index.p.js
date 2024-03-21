import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-xlm',
    title: 'Buy Hoge Stellar (XLM) | Buy XLM with Fiat, EUR & USD ',
    description:
      'Guardarian offers the most user-friendly environment for purchasing XLM. Get the best EUR & USD to XLM exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Stellar (XLM)',
    text: "On Guardarian's platform you can buy a token for the well-known project Stellar Lumens, which is a decentralised protocol that gives users the ability to send money anywhere in the world instantly and cheaply. Its token is XLM, and it is currently one of the ten most expensive cryptocurrencies",
    info: {
      release: 2014,
      ticker: 'XLM',
      creator: 'Jed McCaleb',
    },
    theme: 'stellar',
    currency: 'xlm',
  },
  about: {
    articles: [
      {
        title: 'What is Stellar (XLM)?',
        text: 'Stellar (XLM) is a blockchain platform for transferring digital assets around the world. The purpose of its creation was to enable users to make payments quickly, economically and securely. It was launched as a competitor to Ripple in 2014 by XRP co-founder Jed McCaleb. The token for the Stellar platform is Stellar Lumens (XLM).',
      },
      {
        title: 'Why to buy Stellar (XLM)?',
        text: 'Stellar has managed to reduce the proportion of time in interbank financial transactions. User transactions are completed in just a few seconds, saving time and money. This advantage is causing more and more users to prefer Stellar. The big advantage of this platform is that the user can make fast, secure and extremely cheap payments between a large number of currency pairs. At this point, Stellar offers the customer a real benefit.',
      },
    ],
    theme: 'stellar',
  },
  exchange: {
    currency: 'xlm',
    name: 'Stellar',
    usdImageSrc: '/xlm/usd-xlm.png',
    eurImageSrc: '/xlm/eur-xlm.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Stellar',
    ticker: 'XLM',
    youtube: 'https://www.youtube.com/embed/Vbdqbbzz384',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
