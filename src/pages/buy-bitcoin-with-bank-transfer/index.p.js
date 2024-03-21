import CoinPage from '../../layout/CoinPage';

const coin = {
  tickerUpper: 'BTC',
  tickerLower: 'btc',
  name: 'Bitcoin',
  nameCamelCase: 'bitcoin',
};

const pageInfo = {
  isBitcoinPage: true,
  bitcoinPageInfo: {
    exchangeButtonText: 'Buy Bitcoin with Bank Account',
    howToBuyButtonText: 'Buy BTC with Bank Account',
    exchangeText: 'Use your bank account to get Bitcoin securely and without registration on Guardarian.',
    howToBuyHeader: 'How to buy Bitcoin (BTC) with Bank Account?',
    howToBuySubHeader:
      'Follow these simple steps to purchase Bitcoin in minutes using your bank account on Guardarian.',
    fiatName: {
      upper: 'USD',
    },
    name: 'Bank Transfer',
    isPaymentMethod: true,
    popularPaymantSubheader: 'Use USD to buy Bitcoin with all the popular payment methods, such as the ones below.',
  },
  meta: {
    url: 'https://guardarian.com/buy-bitcoin-with-bank-transfer',
    title: `Buy ${coin.name} (${coin.tickerUpper}) With Bank Transfer - Guardarian`,
    description: `Buy Bitcoin with SEPA Instant, Swift, or Faster Payments without registration. Best exchange rate and no hidden fees on Guardarian.`,
    image: 'https://guardarian.com/services/sell-crypto-mobile.png',
  },
  banner: {
    title: `Buy ${coin.name} (${coin.tickerUpper}) with Bank Account`,
    text: 'Bitcoin is an independent currency. What distinguishes this cryptocurrency from common currencies such as dollars or euros is that it is not owned by any state. In other words, Bitcoin is  an essentially decentralized currency because there is no central bank, government, financial institution, or company that acts on them. With Guardarian you can buy BTC near-instantly using your bank account.',
    info: {
      release: 2009,
      ticker: coin.tickerUpper,
      creator: 'Satoshi Nakamoto',
    },
    theme: coin.nameCamelCase,
    currency: coin.tickerLower,
  },
  about: {
    articles: [
      {
        title: `What is ${coin.name} (${coin.tickerUpper})?`,
        text: 'Bitcoin is an encrypted digital currency that operates without central oversight. It was created in 2009 by Satoshi Nakamoto and was originally conceived as a payment method that was not subject to government oversight, transaction costs or transfer delays like traditional currencies.',
      },
      {
        title: `Why to buy ${coin.name} (${coin.tickerUpper})?`,
        text: 'Bitcoin is used primarily as an investment and is more like gold and other precious metals than paper money. Like commodities, this asset escapes the influence of a particular economy and is not much affected by changes in monetary policy.',
      },
    ],
    theme: coin.nameCamelCase,
  },
  exchange: {
    currency: coin.tickerLower,
    name: coin.name,
    usdImageSrc: `/${coin.tickerLower}/usd-${coin.tickerLower}.png`,
    eurImageSrc: `/${coin.tickerLower}/eur-${coin.tickerLower}.png`,
  },
  howToBuy: {
    name: coin.name,
    ticker: coin.tickerUpper,
    youtube: 'https://www.youtube.com/embed/y4CQNGRNriM',
  },
  popularPaymant: {
    name: coin.name,
    ticker: coin.tickerUpper,
    currency: coin.tickerLower,
    imgCreditDebit: '/btc/btc-credit-debit.png',
    imgFasterPayments: '/btc/btc-faster-payments.png',
    imgBankTpansfer: '/btc/btc-bank-transfer.png',
    imgSeraTpansfer: '/btc/btc-sepa-transfer.png',
  },
  otherCurrensies: {
    name: coin.name,
    ticker: coin.tickerUpper,
    currency: coin.tickerLower,
    logo: '/btc/btc-bg.svg',
    otherCurrencies: [
      { name: 'usd', img: '/usd.svg', route: '/buy-bitcoin-with-usd' },
      { name: 'aud', img: '/aud.svg', route: '/buy-bitcoin-with-aud' },
      { name: 'gbp', img: '/gbp.svg', route: '/buy-bitcoin-with-gbp' },
      { name: 'sek', img: '/sek.svg', route: '/buy-bitcoin-with-sek' },
    ],
  },
};

export default function index() {
  return <CoinPage pageInfo={pageInfo} />;
}
