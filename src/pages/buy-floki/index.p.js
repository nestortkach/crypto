import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-floki',
    title: 'Buy Floki Inu | Buy FLOKI Coin with Flat, EUR & USD',
    description:
      'Floki Inu (FLOKI) is a meme coin that was released anonymously back in August. Discover the best EUR to FLOKI and USD to FLOKI exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Floki Inu (FLOKI)',
    text: 'Floki Inu is a meme-themed coin that essentially hit the market as a response to the ever so popular Shiba Inu that has taken the world by storm. But that’s not the only reason as to why it was given this name, it was also nicknamed Floki after Elon Musk’s own dog. Despite the fact that Elon Musk has not actually accepted any responsibility for the Floki Inu coin, this brand-new meme token has his staple of approval written all over it considering the fact that it was brought to life after Elon Musk has shown so much interest in the Shiba Inu coin in the past.',
    info: {
      release: 2021,
      ticker: 'FLOKI',
      creator: 'Anonymous',
    },
    theme: 'floki',
    currency: 'floki',
  },
  about: {
    articles: [
      {
        title: 'What is FLOKI?',
        text: 'Floki Inu is a meme coin that was released anonymously back in August and ever since it first hit the scene it reached the peaks of the meme coin market fighting alongside Dogecoin for the number one spot.',
      },
      {
        title: 'Why to Buy FLOKI?',
        text: 'Despite the fact that many meme coins get a bad rap, there is an actual community of investors behind Floki Inu that have shown the world that they are more than willing to invest in this coin altogether. On top of also being everywhere, the Floki Inu token also has a market cap of $2.2 billion, which means that even if you’re not a fan of meme coins you should maybe give them a chance. Who knows, you may be pleasantly surprised!',
      },
    ],
    theme: 'floki',
  },
  exchange: {
    currency: 'floki',
    network: 'ETH',
    name: 'FLOKI',
    usdImageSrc: '/floki/usd-floki.png',
    eurImageSrc: '/floki/eur-floki.png',
    usdText:
      'The current 1 Dollar to FLOKI exchange rate is FLOKI. Get FLOKI fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get FLOKI',
    eurText:
      'The current 1 Euro to FLOKI exchange rate is FLOKI. Get FLOKI fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get FLOKI',
  },
  howToBuy: {
    name: 'FLOKI',
    ticker: 'FLOKI',
    youtube: 'https://www.youtube.com/embed/gPDMFAnhIso',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
