import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-gala',
    title: 'Buy Gala (GALA) | Buy Gala with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Arbitrum. Discover the best EUR to GALA and USD to GALA exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Gala (GALA)',
    text: `Are you ready to take your gaming experience to the next level? Look no further than Gala Games - a gaming platform giving players unprecedented control and benefits through the power of blockchain. Buy GALA token with Guardarian and join the exciting world of blockchain gaming. Or, keep reading to learn more about what makes Gala so special.`,
    info: {
      release: 2019,
      ticker: 'GALA',
      creator: 'Eric Schiermeyer',
    },
    theme: 'gala',
    currency: 'gala',
  },
  about: {
    articles: [
      {
        title: 'What is Gala (GALA)?',
        text: (
          <>
            <p>
              Gala Games is an innovative gaming platform that uses blockchain technology to offer players a new level
              of control over their gaming experiences. Unlike traditional games, Gala offers players true ownership of
              their in-game assets.
            </p>
            <br />
            <p>
              These items can be bought or collected in an NFT form. Game items can then be used for different bonuses
              in-game or traded with other players.
            </p>
            <br />
            <p>
              The GALA token is at the center of this ecosystem, serving as a currency for in-game purchases and a way
              for players to earn rewards. Node operators also earn rewards in GALA by operating what’s called Founder’s
              Nodes. With a growing list of games and partnerships, GALA is quickly becoming a major player in the
              gaming industry.
            </p>
          </>
        ),
      },
      {
        title: 'Why buy Gala (GALA)?',
        text: (
          <>
            <p>
              One of the most compelling features of Gala Games is its focus on player ownership and control. Through
              the use of blockchain technology, Gala Games allows players to truly own their in-game assets and earn
              real value from them. This is a major departure from traditional gaming models, where players don’t have
              full ownership over their in-game assets.
            </p>
            <br />
            <p>
              Another strength of GALA is its growing ecosystem of games and partnerships. As more games and partners
              join the Gala Games network, the value of the GALA token is likely to appreciate. In addition to the Gala
              Games platform, Gala Film and Gala Music platforms were launched in 2022, expanding the areas of use for
              the project.
            </p>
            <br />
            <p>
              Gala boasts a highly experienced team, including Eric Schiermeyer, the co-founder of the famous Zynga game
              development company. They are focused on building a sustainable ecosystem that benefits both players and
              developers, potentially leading to long-term growth and stability.
            </p>
            <br />
            <p>
              Overall, the combination of player ownership, a growing ecosystem, and a strong team make investing in
              Gala Games and GALA a potentially lucrative opportunity for those interested in the gaming industry and
              blockchain technology.
            </p>
          </>
        ),
      },
    ],
    theme: 'gala',
  },
  exchange: {
    currency: 'GALA',
    network: 'ETH',
    name: 'GALA',
    usdImageSrc: '/gala/gala-usd.svg',
    eurImageSrc: '/gala/gala-eur.svg',
    usdText: `The current 1 Dollar to GALA exchange rate is GALA. Get GALA fast and without registration. Choose one of payment methods, that suits you most, whether it’s credit or debit card or bank transfer and get GALA.`,
    eurText: `The current 1 Euro to GALA exchange rate is GALA. Get GALA fast and without registration. Choose one of payment methods that suits you most, whether it’s credit or debit card or bank transfer and get GALA.`,
  },
  howToBuy: {
    name: 'Gala',
    ticker: 'GALA',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
