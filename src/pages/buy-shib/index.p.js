import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-shib',
    title: 'Buy Shiba (SHIB) | Buy SHIB Coin with Flat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing SHIB. Get the best EUR to SHIB & USD to SHIB exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Shiba (SHIB)',
    text: 'Buy Shiba with Guardarian. We developed a fully automated and secured system that allows every customer to buy SHIB in a seconds without dealing with a long registration and KYC processes. Still not sure about buying? Discover Shiba in the material below: what it is and how it works. By the way, in the end there is an instruction on how to buy SHIB on Guardarian\n',
    info: {
      release: 2020,
      ticker: 'SHIB',
      creator: 'Ryoshi',
    },
    theme: 'shiba',
    currency: 'shib',
  },
  about: {
    articles: [
      {
        title: 'What is Shiba (SHIB)?',
        text: 'According to its website, Shiba Inu (SHIB) is a decentralized experiment in spontaneous community building. The SHIB token is his first token that allows users to have billions or even trillions of them. This token, dubbed the DOGECOIN KILLER, can stay below a penny and still outperform Dogecoin in a small amount of time (conventionally speaking). The popular worldwide token Shiba ($SHIB), which is already up a thousand percent, is the first token to be floated and incentivized on ShibaSwap, its decentralized exchange.',
      },
      {
        title: 'Why to buy Shiba (SHIB)?',
        text: 'Such hype is unquestionably crazy for a coin that seemed to come out of nowhere. While it is still well below the current market capitalization of Dogecoin, Shiba has also made more significant gains recently. SHIB buyers seem eager to double down on the fast and significant gains that DOGE has provided from time to time this year.',
      },
    ],
    theme: 'shiba',
  },
  exchange: {
    currency: 'shib',
    network: 'ETH',
    name: 'Shiba',
    usdImageSrc: '/shib/usd-shib.png',
    eurImageSrc: '/shib/eur-shib.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Shiba',
    ticker: 'SHIB',
    youtube: 'https://www.youtube.com/embed/lMHaNfIaRKk',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
