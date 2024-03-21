import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-tipsy',
    title: 'Buy TipsyCoin (TIPSY)| Buy TipsyCoin with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing TipsyCoin. Discover the best EUR to TIPSY and USD to TIPSY exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy TipsyCoin ($TIPSY)',
    text: (
      <p>
        TipsyCoin is the governance token of the{' '}
        <a href='https://tipsycoin.io/'>
          {' '}
          <u>TipsyVerse</u>{' '}
        </a>{' '}
        ecosystem, which comprises games, apps and digital assets. The project's flagship mobile game, Gate of Abyss, is
        a location-based RPG title with Web3 integration (coming soon to Google & Apple stores). To garner mass
        adoption, The Tipsy Company builds games that are incredibly fun to play while serving as a gateway for
        non-crypto players to ease into blockchain technology.
      </p>
    ),
    info: {
      release: 2022,
      ticker: '$TIPSY',
      creator: 'The Tipsy Company',
    },
    theme: 'tipsy',
    currency: 'tipsy',
  },
  about: {
    articles: [
      {
        title: 'What is TipsyCoin ($TIPSY)?',
        text: (
          <>
            <p>
              As the governance token of the{' '}
              <a href='https://tipsycoin.io/'>
                {' '}
                <u>TipsyVerse</u>{' '}
              </a>{' '}
              ecosystem, TipsyCoin has a finite supply which has all been fully released at launch. The smart contracts
              of TipsyCoin contain innovative custom logic which observes the highest security protocols, and has been
              audited by Certik.{' '}
            </p>
            <br />
            <p>
              <b>Benefits of TipsyCoin:</b>
            </p>
            <li>
              Stake to earn Gin ($GIN) that can be used in the Gate of Abyss game, and more! About 25% of all TipsyCoin
              is staked!
            </li>
            <li>
              Earn passive rewards. While TipsyCoin is finite in supply, anyone selling TipsyCoin pays a 10% sell tax,
              and this tax is redistributed to the ecosystem. Holders earn more $TIPSY automatically.
            </li>
            <li>Partake in DAO votes, since TipsyCoin is the project's only governance token.</li>
          </>
        ),
      },
      {
        title: 'Why buy TipsyCoin?',
        text: (
          <>
            <p>
              The Tipsy Company believes in the future of games and sets out to redefine it. The team comprises over 90
              passionate people worldwide, including dozens of ex-Gameloft developers and a world-class advisory board.
            </p>
            <p>
              Holding TipsyCoin allows you to be a part of the TipsyVerse ecosystem by earning Gin ($GIN) - a premium
              currency for games launched by the company. You can also accumulate more TipsyCoin gradually through the
              passive rewards system, partake in certain decisions through the DAO, and be part of a super vibrant
              community.
            </p>
            <p>
              Join the Discord here:
              <a href='https://discord.gg/tipsycoin '>
                {' '}
                <u>https://discord.gg/tipsycoin</u>{' '}
              </a>
            </p>
          </>
        ),
      },
    ],
    theme: 'tipsy',
  },
  exchange: {
    currency: 'TIPSY',
    sing: '$',
    network: 'BSC',
    name: '$TIPSY',
    usdImageSrc: '/tipsy/tipsy-usd.svg',
    eurImageSrc: '/tipsy/tipsy-eur.svg',
    usdText: `The current 1 Dollar to $TIPSY exchange rate is $TIPSY. Get $TIPSY fast and without registration. Choose one of payment methods that suits you the most, whether its credit or debit card or bank transfer and get $TIPSY.`,
    eurText: `The current 1 Euro to $TIPSY exchange rate is $TIPSY. Get $TIPSY fast and without registration. Choose one of payment methods that suits you the most, whether its credit or debit card or bank transfer and get $TIPSY.`,
  },
  howToBuy: {
    name: 'TipsyCoin',
    ticker: '$TIPSY',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
