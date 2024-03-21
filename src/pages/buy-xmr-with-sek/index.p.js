import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-xmr',
    title: 'Buy Monero (XMR) with SEK - Guardarian',
    description:
      'Guardarian is the easiest way to buy & sell Monero. Exchange USD to XMR and XMR to USD without registration or any hidden fees.',
  },
  banner: {
    title: 'Buy Monero (XMR) with SEK',
    text: "Buy Monero in a fast and secure way with Guardarian. We developed a fully automated system that allows every user to buy XMR in a seconds without dealing with a long registration process. Still not sure about buying? Discover Monero: what it is and how it works below. If you end up being interested in this crypto-asset, we'll tell you how to buy XMR on Guardarian\n",
    info: {
      release: 2014,
      ticker: 'XMR',
      creator: 'Nicolas van Saberhagen',
    },
    theme: 'monero',
    currency: 'xmr',
  },
  about: {
    articles: [
      {
        title: 'What is Monero (XMR)?',
        text: 'Monero (XMR) is a peer-to-peer, privacy-focused digital currency that is untraceable and anonymous. A transaction in the Monero blockchain cannot be linked to a specific user or institution because the cryptocurrency is fungible. For example, a bitcoin bought on the black market can be distinguished from a bitcoin bought on Guardarian by using blockchain transaction analysis, but two Monero look the same and cannot be distinguished.',
      },
      {
        title: 'Why to buy Monero (XMR)?',
        text:
          'Monero is perhaps the best known with it’s large market capitalisation. It also offers privacy by default, unlike some alternatives, where it is a manual feature. For most users, the value of Monero lies in its privacy and anonymity. It offers people the ability to make cryptocurrency transactions whenever they want, for whatever reason they want, without having to worry about being monitored by the government, hackers or any other third party. XMR coins cannot be blacklisted by companies suspected of having criminal connections, as there is no way to truly track them.\n' +
          '\n' +
          'In addition to its utility as a means of exchange, Monero may have value for investors who believe that the demand for privacy will increase in the future, leading to an increase in the price as well as the market capitalization of XMR.\n',
      },
    ],
    theme: 'monero',
  },
  exchange: {
    currency: 'xmr',
    name: 'Monero',
    usdImageSrc: '/xmr/usd-xmr.png',
    eurImageSrc: '/xmr/eur-xmr.png',
    eurText: '',
    usdText: '',
  },
  howToBuy: {
    name: 'Monero',
    ticker: 'XMR',
    youtube: 'https://www.youtube.com/embed/36Emjgv7Xwo',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
