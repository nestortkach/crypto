import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-vra',
    title: 'Buy Verasity (VRA) | Buy Verasity with Fiat, EUR & USD | Guardarian',
    description:
      'Guardarian offers the most user-friendly environment for purchasing Verasity. Discover the best EUR to VRA and USD to VRA exchange rate at Guardarian.com',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy Verasity (VRA) ',
    text: `Verasity is a project with a mission to eliminate fraud and deliver transparency in digital advertising. They are focused on digital entertainment such as esports to ensure a better customer experience and fair conditions for content creators. VRA is the currency they use for value transfer in esports, gaming, and video industries. Buy VRA instantly with Guardarian or keep reading to know more!`,
    info: {
      release: 2018,
      ticker: 'VRA',
      creator: 'R.J. Mark',
    },
    theme: 'vra',
    currency: 'vra',
  },
  about: {
    articles: [
      {
        title: 'What is Verasity (VRA)?',
        text: `So, Veracity is a blockchain project working to eliminate fraud in digital advertising. But how does it do that? Well, it uses a patented PoV (Proof of VIew) technology, combining distributed ledger technology with advanced bot detection, making sure that all the media views are valid. 
        This makes ads in videos and streaming more transparent and reduces costs for all parties.
        VRA is Verasity’s native currency used for value transfer as well as staking & rewarding participation in activities on the VRA network. VeraWallet is offered by Verasity to store your VRA securely and`,
      },
      {
        title: 'Why to buy Verasity (VRA)?',
        text: `The entertainment industry is constantly growing and evolving, with the advertisement industry following in its footsteps. At the same time, advertising fraud is evolving too, so it is as important as ever to develop new ways of dealing with fraud and ensuring fair, transparent conditions for everyone involved.
        Thanks to blockchain technology, Veracity provides a unique utility with its PoV system. This makes VRA a valuable asset in the eyes of many investors.
        `,
      },
    ],
    theme: 'vra',
  },
  exchange: {
    currency: 'VRA',
    network: 'ETH',
    name: 'Verasity',
    usdImageSrc: '/vra/vra-usd.svg',
    eurImageSrc: '/vra/vra-eur.svg',
    usdText: ``,
    eurText: ``,
  },
  howToBuy: {
    name: 'Verasity',
    ticker: 'VRA',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
