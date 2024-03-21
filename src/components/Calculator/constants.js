export const formTypes = {
  buy: 'buy_crypto',
  sell: 'sell_crypto',
};

const formNavBtns = [
  {
    id: formTypes.buy,
    title: 'Buy',
  },
  {
    id: formTypes.sell,
    title: 'Sell',
  },
];

const xApiKey = 'c14d927f-cb01-4561-9520-28ec22c92710';

const maxFiatValueLength = 8;
const maxCryptoValueLength = 7;
const numberRegex = /^\d*\.?,?(?:\d{1,2})?$/;
const cryptoNumberRegex = /^\d*\.?,?(?:\d{1,7})?$/;
const shouldUpdateEstimateTime = 60 * 1000; // 1 min

export {
  maxFiatValueLength,
  maxCryptoValueLength,
  cryptoNumberRegex,
  numberRegex,
  xApiKey,
  formNavBtns,
  shouldUpdateEstimateTime,
};
