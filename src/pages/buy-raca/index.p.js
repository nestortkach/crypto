import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-raca',
    title: 'Buy RACA (RACA) | Buy RACA with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing RACA. Discover the best EUR to RACA and USD to RACA exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy RACA (RACA) ',
    text: `RACA (USM.WORLD) is a Web3 ecosystem initiated by Maye Musk NFT Dog community. Boasting a large and experienced development team, hundreds of community volunteers, and a vast fanbase, RACA has become one of the leading Web 3.0 solutions providers. Over 3.7 million BNB (2 billion USD equivalent) of NFT trading volume was recorded in 9 months. Buy RACA instantly with Guardarian or keep reading to know more!`,
    info: {
      release: 2021,
      ticker: 'RACA',
      creator: 'RACA Team',
    },
    theme: 'raca',
    currency: 'RACA',
  },
  about: {
    articles: [
      {
        title: 'What is RACA (RACA)?',
        text: (
          <>
            <p>
              USM (United States of Mars) is one of the oldest planets in the universe that is iconic to Mars ecology
              and landscape. It was believed to be forged by the Galaxy Forger - Looki, a celestial creature in
              existence responsible for the creation of countless stars, constellations, and planets, including Moon and
              Mars.
            </p>
            <br />
            <p>
              The USM Metaverse consists of a multitude of regions, also known as states. Each state is a world waiting
              to be explored. Visit concerts, enjoy virtual galleries and play games in a way you truly desire. Take
              trips, spend time with friends and create value together in the United States of Mars!
            </p>
          </>
        ),
      },
      {
        title: 'Why to buy RACA (RACA)?',
        text: (
          <>
            <p>
              Backed by OKX Ventures and Consensys Mesh Tachyon (parent company of MetaMask), it has one of the biggest
              Web3 communities with over 29 fanbase regions, 665k followers on Twitter, 510k on Telegram, and 68k on
              Discord.
            </p>
            <br />
            <p>
              USM is also the Web3 central for virtual headquarters and social spaces for partners include: BNB Chain,
              Huobi, Kucoin, Bybit, Bitget, LBank, OKC, Dodo, MEXC & many more.. With its rapid growth and enthusiastic
              community, RACA shows a lot of promise in the world of Web3.
            </p>
          </>
        ),
      },
    ],
    theme: 'raca',
  },
  exchange: {
    currency: 'RACA',
    network: 'BSC',
    name: 'RACA',
    usdImageSrc: '/raca/raca-usd.svg',
    eurImageSrc: '/raca/raca-eur.svg',
    usdText: `The current 1 Dollar to RACA exchange rate is RACA. Get RACA fast and without registration. Choose one of payment methods that suits you most, whether it’s credit or debit card or bank transfer and get RACA.`,
    eurText: `The current 1 Euro to RACA exchange rate is RACA. Get RACA fast and without registration. Choose one of payment methods that suits you most, whether it’s credit or debit card or bank transfer and get RACA.
    `,
  },
  howToBuy: {
    name: 'RACA',
    ticker: 'RACA',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
