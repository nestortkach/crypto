import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-elf',
    title: 'Buy GG Token (GGTKN) | Buy GG Token with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing GG Token. Discover the best EUR to GGTKN and USD to GGTKN exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy GG Token (GGTKN)',
    text: `GG Token was created in cooperation with GG International, GG World Lottery, and White Lotto - the most efficient technology provider for the entertainment and crypto industry.
    GGTKN is a native token for multiple Gaming, E-Commerce, and Networking platform projects.
    It is accepted by 30+ projects worldwide licensed by the local governments. Buy your GGTKN safe and easy with Guardarian!`,
    info: {
      release: 2022,
      ticker: 'GGTKN',
      creator: 'GG Token',
    },
    theme: 'ggtkn',
    currency: 'GGTKN',
  },
  about: {
    articles: [
      {
        title: 'WHAT IS GG Token (GGTKN)',
        text: (
          <>
            <h4>The GG Token is created for a number of unique reasons:</h4>
            <ul>
              <li>to educate population of Africa, Latin America and Caribbean about blockchaintechnology</li>
              <li>
                to give an alternative to Mobile Money and Vouchers system for many unbankedaround the world - GG Token
                brings the average mobile transaction costs from 12% to under 1%
              </li>
              <li>
                to encourage people to receive special ongoing discounts and bonuses from a broad network of worldwide
                partners by paying with GG Token
              </li>
            </ul>
          </>
        ),
      },
      {
        title: 'WHY TO BUY GG Token (GGTKN):',
        text: (
          <>
            <h4>The benefits of using this token:</h4>
            <ul>
              <li>Discounted price for white label setup fee at WhiteLotto.com for a lottery or casino project</li>
              <li>Generous casino and sportsbook bonuses (deposit bonus, free spin bonuses, cashback bonuses).</li>
              <li>Instant deposits and withdrawals without additional transfer costs.</li>
              <li>Up to 80% discounts in e-shops when buying digital and physical goods with GGTKN</li>
              <li>Low and limited token supply</li>
            </ul>
          </>
        ),
      },
    ],
    theme: 'ggtkn',
  },
  exchange: {
    currency: 'GGTKN',
    network: 'BSC',
    name: 'GGTKN',
    usdImageSrc: '/ggtkn/ggtkn-eur.svg',
    eurImageSrc: '/ggtkn/ggtkn-usd.svg',
    usdText: `The current 1 Dollar to GG Token exchange rate is GG Token. Get GG Token fast and without registration. Choose one of payment methods, that suits you most, either its credit or debit card or bank transfer and get GG Token.`,
    eurText: `The current 1 Euro to GG Token exchange rate is GG Token. Get GG Token fast and without registration. Choose one of payment methods that suits you most, either its credit or debit card or bank transfer and get GG Token.`,
  },
  howToBuy: {
    name: 'GG Token Coin',
    ticker: 'GGTKN',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
