import ExchangeWith from '../../layout/ExchangeWith/ExchangeWith';

const item = {
  metaData: {
    url: 'https://guardarian.com/buy-dogecoin-with-visa',
    title: 'Buy Crypto (DOGE) with VISA',
    description: 'Best way to Buy & Sell crypto with VISA credit and debit card. No hidden fees on Guardarian',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  calculatorSection: {
    cryptoCurrency: 'DOGE',
    fiatCurrency: 'EUR',
    title: 'Buy Dogecoin with Visa',
    description:
      'Guardarian and Visa have partnered for a more enjoyable exchange experience. With a simple process use the fiat currency you like to buy from over 250+ coins!',
    logo: '/visa.svg',
  },
  partneredWithSection: {
    title: 'Why Guardarian has partnered with Visa',
    contents: [
      {
        text: 'Initially named as BankAmericard and Launched in 1958 by the Bank of America, Visa grew to become one of the world’s leading financial services corporation. Visa facilitates electronic funds transfers throughout the world through their branded debit, credit, and prepaid cards. ',
        image: '/partnered-visa-section/first.png',
      },
      {
        text: 'In 2015 Visa’s global network (VisaNet) processed over 100 billion transactions during the previous year of 2014 and achieved a total volume of US$6.8 trillion. Naturally, Guardarian has partnered with Visa to allow our customers to enjoy crypto purchases with the most convenient payment systems.',
        image: '/partnered-visa-section/second.png',
      },
    ],
  },
  guardarianWithSection: {
    title: 'Why use Guardarian with Visa',
  },
  howToExchangeSection: {
    title: 'How to exchange Dogecoin with Visa',
    subTitle:
      'To use our exchange with visa to purchase BTC, Dogecoin or other crypto go over to our widget and follow the instructions:',
    card: 'Visa',
  },
};

export default function Index() {
  return <ExchangeWith {...item} />;
}
