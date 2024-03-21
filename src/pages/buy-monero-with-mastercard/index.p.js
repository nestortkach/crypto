import ExchangeWith from '../../layout/ExchangeWith/ExchangeWith';

const item = {
  metaData: {
    url: 'https://guardarian.com/buy-monero-with-mastercard',
    title: 'Buy Crypto (XMR) with Mastercard credit and debit card',
    description:
      'Guardarian accepts Mastercard for your direct purchase. Select fiat currency, EUR & USD to buy or sell over 250 coins and tokens.',
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  calculatorSection: {
    cryptoCurrency: 'XMR',
    fiatCurrency: 'EUR',
    title: 'Buy Monero with Mastercard',
    description:
      'Guardarian and mastercard have partnered for a more enjoyable exchange experience. With a simple process use the fiat currency you like to buy from over 250+ coins!',
    logo: '/mastercard.svg',
  },
  partneredWithSection: {
    title: 'Why Guardarian has partnered with Mastercard',
    contents: [
      {
        text: 'The main purpose of mastercard is to process payments between the banks of the merchants and the purchasers who use the "Mastercard" brand debit, credit and prepaid cards to make purchases.',
        image: '/partnered-mastercard-section/first.png',
      },
      {
        text: 'There are over 551 million debit cards and 336 million credit cards used all over the world from mastercard. Naturally, we partnered with mastercard to make crypto purchases simple and avaialble to our clients.',
        image: '/partnered-mastercard-section/second.png',
      },
    ],
  },
  guardarianWithSection: {
    title: 'Why use Guardarian with Mastercard',
  },
  howToExchangeSection: {
    title: 'How to exchange XMR with Mastercard',
    subTitle:
      'To use our exchange with mastercard to purchase BTC, XMR or other crypto go over to our widget and follow the instructions:',
    card: 'Mastercard',
  },
};

export default function Index() {
  return <ExchangeWith {...item} />;
}
