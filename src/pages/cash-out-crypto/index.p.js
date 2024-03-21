import BuyWithCrypto from 'layout/BuyWithCrypto/BuyWithCrypto';

const pageInfo = {
  meta: {
    title: 'Cash Out Crypto To Your Bank Account',
    description:
      'Sell your crypto for FIAT with a simple bank transfer. Best exchange rate and no registration with Guardarian.',
    url: 'https://guardarian.com/cash-out-crypto',
    image: 'https://guardarian.com/meta/cash-out-crypto-img.png',
  },
  header: {
    title: {
      text: 'Withdraw crypto by simple',
      boldText: ' bank transfer',
    },
    subTitle: {
      firstSection: 'Sell 400+ crypto and receive payouts directly to your bank account 💳 ',
      secondSection: '',
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
    backgroundImage: 'bank-transfer.svg',
    calculator: {
      urlParams: {
        defaultSide: 'sell_crypto',
      },
    },
  },
  whyUse: {
    reasons: [
      {
        image: 'why-use-guardian/buySelCrepto.svg',
        title: 'Buy/Sell crypto',
        subTitle: 'without any account.',
        alt: '',
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
    btn: 'SELL NOW',
  },
  howToBy: {
    title: 'How to cash out crypto to a bank account',
    subTitle: 'Guardarian offers you convenient ways to sell crypto to EUR, USD and GPB. ',
    stepsInfo: [
      {
        imgStep: '/buy-crypto-steps/step1.svg',
        description: 'Select the asset you’d like to sell.',
      },
      {
        imgStep: '/buy-crypto-steps/step2.svg',
        description: 'Enter the amount you want to exchange. ',
      },
      {
        imgStep: '/buy-crypto-steps/step3.svg',
        description: 'Fill in your bank account details.',
      },
      {
        imgStep: '/buy-crypto-steps/step4.svg',
        description: 'Perform the payment.',
      },
      {
        imgStep: '/buy-crypto-steps/step5.svg',
        description: 'Receive your money to the provided bank account 🔥',
      },
    ],
    btn: 'SELL NOW',
  },
};

export default function index() {
  return <BuyWithCrypto pageInfo={pageInfo} />;
}
