import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-ocean',
    title: 'Buy Ocean (OCEAN) | Buy Ocean with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Ocean. Discover the best EUR to OCEAN and USD to OCEAN exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Ocean (OCEAN) ',
    text: `Ocean Protocol is a decentralized data exchange platform that enables secure and transparent sharing and monetization of data, while preserving privacy and control. It provides a marketplace where data providers can publish and sell their data to consumers who need it for various applications, such as AI and machine learning. Buy OCEAN instantly with Guardarian or keep reading to know more!`,
    info: {
      release: 2018,
      ticker: 'OCEAN',
      creator: 'Bruce Pon',
    },
    theme: 'ocean',
    currency: 'ocean',
  },
  about: {
    articles: [
      {
        title: 'What is Ocean (OCEAN)?',
        text: (
          <>
          <p>
          Ocean Protocol is built on the Ethereum blockchain and enables secure data sharing with the use of Datatokens. Datatokens are ERC20 tokens that both represent the value of the data being shared and enable access to data.
          </p>
            <br/>
          <p>
          Ocean Market is the marketplace where data exchange happens. It uses a novel approach for automatically pricing datatokens and keeping all data private and secure.
          </p>
            <br/>
          <p>
          Privacy is achieved through Ocean’s feature called Compute-to-Data, which makes it possible to provide specific, controlled access to data without having to share it directly. This could mean providing access only to specified resources and images or limiting the time the data will remain accessible to consumers.
          </p>
            <br/>
          <p>
          The OCEAN token is the native token of the Ocean Protocol, which is used for staking, governance, and accessing services within the network. The token also serves as a medium for payment between data providers and consumers.
          </p>
          </>
        ),
      },
      {
        title: 'Why buy Ocean (OCEAN)?',
        text: (
            <>
                <p>Ocean Protocol has a strong focus on data privacy and security, which is becoming increasingly important in the era of big data. Ocean also has a large and growing community of developers, data scientists, and data providers, indicating strong support and potential for growth.
                </p>
                <br/>
                <p>
                As the demand for data-driven insights and AI-powered applications increases,  Ocean Market becomes an attractive destination for businesses and developers seeking to leverage this growing demand.
                </p>
                <br/>
                <p>
                Finally, the OCEAN token plays a key role in the Ocean ecosystem, providing the means of exchange for data and value transfer, as well as providing governance rights to holders. As the adoption of the platform grows, the value of OCEAN may increase as well, growing its potential as an investment opportunity.
                </p>
            </>
        )
      },
    ],
    theme: 'ocean',
  },
  exchange: {
    currency: 'OCEAN',
    network: 'ETH',
    name: 'OCEAN',
    usdImageSrc: '/ocean/usd-ocean.svg',
    eurImageSrc: '/ocean/eur-ocean.svg',
    usdText: `The current 1 Dollar to OCEAN exchange rate is OCEAN. Get OCEAN fast and without registration. Choose a payment method that suits you most, whether it’s credit or debit card or bank transfer and get OCEAN.`,
    eurText: `The current 1 Euro to OCEAN exchange rate is OCEAN. Get OCEAN fast and without registration. Choose a payment method that suits you most, whether its credit or debit card or bank transfer and get OCEAN.`,
  },
  howToBuy: {
    name: 'Ocean',
    ticker: 'OCEAN',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
