import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-babydoge',
    title: 'Buy Baby Doge Coin (BABYDOGE) | Buy Baby Doge Coin with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Baby Doge Coin. Discover the best EUR to Baby Doge Coin and USD to Baby Doge Coin exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Baby Doge Coin (BABYDOGE)',
    text: `Baby Doge Coin is a spinoff of the famous Dogecoin that is meant to improve upon the limitations of its spiritual predecessor. This includes reducing transaction fees, improving transaction time and being even more cute and memetic. Buy BABYDOGE instantly with Guardarian or keep reading to know more about it.
    `,
    info: {
      release: 2021,
      ticker: 'BABYDOGE',
      creator: 'Anonymous',
    },
    theme: 'babydoge',
    currency: 'babydoge',
  },
  about: {
    articles: [
      {
        title: 'What is Baby Doge Coin (BABYDOGE)?',
        text: (
          <>
            <p>
              BABYDOGE is a hyper-deflationary crypto token that exists on the Ethereum blockchain. Launched in 2021 by
              a team of anonymous developers, it has seen a few periods of virality which helped it rise to prominence
              and become one of the biggest meme coins on the market.
            </p>
            <br />
            <p>
              Unlike many other meme coins, Baby Doge Coin has a solid roadmap with multiple projects in the pipeline.
              The project already has its own Swap and is planning to expand into NFT, game creation and other venues in
              the future.
            </p>
            <br />
            <p>
              Baby Doge Coin is a community-based ecosystem, rewarding token holders with percentage of BABYDOGE
              transactions, supporting charitable causes and using a voting system to decide the future direction of the
              protocol. The community has supported multiple dog-related charities, donating over $750,000 to them in
              just two years.
            </p>
          </>
        ),
      },
      {
        title: 'Why buy Baby Doge Coin (BABYDOGE)?',
        text: (
          <>
            <p>
              Since BABYDOGE is deflationary in nature, it will become more scarce with time, potentially increasing the
              value of the tokens held by investors.
            </p>
            <br />
            <p>
              Baby Doge Coin has a unique awards system, where all token holders receive a 5% fee from all transactions
              made within the BabyDoge ecosystem. This means that investors earn tokens simply by storing them in their
              wallets.
            </p>
            <br />
            <p>
              Of course, having actual utility is a big plus for any token, let alone a meme token. With its low
              transaction fees, a mobile- and web-based application and a number of partner integrations (e.g. Magento,
              Shopify and WooCommerce), Baby Doge Coin is planning to stay relevant and keep growing for the years to
              come.
            </p>
          </>
        ),
      },
    ],
    theme: 'babydoge',
  },
  exchange: {
    currency: 'BABYDOGE',
    network: 'BABYDOGE',
    name: 'BABY DOGE COIN',
    usdImageSrc: '/babydoge/babydoge-usd.svg',
    eurImageSrc: '/babydoge/babydoge-eur.svg',
    usdText: `The current 1 Dollar to BABYDOGE exchange rate is BABYDOGE. Get BABYDOGE fast and without registration. Choose one of payment methods that suits you most, whether it’s credit or debit card or bank transfer and get BABYDOGE.`,
    eurText: `The current 1 Euro to BABYDOGE exchange rate is BABYDOGE. Get BABYDOGE fast and without registration. Choose one of payment methods that suits you most, whether it’s credit or debit card or bank transfer and get BABYDOGE.`,
  },
  howToBuy: {
    name: 'Baby doge Coin',
    ticker: 'BABYDOGE',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
