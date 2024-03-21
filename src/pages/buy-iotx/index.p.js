import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-iotx',
    title: 'Buy Iotex (IOTX) | Buy Iotex with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Iotex. Discover the best EUR to IOTX and USD to IOTX exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy IoTeX (IOTX)',
    text: `IoTeX is a Web3 infrastructure platform connecting intelligent devices and real-world data to blockchains. It recently launched W3bstream, the world’s first decentralized compute infrastructure for smart devices and data. IoTeX, a leading Decentralized Physical Infrastructure Network (DePIN) project, focuses on building a connected world where machines, humans, businesses, and DApps interact with trust and privacy, using blockchain, off-chain compute, and open hardware.`,
    info: {
      release: 2018,
      ticker: 'IOTX',
      creator: 'Raullen Chai',
    },
    theme: 'iotx',
    currency: 'iotx',
  },
  about: {
    articles: [
      {
        title: 'What is Iotex (IOTX)?',
        text: `IoTeX is an EVM-compatible L1 blockchain that provides secured interactions between humans and machines. It is an open source and smart contracts compatible network. By creating a fast and scalable blockchain platform for smart device and machine connectivity,IoTeX powers a decentralized network of DApps (Cyclone, Mimo), smart devices (UCam, Pebble), services (ioPay, ioTube), and digital assets to deliver better value to end users.`
      },
      {
        title: 'Why buy Iotex (IOTX)?',
        text: (
            <>
                <ul style={{marginLeft:"-37px"}}>
                    <p>IOTX is IoTeX’s native token. Its use cases include: </p>
                    <div style={{marginLeft:"25px"}}>
                        <li>
                            Transaction Fees: Users spend IOTX to pay transaction fees, access DApps, register smart devices and network interactions.
                        </li>
                        <li>
                            Staking: Users stake IOTX to participate in network consensus and earn IOTX rewards. The rewards are collected from gas fees and are redistributed to network participants.
                        </li>
                        <li>
                            Governance: By staking, IOTX users/owners participate in network governance and have voting power.
                        </li>
                        <li>
                            Native dApp Development: Developers can utilize IOTX to power their smart contracts, build dApps, and create new tokens on the IoTeX multi-chain platform.
                        </li>
                    </div>
                </ul>
            </>
        ),
      },
    ],
    theme: 'iotx',
  },
  exchange: {
    currency: 'IOTX',
    network: 'IOTX',
    name: 'IOTX',
    usdImageSrc: '/iotx/iotx-usd.svg',
    eurImageSrc: '/iotx/iotx-eur.svg',
    usdText: `The current 1 Dollar to IOTX exchange rate is IOTX. Get IOTX fast and without registration. Choose a payment method that suits you most, whether it’s credit or debit card or bank transfer and get IOTX.`,
    eurText: `The current 1 Euro to IOTX exchange rate is IOTX. Get IOTX fast and without registration. Choose a payment method that suits you most, whether its credit or debit card or bank transfer and get IOTX.`,
  },
  howToBuy: {
    name: 'Iotex',
    ticker: 'IOTX',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
