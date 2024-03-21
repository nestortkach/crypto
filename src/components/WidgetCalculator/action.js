import axios from 'axios';

import config from '../../../config';

import { xApiKey } from './constants';

export async function cryptoCurrencies() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${config.guardarianApiUrl}/currencies`, {
        headers: {
          'x-api-key': xApiKey,
        },
      })
      .then(({ data: { crypto_currencies } }) => resolve(crypto_currencies))
      .catch(() => reject());
  });
}

export async function estimate({
  from_amount,
  from_currency,
  from_network,
  to_currency,
  to_network,
  setError = () => {},
  onSuccess = () => {},
  setLoading = () => {},
  minMaxRange,
  setMinMaxRange = () => {},
  setFromAmountError = () => {},
  cancelToken,
  firstLoad,
  setFirstLoad = () => {},
}) {
  let range = { ...minMaxRange };
  const amount = parseFloat(from_amount);

  setLoading(true);

  if (
    !firstLoad &&
    (range?.fromCurrency?.toLowerCase() !== from_currency?.toLowerCase() ||
      range?.toCurrency?.toLowerCase() !== to_currency?.toLowerCase())
  ) {
    range = await getMinMaxRange(from_currency, from_network, to_currency, to_network);
    setMinMaxRange(range || {});
  }
  setFirstLoad(false);

  if (range?.min && range?.max && (from_amount < parseFloat(range.min) || from_amount > parseFloat(range.max))) {
    setFromAmountError(true);

    return;
  }
  setFromAmountError(false);

  if (amount) {
    try {
      const params = {
        to_currency: to_currency.toUpperCase(),
        from_amount: amount,
        from_currency: from_currency.toUpperCase(),
      };

      if (from_network) {
        Object.assign(params, { from_network });
      }

      if (to_network) {
        Object.assign(params, { to_network });
      }

      const { data } = await axios.get(`${config.guardarianApiUrl}/estimate`, {
        params,
        headers: {
          'x-api-key': xApiKey,
        },
        cancelToken,
      });

      onSuccess(data);
      setError('');
      setFromAmountError('');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  }

  setLoading(false);
}

export async function createTransaction({
  from_amount,
  from_currency,
  from_network,
  to_currency,
  to_network,
  setLoading,
  setError,
}) {
  setLoading(true);
  setError('');

  try {
    const params = {
      to_currency: to_currency.toUpperCase(),
      from_amount: parseFloat(from_amount),
      from_currency: from_currency.toUpperCase(),
    };

    if (from_network) {
      Object.assign(params, { from_network });
    }

    if (to_network) {
      Object.assign(params, { to_network });
    }

    const { data } = await axios.post(`${config.guardarianApiUrl}/transaction`, params, {
      headers: {
        'x-api-key': xApiKey,
      },
    });

    if (data.redirect_url) {
      window.parent.location.href = data.redirect_url;
    }
  } catch (error) {
    const { data } = error.response;

    setError(data.message || 'Unexpected error occurred');
  }

  setLoading(false);
}

export async function getMinMaxRange(fromCurrency, fromNetwork, toCurrency, toNetwork) {
  try {
    const { data } = await axios(
      `${
        config.guardarianApiUrl
      }/market-info/min-max-range/${fromCurrency.toLowerCase()}-${fromNetwork.toLowerCase()}_${toCurrency.toLowerCase()}-${toNetwork.toLowerCase()}`,
      {
        headers: {
          'x-api-key': xApiKey,
        },
      },
    );

    return {
      fromCurrency: data.from,
      toCurrency: data.to,
      min: data.min,
      max: data.max,
    };
  } catch (error) {
    console.error(error.response);

    return null;
  }
}
