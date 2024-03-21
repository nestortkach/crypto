import BuyWithCrypto from 'layout/BuyWithCrypto/BuyWithCrypto';

const pageInfo = {
  meta: {
    title: 'Buy Bitcoin & 400+ Cryptos With Bank Transfer',
    description:
      'Buy crypto with SEPA Instant, Swift, or Faster Payments on Guardarian. Fast transactions and no hidden fees.',
    url: 'https://guardarian.com/buy-crypto-with-bank-transfer',
    image: 'https://guardarian.com/meta/buy-with-bank-transfer-img.png',
  },
  header: {
    title: {
      text: 'Convinient and secure way to buy crypto via ',
      boldText: 'Bank Transfer',
    },
    subTitle: {
      firstSection: 'Fast transactions with SEPA Instant, Swift, or UK payments to purchase over ',
      secondSection: '400 crypto just now!',
    },
    urls: [
      {
        url: 'card-system/sepa.svg',
        width: 57.36,
        height: 16.18,
        alt: 'sepa',
      },
      {
        url: 'card-system/swift.svg',
        width: 44,
        height: 44,
        alt: 'swift',
      },
      {
        url: 'fps_logo.webp',
        width: 49,
        height: 34,
        alt: 'Faster_Payments',
      },
    ],
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
    subTitle: 'Guardarian offers you convenient ways to buy crypto with Sepa, Swift, and Faster Payments.',
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

export default function index() {
  return <BuyWithCrypto pageInfo={pageInfo} />;
}
