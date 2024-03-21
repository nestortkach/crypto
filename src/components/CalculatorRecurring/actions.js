import axios from 'axios';
import config from '../../../config';

const recurringPaymentsApi = axios.create({
  baseURL: config.guardarianRecurringPaymentsUrl,
  headers: {
    'x-api-key': config.guardarianRecurringPaymentsApiKey,
  },
});

export async function estimate({
  from_amount,
  from_currency,
  from_network,
  to_currency,
  to_network,
  setError = () => {},
  onSuccess = () => {},
  setLoading = () => {},
  setFromAmountError = () => {},
  cancelToken,
}) {
  const amount = parseFloat(from_amount);
  setLoading(true);

  if (amount) {
    try {
      const params = {
        amount,
        from_currency: from_currency?.toUpperCase(),
        from_currency_network: from_network?.toUpperCase(),
        to_currency: to_currency?.toUpperCase(),
        to_currency_network: to_network?.toUpperCase(),
      };

      const { data } = await recurringPaymentsApi.get('/recurring-payment-utils/estimate', {
        params,
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

export async function getCurrencies({
  setFiatCurrenciesList,
  setCryptoCurrenciesList,
  setFiatCurrency,
  setCryptoCurrency,
  setFiatAmount,
  cancelToken,
  setLoading,
  setError,
}) {
  try {
    const { data } = await recurringPaymentsApi.get('/recurring-payment-utils/currencies', {
      cancelToken,
    });

    const fiatCurrencies = [];
    const cryptoCurrencies = [];

    data.forEach((currency) => {
      if (currency?.currencyType === 'CRYPTO') {
        currency?.currencyNetworks.forEach((el) => {
          cryptoCurrencies.push({
            id: currency.ticker,
            title: el.name,
            network: el.network,
            default_exchange_value: currency.defaultExchangeValue,
          });
        });
      }
      if (currency?.currencyType === 'FIAT') {
        currency?.currencyNetworks.forEach((el) => {
          fiatCurrencies.push({
            id: currency.ticker,
            title: el.name,
            network: el.network,
            default_exchange_value: currency.defaultExchangeValue,
          });
        });
      }
    });

    setFiatCurrenciesList(fiatCurrencies);
    setCryptoCurrenciesList(cryptoCurrencies);
    setFiatCurrency(fiatCurrencies[0]);
    setFiatAmount(fiatCurrencies[0].default_exchange_value);
    setCryptoCurrency(cryptoCurrencies[0]);
  } catch (error) {
    if (error.response) {
      setError(error.response.data.message);
    }
  }

  setLoading(false);
}

export async function createSubAndRedirectToSub({
  fiatAmount,
  fiatCurrency,
  cryptoCurrency,
  startDate,
  frequency,
  setError,
  setLoading,
}) {
  setLoading(true);

  try {
    const { data } = await recurringPaymentsApi.post('/recurring-payment');

    if (data.id) {
      await recurringPaymentsApi.post(`/recurring-payment/${data.id}`, {
        fromCurrencyTicker: fiatCurrency.id,
        fromCurrencyNetworkTicker: fiatCurrency.network,
        toCurrencyTicker: cryptoCurrency.id,
        toCurrencyNetworkTicker: cryptoCurrency.network,
        amount: fiatAmount,
      });

      const {
        data: { id, status },
      } = await recurringPaymentsApi.post(`/recurring-payment/${data.id}/set-period`, {
        period: frequency.id,
        executingTime: startDate.toISOString(),
      });

      if (id && status === 'WAITING_WALLET_ADDRESS') {
        window.parent.location.href = `${config.guardarianRecurringPaymentsRedirectUrl}${id}`;
      }
    }
  } catch (error) {
    if (error.response) {
      setError(error.response.data.message);
    }
  }

  setLoading(false);
}
