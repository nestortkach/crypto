import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-egld',
    title: 'Buy MultiversX (EGLD) | Buy MultiversX with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing MultiversX. Discover the best EUR to EGLD and USD to EGLD exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy MultiversX (EGLD)',
    text: `MultiversX, formerly known as Elrond, is a blockchain network meant to provide fast transaction speeds and scalability to blockchain applications. It uses sharding to improve application speed and efficiency, which in turn reduces transaction fees. EGLD is its native currency, used for staking, governance rewards and more. Read on to know more or buy EGLD instantly with Guardarian.`,
    info: {
      release: 2020,
      ticker: 'EGLD',
      creator: 'Beniamin Mincu, Lucian Mincu & Lucian Todea',
      creators: true,
    },
    theme: 'egld',
    currency: 'egld',
  },
  about: {
    articles: [
      {
        title: 'What is MultiversX (EGLD)?',
        text: (
          <>
            <p>
              What makes MultiversX stand out from similar blockchains is its high transaction speed (15,000 tr/s) and
              very low fees ($0,001 per transaction). This turns it into a strong Ethereum rival by outperforming it
              while also being more energy efficient.
            </p>
            <br />
            <p>
              MultiversX employs two mechanisms to achieve high efficiency:
              <p>
                Adaptive State Sharing - splitting the decentralized network into individual segments that run tasks in
                parallel in an optimized way
              </p>{' '}
              Secure Proof-of-Stake(SPoS) - an algorithm in which nodes stake their EGLD to take part in validation and
              all validators are assigned scores that influence the likelihood of them being selected. all validators
              are assigned scores that influence the likelihood of them being selected.
            </p>
          </>
        ),
      },
      {
        title: 'Why buy MultiversX (EGLD)?',
        text: (
          <>
            <p>
              EGLD finds utility in that it is used to maintain the MultiversX network as well as sending, operating
              smart contracts and rewarding contributors.
            </p>
            <br />
            <p>
              Users can stake EGLD on the MultiversX network, which gives them newly minted EGLD, among other benefits.
            </p>
            <br />
            <p>
              Of course, the fact that MultiversX outmatches the Ethereum blockchain in some of its aspects makes many
              investors believe in EGLD’s future potential.
            </p>
          </>
        ),
      },
    ],
    theme: 'egld',
  },
  exchange: {
    currency: 'EGLD',
    network: 'EGLD',
    name: 'EGLD',
    usdImageSrc: '/egld/egld-usd.svg',
    eurImageSrc: '/egld/egld-eur.svg',
    usdText: `The current 1 Dollar to EGLD exchange rate is EGLD. Get EGLD fast and without registration. Choose one of the payment methods that suits you most, either its credit or debit card or bank transfer and get EGLD.`,
    eurText: `The current 1 Euro to EGLD exchange rate is  EGLD. Get EGLD fast and without registration. Choose one of the payment methods that suits you most, either its credit or debit card or bank transfer and get EGLD.`,
  },
  howToBuy: {
    name: 'MultiversX',
    ticker: 'EGLD',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
