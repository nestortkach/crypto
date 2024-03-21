import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-cfx',
    title: 'Buy Conflux (CFX) | Buy Conflux with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Conflux. Discover the best EUR to CFX and USD to CFX exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Conflux (CFX)',
    text: `Conflux Network is the next-generation public blockchain platform that combines the best features of both permissionless and permissioned blockchains. If you're looking to invest in Conflux, Guardarian offers the most user-friendly way to do so. Buy CFX instantly or keep reading to know more about Conflux.`,
    info: {
      release: 2018,
      ticker: 'CFX',
      creator: 'Fan Long',
    },
    theme: 'cfx',
    currency: 'cfx',
  },
  about: {
    articles: [
      {
        title: 'What is Conflux (CFX)?',
        text: (
          <>
            <p>
              Conflux is a highly scalable blockchain that uses a unique consensus algorithm called Tree-Graph to
              achieve high throughput and low latency. Tree-Graph uses some of the best features of PoW (Proof of Work)
              and PoS (Proof of Stake) to ensure fast & efficient network operation.
            </p>
            <br />
            <p>
              CFX is the native cryptocurrency used by Conflux Network. It is used for paying transaction fees, staking
              and governance.
            </p>
            <br />
            <p>
              Conflux has a strong focus on Decentralized Finance and includes multiple DeFi applications on its
              platform. Conflux also offers a unique and decentralized oracle solution that ensures external data
              security when used by DeFi applications.
            </p>
            <br />
            <p>
              The Conflux Network platform allows for an efficient way to build and deploy applications, which is why it
              has a very active developer community.
            </p>
          </>
        ),
      },
      {
        title: 'Why buy Conflux (CFX)?',
        text: (
          <>
            <p>
              Conflux has several unique strengths that make it a compelling investment opportunity. Firstly, Conflux
              has a strong team of developers and advisors, including Turing Award winner Andrew Yao.
            </p>
            <br />
            <p>
              Conflux uses a cross-chain protocol called ShuttleFlow which allows it to transfer assets & data between
              other blockchains, such as Ethereum, BSC and others.
            </p>
            <br />
            <p>
              The Tree-Graph algorithm allows Conflux to process up to 6000 transactions per second, making the network
              highly scalable and efficient.
            </p>
            <br />
            <p>
              In addition, Conflux offers several use cases beyond DeFi, such as gaming, social networking, and supply
              chain management. The platform is highly customizable, allowing developers to create innovative
              applications that meet the needs of a wide range of industries.
            </p>
            <br />
            <p>
              Investing in Conflux (CFX) is a smart move for anyone looking to be a part of the future of blockchain
              technology. Buy CFX today and join the growing community of developers and users on the Conflux platform.
            </p>
            <br />
          </>
        ),
      },
    ],
    theme: 'cfx',
  },
  exchange: {
    currency: 'CFX',
    network: 'BSC',
    name: 'CFX',
    usdImageSrc: '/cfx/cfx-usd.svg',
    eurImageSrc: '/cfx/cfx-eur.svg',
    usdText: `The current 1 Dollar to CFX exchange rate is CFX. Get CFX fast and without registration. Choose one of payment methods, that suits you most, whether it’s credit or debit card or bank transfer and get CFX.`,
    eurText: `The current 1 Euro to CFX exchange rate is CFX. Get CFX fast and without registration. Choose one of payment methods that suits you most, whether it’s credit or debit card or bank transfer and get CFX.`,
  },
  howToBuy: {
    name: 'Conflux',
    ticker: 'CFX',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
