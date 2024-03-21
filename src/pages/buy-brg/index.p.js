import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-brg',
    title: 'Buy  Bridge (BRG) | Buy Bridge with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing BRG. Discover the best EUR to BRG and USD to BRG exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Bridge (BRG)',
    text: (
      <>
        <p>
          Bridge is a public oracle system with extremely low fees which was initially launched on the BNB Chain and
          provides various services for individuals and companies, helping all implement every kind of smart contracts
          into their services and product cycles.
        </p>
        <br />
        <p>
          Using Bridge Oracle will help everyone to inject real-world data easily and cost-effectively into their
          demanding smart contracts and by doing so, proceed with automatizing their activities in the best and most
          secure way possible.
        </p>
      </>
    ),
    info: {
      release: 2020,
      ticker: 'BRG',
      creator: 'Skills Malaysia Invite SDN. BHD.',
    },
    theme: 'brg',
    currency: 'BRG',
  },
  about: {
    articles: [
      {
        title: 'What is Bridge (BRG) ?',
        text: (
          <>
            <p>
              To place a request for injecting data into the Bridge Oracle system, users are asked to pay the required
              fee. Along with BNB, users can pay the cost of their requests with BRG.
            </p>
            <br />
            <p>
              BRG is the native token of Bridge Oracle’s ecosystem with a total supply of 10 billion tokens. Using BRG
              the clients of the project would be able to pay for their demanding services with a discount.
            </p>
            <br />
            <p>
              As mentioned in the whitepaper, 20% of BRG’s supply is allocated to public sale and was distributed in an
              IEO on BW exchange in September 2020. The rest of the supply lies on platforms and smart contracts for
              more distribution and also for more operations, developments, and audits. The fundamental principle of
              BRG’s distribution policy is to prevent centralization and create maximum dispersion.
            </p>
          </>
        ),
      },
      {
        title: 'Why buy Bridge (BRG)?',
        text: (
          <>
            <p>
              The main goal of BRG is to provide customers with a payment option that is significantly less expensive
              than using BNB to pay for Bridge Oracle services. BRG is also added to many different platforms and
              exchanges for staking purposes. Therefore, BRG holders would be able to stake their BRG tokens and obtain
              high-rated profits in return.
            </p>
            <p>
              Furthermore, BRG trading is enabled in many well-known exchanges such as CoinEx, BitMart, BKEx, etc. for
              holders to take profits in the fastest and most secure way possible.
            </p>
          </>
        ),
      },
    ],
    theme: 'brg',
  },
  exchange: {
    currency: 'BRG',
    network: 'BSC',
    name: 'BRG',
    usdImageSrc: '/brg/brg-usd.svg',
    eurImageSrc: '/brg/brg-eur.svg',
    usdText: `The current 1 Dollar to Bridge exchange rate is x BRG. Get Bridgefast and without registration. Choose one of the payment methods that suits you most, either its credit or debit card or bank transfer and get Bridge`,
    eurText: `The current 1 Euro to Bridge exchange rate is BRG. Get Bridge fast and without registration. Choose one of the payment methods that suits you most, either its credit or debit card or bank transfer and get Bridge`,
  },
  howToBuy: {
    name: 'Bridge',
    ticker: 'BRG',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
