import React, { useState } from 'react';
import BuyWithCrypto from 'layout/BuyWithCrypto/BuyWithCrypto';
import { DocHead } from 'layout/Head';
import { FacebookMeta } from 'components/Meta/FacebookMeta';
import { TwitterMeta } from 'components/Meta/TwitterMeta';
const pageInfo = {
  meta: {
    title: 'Buy Crypto (Bitcoin) with SEPA in Europe',
    description: `Simple way to Buy & Sell crypto with SEPA bank transfer. Guardarian has the best exchange rate and doesn't charge hidden fees`,
    url: 'https://guardarian.com/buy-bitcoin-with-sepa',
    img: 'https://guardarian.com/meta/buy-with-sepa.png',
  },
  header: {
    title: {
      text: 'The best way to buy & sell  crypto in ',
      boldText: 'Europe',
    },
    subTitle: {
      firstSection: 'Buy 400+ crypto with your bank account via SEPA transfer. Best rates possible & no hidden fees',
      secondSection: '',
    },

    backgroundImage: 'card/convinient.svg',
    calculator: {
      urlParams: {
        defaultSide: 'buy_crypto',
      },
    },
  },
  whyUse: {
    reasons: [
      {
        image: 'why-use-guardian/buySelCrepto.svg',
        title: 'Buy/Sell crypto',
        subTitle: 'without any account.',
      },
      {
        image: 'why-use-guardian/cryptocurrencies.svg',
        title: '400+ cryptocurrencies',
        subTitle: 'with 40+ fiat options.',
      },
      {
        image: 'why-use-guardian/best-possible-rates.svg',
        title: 'Best possible rates',
        subTitle: 'with no hidden fees.',
      },
      {
        image: 'why-use-guardian/fast-kyc.svg',
        title: 'Fast KYC',
        subTitle: 'with a simple steps.',
      },
      {
        image: 'why-use-guardian/authorized-platform.svg',
        title: 'Authorised platform',
        subTitle: 'with strong AML procedure.',
      },
    ],
  },
  howToBy: {
    title: 'How to buy crypto with a bank transfer',
    subTitle: 'Guardarian offers you a fast and convenient way to buy crypto with a SEPA tranfer',
    stepsInfo: [
      {
        imgStep: '/buy-crypto-steps/step1.svg',
        description: 'Select the preferred fiat currency, EUR, USD, GBP, and more.',
      },
      {
        imgStep: '/buy-crypto-steps/step2.svg',
        description: 'Choose crypto from the drop-down menu at the top of the page.',
      },
      {
        imgStep: '/buy-crypto-steps/step3.svg',
        description: 'Paste the crypto wallet address you will use to receive the asset.',
      },
      {
        imgStep: '/buy-crypto-steps/step4.svg',
        description: 'Perform the payment through your bank account.',
      },
      {
        imgStep: '/buy-crypto-steps/step5.svg',
        description: 'Receive your crypto in minutes💨',
      },
    ],
  },
};

export default function SepaLanding() {
  return (
    <>
      <BuyWithCrypto pageInfo={pageInfo} />;
    </>
  );
}
