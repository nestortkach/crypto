import BuyWithCrypto from 'layout/BuyWithCrypto/BuyWithCrypto';

const pageInfo = {
  meta: {
    title: 'Buy Bitcoin & 400+ Other Cryptos with Credit/Debit Card',
    description: 'Buy crypto fast with Visa or Mastercard on Guardarian. Best exchange rate and no hidden fees.',
    url: 'https://guardarian.com/buy-with-card',
    image: 'https://guardarian.com/meta/buy-with-card-img.png',
  },
  header: {
    title: {
      text: 'Buy crypto with card',
      boldText: 'directly to your wallet',
    },
    subTitle: {
      firstSection: 'Use your credit/debit card to buy 400+ crypto instantly 🎯',
      secondSection: '',
    },
    urls: [
      {
        url: 'card-system/visa.svg',
        width: 62.03,
        height: 20.6,
      },
      {
        url: 'card-system/masterCard.svg',
        width: 46.69,
        height: 29.39,
      },
      {
        url: 'card-system/google_pay_new_logo.svg',
        width: 46.69,
        height: 29.39,
      },
    ],
    backgroundImage: 'card/blue-card.svg',
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
    title: 'How to buy crypto with a credit or debit card',
    subTitle: 'Guardarian offers you convenient ways to buy crypto with VISA and MasterCard.',
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
        description: 'Fill in your credit/debit card information.',
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
