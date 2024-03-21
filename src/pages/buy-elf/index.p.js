import React from 'react';

import CoinPage from 'layout/CoinPage';

const pageInfo = {
  meta: {
    url: 'https://guardarian.com/buy-elf',
    title: 'Buy AELF (ELF) | Buy ELF with Fiat, EUR & USD',
    description:
      'Guardarian offers the most user-friendly environment for purchasing the AELF coin. Get the best EUR & USD to ELF exchange rate at Guardarian.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: 'Buy ELF (AELF)',
    text: 'ELF Token is a community driven token which is meant to support both the passive and the active investors by offering them all equally 5% BUSD rewards for not selling out. On top of that, the team behind ELF Token have also promised daily giveaways through which the investors can win a ton of money.',
    info: {
      release: 2018,
      ticker: 'ELF',
      creator: 'Ma Haobo',
    },
    theme: 'elf',
    currency: 'elf',
  },
  about: {
    articles: [
      {
        title: 'What is ELF?',
        text: 'ELF is an operating system for blockchains which facilitates the investors with the flexibility of customization. ELF also comes with its very own native cryptocurrency that goes by the same name. ELF Cryptocurrency is also worth mentioning because it takes full advantage of the Delegated Proof-Of-Stake consensus system in order to make sure that no one that owns any ELF tokens leaves the transaction empty handed.',
      },
      {
        title: 'Why to Buy ELF?',
        text: 'As a community driven token, the ELF Token is worth the investment simply because of how much potential it has. On top of that, the Elf Token is meant to work as an operating system, facilitating the work on the blockchain to get through any problem the business may be dealing with.',
      },
    ],
    theme: 'elf',
  },
  exchange: {
    currency: 'elf',
    network: 'ETH',
    name: 'ELF',
    usdImageSrc: '/elf/usd-elf.png',
    eurImageSrc: '/elf/eur-elf.png',
    usdText:
      'The current 1 Dollar to ELF exchange rate is ELF. Get ELF fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get ELF.',
    eurText:
      'The current 1 Euro to ELF exchange rate is ELF. Get ELF fast and without registration. Choose one of the payment methods, that suits you most, either its credit or debit card or bank transfer and get ELF.',
  },
  howToBuy: {
    name: 'ELF',
    ticker: 'AELF',
    youtube: 'https://www.youtube.com/embed/r0EoXtH0QP0',
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
