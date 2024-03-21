import axios from 'axios';
import isFunction from 'lodash/isFunction';
import { roundMinMax } from 'components/Calculator/utils';
import config from '../../../config';
import { xApiKey } from './constants';
import { checkExpireDate } from 'utils/checkLocalStorageExpire';

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
  setFromAmountError = () => {},
  cancelToken,
  setUserRegion,
}) {
  const range = { ...minMaxRange };
  const amount = parseFloat(from_amount);
  setLoading(true);

  const ref_link = checkExpireDate('ref_link');

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

      if (ref_link) {
        Object.assign(params, { ref_link });
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
        const headers = error.response?.headers ?? null;

        if (isFunction(setUserRegion) && headers?.['x-reg-id']) {
          setUserRegion(headers['x-reg-id']);
        }

        setError(error.response.data.message);
      }
    }
  }

  setLoading(false);
}

export async function createTransaction({
  from_amount,
  to_amount,
  from_currency,
  from_network,
  to_currency,
  to_network,
  formType,
  setLoading,
  setError,
  setUserRegion,
}) {
  setLoading(true);
  setError('');
  const ref_link = checkExpireDate('ref_link');

  try {
    const params = {
      to_currency: to_currency.toUpperCase(),
      from_amount: parseFloat(from_amount),
      from_currency: from_currency.toUpperCase(),
    };

    if (ref_link) {
      Object.assign(params, { ref_link });
    }

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
    const response = error?.response ?? null;
    const data = response?.data ?? null;
    const headers = response?.headers ?? null;

    if (isFunction(setUserRegion) && headers?.['x-reg-id']) {
      setUserRegion(headers['x-reg-id']);
    }

    setError(data?.message || 'Unexpected error occurred');
  }

  setLoading(false);
}

export async function getMinMaxRange(fromCurrency, fromNetwork, toCurrency, toNetwork, isFiat) {
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
      min: roundMinMax(isFiat, data.min),
      max: roundMinMax(isFiat, data.max, true),
    };
  } catch (error) {
    console.error(error.response);

    return null;
  }
}

export async function estimateb2b({
  from_amount,
  from_currency,
  from_network,
  to_currency,
  to_network,
  setError = () => {},
  onSuccess = () => {},
  setMinMaxRange = () => {},
  setLoading = () => {},
  setFromAmountError = () => {},
}) {
  setLoading(true);
  setError('');
  const amount = parseFloat(from_amount);

  const { data: range } = await axios.get(
    `${
      config.guardarianB2bUrl
    }/b2b/min-max/${from_currency.toLowerCase()}-${from_network.toLowerCase()}_${to_currency.toLowerCase()}`,
  );

  setMinMaxRange(range || {});

  if (range?.min && range?.max && (from_amount < parseFloat(range.min) || from_amount > parseFloat(range.max))) {
    setFromAmountError(true);
    return;
  }

  if (amount) {
    try {
      axios
        .post(`${config.guardarianB2bUrl}/b2b/estimate`, {
          fromAmount: from_amount,
          toCurrency: to_currency,
          fromCurrency: from_currency,
          fromNetwork: from_network,
          toNetwork: to_network,
        })
        .then(({ data }) => onSuccess(data));
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  }
  setLoading(false);
}

export async function getServiceStatus() {
  try {
    const serviceStatus = await axios.get(`${config.guardarianApiUrl}/service-status`);
    return serviceStatus.data;
  } catch (e) {
    return e.response?.data?.message;
  }
}
