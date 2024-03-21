/* eslint-disable */

import { coinPages } from 'constants/coinPages';

export const haveAssetPage = (ticker, type) => {
  const _item = coinPages.find((c) => c.ticker === ticker);
  return _item && _item.types.includes(type);
};

const checkNetworks = (coin, type) => {
  if (coin.networks && coin.networks.length > 0) {
    return coin.networks.find((network) => checkPaymentMethods(network, type));
  }
};

const checkPaymentMethods = (coin, type) => {
  if (coin.payment_methods && coin.payment_methods.length > 0) {
    return coin.payment_methods.find((c) => c[type]);
  }
};

const checkAvailability = (coin, type) => {
  return checkPaymentMethods(coin, type) || checkNetworks(coin, type);
};

export const havePaymentEnabled = (coin, type = 'buy') => {
  const _type = type === 'buy' ? 'withdrawal_enabled' : 'deposit_enabled';
  return checkAvailability(coin, _type);
};

export const buyTokenUrlGenerator = (ticker, type = 'buy') => {
  return haveAssetPage(ticker, type) ? `/${type}-${ticker.toLowerCase()}` : '/';
};
