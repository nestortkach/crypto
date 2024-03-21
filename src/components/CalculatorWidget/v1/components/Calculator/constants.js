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
  formNavBtns,
  shouldUpdateEstimateTime,
};
