import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-dash',
    title: 'Buy Dash (DASH) | Buy DASH with Fiat, EUR & USD ',
    description:
      'Guardarian offers the most user-friendly environment for purchasing the Dash coin. Get the best EUR & USD to DASH exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Dash (DASH)',
    text: 'In its quest to become a means of mass payment, the Dash (DASH) has evolved into the secure equivalent of digital money. For this reason, we invite you to get acquainted with Dash and an interesting offer from Guardarian. Our platform allows you to buy Dash in the easiest way without extra costs or long registration processes. ',
    info: {
      release: 2014,
      ticker: 'DASH',
      creator: 'Evan Duffield',
    },
    theme: 'dash',
    currency: 'dash',
  },
  about: {
    articles: [
      {
        title: 'What is Dash (DASH)?',
        text: 'Dash is the first currency that relies on the properties of anonymity and privacy. It was based on bitcoin code, but the founders transformed it with a unique encryption algorithm that guarantees untraceable transactions.',
      },
      {
        title: 'Why to buy Dash (DASH)?',
        text: 'One of the reasons the Dash coin has become so popular is the great anonymity of the transactions of the aforementioned PrivateSend feature. While all transactions are still kept in the ledger, it is not as easy for people to analyse and try to trace the origin of funds to specific user portfolios. For the base behind the Dash, there are still features required to comply with the necessary law enforcement actions for source funding, but for the general user base, transactions are much more anonymous.',
      },
    ],
    theme: 'dash',
  },
  exchange: {
    currency: 'dash',
    name: 'Dash',
    usdImageSrc: '/dash/usd-dash.png',
    eurImageSrc: '/dash/eur-dash.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Dash',
    ticker: 'DASH',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
