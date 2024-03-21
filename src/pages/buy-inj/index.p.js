import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-inj',
    title: 'Buy Injective (INJ) | Buy Injective with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Injective. Discover the best EUR to INJ and USD to INJ exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Injective (INJ) ',
    text: `Injective is a Layer 1 blockchain platform aiming to provide a trading ecosystem for various DeFi applications. It utilizes smart contracts, bridges, decentralized order book & other blockchain tech to allow for secure, high performance decentralized applications. Buy INJ instantly with Guardarian or keep reading to know more!`,
    info: {
      release: 2018,
      ticker: 'INJ',
      creator: 'Eric Chen & Albert Chon',
    },
    theme: 'inj',
    currency: 'inj',
  },
  about: {
    articles: [
      {
        title: 'What is Injective (INJ)?',
        text: (
          <>
            <p>
              The Injective Chain is built on Cosmos, which allows it to transfer and process ETH. It also supports
              super-fast transaction speeds upwards of 10,000 TPS.
            </p>

            <br />

            <p>Injective gives users a wide choice of DeFi features, such as: </p>
            <ul>
              <li>
                <b>Injective Bridge:</b> allowing for secure value transfers between multiple blockchains.
              </li>
              <li>
                <b>Injective staking:</b> letting users earn rewards by supporting Injective’s PoS network.
              </li>
              <li>
                <b>Insurance funds:</b> for underwriters to back different markets on the Injective exchange
              </li>
              <li>
                <b>Injective Auctions:</b> letting users bid on different token baskets using INJ tokens. The winning
                bidder gets the basket while their INJ is then burned.
              </li>
            </ul>

            <br />

            <p>
              All of these are available through the Injective Hub, which provides users with easy access as well as a
              full overview of all the protocol’s features.
            </p>

            <br />

            <p>
              When it comes to developers, Injective allows them to build highly efficient, interoperable dApps with
              high transaction speeds. The protocol boasts unprecedented interoperability with connections to major
              blockchains like Ethereum, Solana and Cosmos, among others.
            </p>

            <br />

            <p>
              Novel Web3 modules provide an intuitive, plug-and-play way to create a wide range of financial
              applications. In addition, the innovative CosmWasm smart contract system (built on Rust) allows the
              integration of autonomous logic into truly decentralized applications.
            </p>
          </>
        ),
      },
      {
        title: 'Why to buy Injective (INJ)?',
        text: (
          <>
            <p>
              INJ, Injective’s native token, is deflationary by nature, meaning that its supply will decrease over time,
              potentially increasing the price of the token. The protocol also boasts one of the highest burn ratios in
              the crypto industry.
            </p>

            <br />

            <p>
              Owners of INJ token have multiple ways of leveraging their assets - from auctions to staking to using
              insurance funds, allowing for a smarter approach to managing their investments. INJ can also be used to
              vote on updates to the protocol and to influence its future direction.
            </p>
          </>
        ),
      },
    ],
    theme: 'inj',
  },
  exchange: {
    currency: 'INJ',
    network: 'BSC',
    name: 'INJ',
    usdImageSrc: '/inj/inj-usd.svg',
    eurImageSrc: '/inj/inj-eur.svg',
    usdText: `The current 1 Dollar to INJ exchange rate is INJ. Get INJ fast and without registration. Choose one of payment methods, that suits you most, either its credit or debit card or bank transfer and get INJ.`,
    eurText: `The current 1 Euro to INJ exchange rate is INJ. Get INJ fast and without registration. Choose one of payment methods that suits you most, either its credit or debit card or bank transfer and get INJ.`,
  },
  howToBuy: {
    name: 'Injective',
    ticker: 'INJ',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
