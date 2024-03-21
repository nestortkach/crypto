import React, { useEffect, useCallback, useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import cn from 'classnames';

import { changeCalculatorTheme } from 'utils/changeCalculatorTheme';
import { Button } from '../Button';
import Select from '../Select';
import { CurrencyItem } from '../Select/CurrencyItem';

import { CombinedInput } from '../Calculator/components/CombinedInput';
import { ErrorMessage } from '../Calculator/components/ErrorMessage';
import { CalculatorInfo } from './components/CalculatorInfo';

import { formatNumber } from './utils';
import { formTypes, formNavBtns, maxFiatValueLength, cryptoNumberRegex, numberRegex } from './constants';
import { estimate, createTransaction } from './action';
import config from '../../../config';

import css from './WidgetCalculator.module.scss';

const estimateDebounced = debounce(estimate, 100);

const WidgetCalculator = ({ className, urlParams = {} }) => {
  const [fiatAmount, setFiatAmount] = useState(0);
  const [cryptoAmount, setCryptoAmount] = useState(0);
  const [estimatedData, setEstimatedData] = useState({});
  const [loading, setLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [formType, setFormType] = useState(urlParams?.defaultSide === formTypes.sell ? formTypes.sell : formTypes.buy);

  const [fiatCurrenciesList, setFiatCurrenciesList] = useState([]);
  const [cryptoCurrenciesList, setCryptoCurrenciesList] = useState([]);

  const [fiatCurrency, setFiatCurrency] = useState(null);
  const [cryptoCurrency, setCryptoCurrency] = useState(null);

  const [error, setError] = useState('');
  const [fromAmountError, setFromAmountError] = useState(false);
  const [minMaxRange, setMinMaxRange] = useState({});

  const isValid = Object.keys(estimatedData).length > 0 && !loading;
  changeCalculatorTheme('widgetCalculator');
  const fiatHandlers = {
    input: {
      value: fiatAmount,
      onChange: validateAndSetFiat,
    },
    select: {
      list: fiatCurrenciesList,
      onSelect: selectFiat,
      selected: fiatCurrency,
      disabled: fiatCurrenciesList.length <= 1,
    },
    error: {
      amountSetter: setFiatAmount,
    },
  };

  const cryptoHandlers = {
    input: {
      value: cryptoAmount,
      onChange: validateAndSetCrypto,
    },
    select: {
      list: cryptoCurrenciesList,
      onSelect: selectCrypto,
      selected: cryptoCurrency,
      disabled: cryptoCurrenciesList.length <= 1,
    },
    error: {
      amountSetter: setCryptoAmount,
    },
  };

  const hasPaymentMethods = (currency, field) => currency.paymentMethods.filter((pm) => pm[field]).length > 0;

  const findDefaultCurrencies = (
    fiatList,
    cryptoList,
    defaultFiatCurrency,
    defaultCryptoCurrency,
    defaultCryptoNetwork,
  ) => {
    let fiatCurrency;
    let cryptoCurrency;

    if (defaultFiatCurrency) {
      fiatCurrency = fiatList.find((currency) => currency.id.toLowerCase() === defaultFiatCurrency.toLowerCase());
    }

    if (defaultCryptoCurrency) {
      if (defaultCryptoNetwork) {
        cryptoCurrency = cryptoList.find(
          (currency) =>
            currency.id.toLowerCase() === defaultCryptoCurrency.toLowerCase() &&
            currency.network.toLowerCase() === defaultCryptoNetwork.toLowerCase(),
        );
      } else {
        cryptoCurrency = cryptoList.find(
          (currency) => currency.id.toLowerCase() === defaultCryptoCurrency.toLowerCase(),
        );
      }
    }

    return [fiatCurrency ?? fiatList[0], cryptoCurrency ?? cryptoList[0]];
  };

  const filterPaymentMethods = (handlers, field) => ({
    ...handlers,
    select: {
      ...handlers.select,
      list: handlers.select.list.filter((currency) => hasPaymentMethods(currency, field)),
    },
  });

  const formObj =
    formType === formTypes.sell
      ? {
          from_currency: filterPaymentMethods(cryptoHandlers, 'deposit_enabled'),
          to_currency: filterPaymentMethods(fiatHandlers, 'withdrawal_enabled'),
        }
      : {
          from_currency: filterPaymentMethods(fiatHandlers, 'deposit_enabled'),
          to_currency: filterPaymentMethods(cryptoHandlers, 'withdrawal_enabled'),
        };

  const from_amount = parseFloat(formObj.from_currency.input.value) || 0;
  const to_amount = estimatedData?.value || 0;

  const from_currency = formObj.from_currency.select.selected?.id;
  const from_network = formObj.from_currency.select.selected?.network;
  const to_currency = formObj.to_currency.select.selected?.id;
  const to_network = formObj.to_currency.select.selected?.network;

  function validateAndSetFiat(e) {
    const { value } = e.target;

    if (numberRegex.test(value) && value.length <= maxFiatValueLength) {
      setFiatAmount(value);
    }
  }

  function validateAndSetCrypto(e) {
    const { value } = e.target;

    if (cryptoNumberRegex.test(value)) {
      setCryptoAmount(value);
    }
  }

  function selectFiat(option) {
    const fiatCurrency = fiatCurrenciesList.find((f) => f.id === option.id);

    setFiatCurrency(fiatCurrency);
    setFiatAmount(fiatCurrency.default_exchange_value);
  }

  function selectCrypto(option) {
    const foundCryptoCurrency = cryptoCurrenciesList.find((f) => {
      if (option.network) {
        return f.id === option.id && f.network === option.network;
      }
      return f.id === option.id;
    });

    setCryptoCurrency(foundCryptoCurrency);
  }

  async function onSubmit(e) {
    e.preventDefault();

    await createTransaction({
      from_amount,
      from_currency,
      from_network,
      to_currency,
      to_network,
      setLoading,
      setError,
      deposit_type: urlParams.depositType,
    });
  }

  const toggleFormType = useCallback(
    (e) => {
      const buttonName = e.target.name;

      if (buttonName !== formType) {
        setFormType(buttonName);
        setFromAmountError(false);
      }
    },
    [formType, setFormType, cryptoCurrency, setFiatAmount, setCryptoAmount],
  );

  const setEstimateData = (data) => {
    setEstimatedData(data);

    if (formType === formTypes.buy && data.value) {
      setCryptoAmount(Number(data.value).toFixed(7));
    } else if (formType === formTypes.sell && data.value) {
      setFiatAmount(Number(data.value).toFixed(2));
    }
  };

  useEffect(() => {
    setFromAmountError(false);
  }, [from_amount]);

  useEffect(() => {
    const abortSignal = axios.CancelToken.source();

    if (from_currency) {
      const fromAmount = formType === formTypes.buy ? fiatAmount ?? from_amount : cryptoAmount ?? from_amount;

      setEstimatedData({});

      if (formType === formTypes.buy) {
        setCryptoAmount('');
      } else {
        setFiatAmount('');
      }

      estimateDebounced({
        onSuccess: setEstimateData,
        from_amount: fromAmount,
        from_currency,
        from_network,
        to_currency,
        to_network,
        setError,
        setLoading,
        minMaxRange,
        setMinMaxRange,
        setFromAmountError,
        setAmount: formType !== formTypes.buy ? setFiatAmount : setCryptoAmount,
        cancelToken: abortSignal.token,
        firstLoad,
        setFirstLoad,
      });
    }

    return () => abortSignal.cancel('Request cancelled');
  }, [from_amount, to_currency, from_currency, from_network, to_network]);

  useEffect(() => {
    const fiatPromise = axios.get(`${config.guardarianApiUrl}/currencies/fiat`);
    const cryptoPromise = axios.get(`${config.guardarianApiUrl}/currencies/crypto`);

    Promise.all([fiatPromise, cryptoPromise]).then(([fiatResponse, cryptoResponse]) => {
      const mappedFiatCurrencyData = fiatResponse.data
        .filter((obj) => obj.enabled === true)
        .filter((obj) => {
          if (!urlParams.fiatCurrenciesList) {
            return true;
          }

          return !!urlParams.fiatCurrenciesList.find(
            (currency) => currency.ticker.toLowerCase() === obj.ticker.toLowerCase(),
          );
        })
        .map((c) => ({
          id: c.ticker,
          title: c.name,
          paymentMethods: c.payment_methods,
          default_exchange_value: c.default_exchange_value,
        }));

      const mappedCryptoCurrencyData = [];

      cryptoResponse.data
        .filter((obj) => obj.enabled === true)
        .filter((obj) => {
          if (!urlParams.cryptoCurrenciesList) {
            return true;
          }

          return !!urlParams.cryptoCurrenciesList.find(
            (currency) => currency.ticker.toLowerCase() === obj.ticker.toLowerCase(),
          );
        })
        .forEach((currencyObj) => {
          if (currencyObj.networks.length > 0) {
            currencyObj.networks.forEach((el) => {
              const isFromList = urlParams.cryptoCurrenciesList
                ? !!urlParams.cryptoCurrenciesList.find(
                    (currency) =>
                      currency.ticker.toLowerCase() === currencyObj.ticker.toLowerCase() &&
                      currency.network.toLowerCase() === el.network.toLowerCase(),
                  )
                : true;

              if (!isFromList) {
                return;
              }

              mappedCryptoCurrencyData.push({
                id: currencyObj.ticker,
                title: el.name,
                network: el.network,
                paymentMethods: el.payment_methods,
              });
            });
          } else {
            mappedCryptoCurrencyData.push({
              id: currencyObj.ticker,
              title: currencyObj.name,
              network: null,
              paymentMethods: currencyObj.payment_methods,
            });
          }
        });

      setFiatCurrenciesList(mappedFiatCurrencyData);
      setCryptoCurrenciesList(mappedCryptoCurrencyData);

      if (urlParams?.defaultFiatCurrency) {
        const defaultFiatCurrency = mappedFiatCurrencyData.find(
          (currency) => currency.id.toLowerCase() === urlParams.defaultFiatCurrency.toLowerCase(),
        );

        setFiatCurrency(defaultFiatCurrency || mappedFiatCurrencyData[0]);
      } else {
        setFiatCurrency(mappedFiatCurrencyData[0]);
      }

      // select first currency in the list that has deposit/withdrawal enabled
      if (formType === formTypes.sell) {
        const withdrawalFiatCurrenciesList = mappedFiatCurrencyData.filter((currency) =>
          hasPaymentMethods(currency, 'withdrawal_enabled'),
        );
        const depositCryptoCurrenciesList = mappedCryptoCurrencyData.filter((currency) =>
          hasPaymentMethods(currency, 'deposit_enabled'),
        );
        const [defaultFiatCurrency, defaultCryptoCurrency] = findDefaultCurrencies(
          withdrawalFiatCurrenciesList,
          depositCryptoCurrenciesList,
          urlParams?.defaultFiatCurrency,
          urlParams?.defaultCryptoCurrency,
          urlParams?.defaultCryptoNetwork,
        );

        setFiatCurrency(defaultFiatCurrency);
        setFiatAmount(defaultFiatCurrency.default_exchange_value);
        setCryptoCurrency(defaultCryptoCurrency);
      } else {
        const depositFiatCurrenciesList = mappedFiatCurrencyData.filter((currency) =>
          hasPaymentMethods(currency, 'deposit_enabled'),
        );
        const withdrawalCryptoCurrenciesList = mappedCryptoCurrencyData.filter((currency) =>
          hasPaymentMethods(currency, 'withdrawal_enabled'),
        );
        const [defaultFiatCurrency, defaultCryptoCurrency] = findDefaultCurrencies(
          depositFiatCurrenciesList,
          withdrawalCryptoCurrenciesList,
          urlParams?.defaultFiatCurrency,
          urlParams?.defaultCryptoCurrency,
          urlParams?.defaultCryptoNetwork,
        );

        setFiatCurrency(defaultFiatCurrency);
        setFiatAmount(defaultFiatCurrency.default_exchange_value);
        setCryptoCurrency(defaultCryptoCurrency);
      }
    });
  }, []);

  return (
    <div className={cn(css.calculator, className)}>
      <div className={cn(css.toggleNav, 'btn-group')}>
        {!urlParams.sideToggleDisabled &&
          formNavBtns.map((btn) => (
            <Button
              key={btn.id}
              active={btn.id === formType}
              onClick={toggleFormType}
              name={btn.id}
              className={css.navBtn}
              rounded
              blue
            >
              {btn.title}
            </Button>
          ))}
      </div>

      <CombinedInput
        type='number'
        inputClass={css.combinedInput}
        containerClass={css.combinedInputContainer}
        inputContainerClass={css.inputContainerClass}
        label='You send'
        {...formObj.from_currency.input}
        value={formObj.from_currency.input.value || '300'}
        error={fromAmountError}
        appendedComponents={{
          select: (
            <Select hasSearch item={CurrencyItem} className={css.inputSelect} {...formObj.from_currency.select} />
          ),
          error: <ErrorMessage fromAmount={from_amount} range={minMaxRange} {...formObj.from_currency.error} />,
        }}
      />

      <CalculatorInfo
        estimatedData={estimatedData}
        isSellInfo={formType === formTypes.sell}
        error={error || fromAmountError}
      />

      <CombinedInput
        inputContainerClass={css.inputContainerClass}
        inputClass={css.combinedInput}
        containerClass={css.combinedInputContainer}
        readOnly
        label='You get'
        {...formObj.to_currency.input}
        value={to_amount ? `${formatNumber(to_amount)}` : ''}
        error={error || fromAmountError}
        appendedComponents={{
          select: <Select hasSearch item={CurrencyItem} className={css.inputSelect} {...formObj.to_currency.select} />,
        }}
      />

      <Button
        fullWidth
        size='md'
        green
        id={formType === formTypes.buy ? 'buy-button' : 'sell-button'}
        className={css.buyButton}
        onClick={onSubmit}
        disabled={!isValid}
      >
        {formType === formTypes.buy ? 'BUY' : 'SELL'}
      </Button>

      {!fromAmountError && error ? <div className={css.error}>{error}</div> : null}
    </div>
  );
};

export { WidgetCalculator };
