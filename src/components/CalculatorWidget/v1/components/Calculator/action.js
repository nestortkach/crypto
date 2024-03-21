import axios from 'axios';

import { roundMinMax } from 'components/Calculator/utils';
import config from '../../../../../../config';

export async function cryptoCurrencies({ xApiKey, setLoading = () => '' }) {
  setLoading(true);

  return new Promise((resolve, reject) => {
    axios
      .get(`${config.guardarianApiUrl}/currencies`, {
        headers: {
          'x-api-key': xApiKey,
        },
      })
      .then(({ data: { crypto_currencies } }) => resolve(crypto_currencies))
      .catch(() => reject())
      .finally(() => setLoading(false));
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
  xApiKey,
  isFiat,
}) {
  let range = { ...minMaxRange };
  const amount = parseFloat(from_amount);

  setLoading(true);

  if (
    range?.fromCurrency?.toLowerCase() !== from_currency?.toLowerCase() ||
    range?.toCurrency?.toLowerCase() !== to_currency?.toLowerCase()
  ) {
    range = await getMinMaxRange(from_currency, from_network, to_currency, to_network, xApiKey, isFiat);
    setMinMaxRange(range || {});
  }

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
  xApiKey,
  deposit_type,
  payout_address,
  extra_id,
  skip_choose_payout_address,
  payment_category,
  skip_choose_payment_category,
  redirects_successful,
  redirects_failed,
  redirects_cancelled,
  email,
  phone_number,
  us_region_alpha_2,
  country_alpha_2,
  street_address,
  apt_number,
  post_index,
  first_name,
  last_name,
  region,
  city,
  kyc_shared_token,
  kyc_shared_token_provider,
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

    if (deposit_type) {
      Object.assign(params, { deposit_type });
    }

    if (payout_address) {
      if (!params.payout_info) {
        params.payout_info = {};
      }
      Object.assign(params.payout_info, { payout_address });
    }

    if (extra_id) {
      if (!params.payout_info) {
        params.payout_info = {};
      }
      Object.assign(params.payout_info, { extra_id });
    }

    if (typeof skip_choose_payout_address === 'boolean') {
      if (!params.payout_info) {
        params.payout_info = {};
      }
      Object.assign(params.payout_info, { skip_choose_payout_address });
    }

    if (payment_category) {
      if (!params.deposit) {
        params.deposit = {};
      }
      Object.assign(params.deposit, { payment_category });
    }

    if (typeof skip_choose_payment_category === 'boolean') {
      if (!params.deposit) {
        params.deposit = {};
      }
      Object.assign(params.deposit, { skip_choose_payment_category });
    }

    if (redirects_successful) {
      if (!params.redirects) {
        params.redirects = {};
      }
      Object.assign(params.redirects, { redirects_successful });
    }

    if (redirects_failed) {
      if (!params.redirects) {
        params.redirects = {};
      }
      Object.assign(params.redirects, { redirects_failed });
    }

    if (redirects_cancelled) {
      if (!params.redirects) {
        params.redirects = {};
      }
      Object.assign(params.redirects, { redirects_cancelled });
    }

    if (email) {
      if (!params.customer) {
        params.customer = {};
      }
      if (!params.customer.contact_info) {
        params.customer.contact_info = {};
      }
      Object.assign(params.customer.contact_info, { email });
    }

    if (phone_number) {
      if (!params.customer) {
        params.customer = {};
      }
      if (!params.customer.contact_info) {
        params.customer.contact_info = {};
      }
      Object.assign(params.customer.contact_info, { phone_number });
    }

    if (us_region_alpha_2) {
      if (!params.customer) {
        params.customer = {};
      }
      if (!params.customer.billing_info) {
        params.customer.billing_info = {};
      }
      Object.assign(params.customer.billing_info, { us_region_alpha_2 });
    }

    if (country_alpha_2) {
      if (!params.customer) {
        params.customer = {};
      }
      if (!params.customer.billing_info) {
        params.customer.billing_info = {};
      }
      Object.assign(params.customer.billing_info, { country_alpha_2 });
    }

    if (street_address) {
      if (!params.customer) {
        params.customer = {};
      }
      if (!params.customer.billing_info) {
        params.customer.billing_info = {};
      }
      Object.assign(params.customer.billing_info, { street_address });
    }

    if (apt_number) {
      if (!params.customer) {
        params.customer = {};
      }
      if (!params.customer.billing_info) {
        params.customer.billing_info = {};
      }
      Object.assign(params.customer.billing_info, { apt_number });
    }

    if (post_index) {
      if (!params.customer) {
        params.customer = {};
      }
      if (!params.customer.billing_info) {
        params.customer.billing_info = {};
      }
      Object.assign(params.customer.billing_info, { post_index });
    }

    if (first_name) {
      if (!params.customer) {
        params.customer = {};
      }
      if (!params.customer.billing_info) {
        params.customer.billing_info = {};
      }
      Object.assign(params.customer.billing_info, { first_name });
    }

    if (last_name) {
      if (!params.customer) {
        params.customer = {};
      }
      if (!params.customer.billing_info) {
        params.customer.billing_info = {};
      }
      Object.assign(params.customer.billing_info, { last_name });
    }

    if (region) {
      if (!params.customer) {
        params.customer = {};
      }
      if (!params.customer.billing_info) {
        params.customer.billing_info = {};
      }
      Object.assign(params.customer.billing_info, { region });
    }

    if (city) {
      if (!params.customer) {
        params.customer = {};
      }
      if (!params.customer.billing_info) {
        params.customer.billing_info = {};
      }
      Object.assign(params.customer.billing_info, { city });
    }

    if (kyc_shared_token) {
      Object.assign(params, { kyc_shared_token });
    }

    if (kyc_shared_token_provider) {
      Object.assign(params, { kyc_shared_token_provider });
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

export async function getMinMaxRange(fromCurrency, fromNetwork, toCurrency, toNetwork, xApiKey, isFiat) {
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
      isCnRange: data.is_cn_range,
    };
  } catch (error) {
    console.error(error.response);

    return null;
  }
}
