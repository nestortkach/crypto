import React, { useEffect, useCallback, useState, memo } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import cn from 'classnames';

import { Button } from 'components/Button';
import Select from 'components/Select';
import { CurrencyItem } from 'components/Select/CurrencyItem';

import { CombinedInput } from './components/CombinedInput';
import { ErrorMessage } from './components/ErrorMessage';
import { CalculatorInfo } from './components/CalculatorInfo';
import { changeCalculatorTheme } from '../../utils/changeCalculatorTheme/index';

import { formatNumber } from './utils';
import { formTypes, formNavBtns, maxFiatValueLength, cryptoNumberRegex, numberRegex } from './constants';
import { estimate, createTransaction, getMinMaxRange, estimateb2b, getServiceStatus } from './action';
import config from '../../../config';

import css from './Calculator.module.scss';
import Warning from '../Icons/Warning';
import { isRegionalTxCreationError } from '../../helpers/api/isRegionalTxCreationError';
import { FormModal } from 'components/FormModal';

const estimateDebounced = debounce(estimate, 400);
const estimateb2bDebounced = debounce(estimateb2b, 400);

const Calculator = memo(({ className, urlParams = {}, isWidget, b2b, noFetchEstimate }) => {
  const [status, setStatus] = useState(null);
  const [fiatAmount, setFiatAmount] = useState(0);
  const [cryptoAmount, setCryptoAmount] = useState(0);
  const [estimatedData, setEstimatedData] = useState({});
  const [userRegion, setUserRegion] = useState(null);
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

  useEffect(() => {
    if (isWidget) {
      changeCalculatorTheme('widgetCalculator');
    }
  }, []);

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

  const getFiltredCurrencyList = (list, field) => list.filter((currency) => hasPaymentMethods(currency, field));

  const filterPaymentMethods = (handlers, field) => ({
    ...handlers,
    select: {
      ...handlers.select,
      list: getFiltredCurrencyList(handlers.select.list, field),
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
    const value = e.target.value.replace(',', '.');
    setFirstLoad(false);

    if (numberRegex.test(value) && value.length <= maxFiatValueLength) {
      setFiatAmount(value);
    }
  }

  function validateAndSetCrypto(e) {
    const value = e.target.value.replace(',', '.');
    setFirstLoad(false);

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
    setCryptoAmount(foundCryptoCurrency.default_exchange_value);
  }

  async function onSubmit(e) {
    e.preventDefault();

    await createTransaction({
      from_amount,
      to_amount,
      from_currency,
      from_network,
      to_currency,
      to_network,
      setLoading,
      setError,
      deposit_type: urlParams.depositType,
      formType,
      setUserRegion,
    });
  }

  const toggleFormType = useCallback(
    (e) => {
      const buttonName = e.target.name;

      if (buttonName !== formType) {
        setFormType(buttonName);
        setFromAmountError(false);
        setMinMaxRange({});
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
    setError('');
    if (formType === formTypes.buy) {
      const filtredList = getFiltredCurrencyList(cryptoCurrenciesList, 'withdrawal_enabled');
      if (!filtredList.includes(cryptoCurrency)) {
        setCryptoCurrency(filtredList[0]);
      }
      if (!fiatAmount) {
        setFiatAmount(fiatCurrency?.default_exchange_value);
      }
      if (!fiatCurrency && !fiatAmount) {
        setFiatCurrency(fiatCurrenciesList[0]);
        setFiatAmount(fiatCurrenciesList[0]?.default_exchange_value);
      }
    } else {
      const filtredList = getFiltredCurrencyList(fiatCurrenciesList, 'withdrawal_enabled');

      if (!filtredList.includes(fiatCurrency)) {
        setFiatCurrency(filtredList[0]);
      }
      if (!cryptoAmount) {
        setCryptoAmount(cryptoCurrency?.default_exchange_value);
      }
    }
  }, [formType]);

  useEffect(() => {
    setFromAmountError(false);
  }, [from_amount]);

  useEffect(() => {
    async function getMinMax() {
      let range = { ...minMaxRange };

      if (!firstLoad) {
        range = await getMinMaxRange(from_currency, from_network, to_currency, to_network, formType === formTypes.buy);
        setMinMaxRange(range || {});
      }
    }
    if (!b2b) {
      getMinMax();
    }
  }, [formType, to_currency, from_currency, from_network, to_network, firstLoad]);

  useEffect(() => {
    if (noFetchEstimate) {
      return null;
    }

    const abortSignal = axios.CancelToken.source();

    if (!b2b) {
      if (from_currency && from_amount) {
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
          setUserRegion,
          setLoading,
          minMaxRange,
          setFromAmountError,
          setAmount: formType !== formTypes.buy ? setFiatAmount : setCryptoAmount,
          cancelToken: abortSignal.token,
        });
      }
    }

    return () => abortSignal.cancel('Request cancelled');
  }, [from_amount, to_currency, from_currency, from_network, to_network, minMaxRange, formType, noFetchEstimate]);

  useEffect(() => {
    (async () => {
      const stat = await getServiceStatus();
      setStatus(stat.status);
    })();
  }, []);

  useEffect(() => {
    if (!b2b) {
      return;
    }

    if (b2b && from_currency && from_amount) {
      const fromAmount = formType === formTypes.buy ? fiatAmount ?? from_amount : cryptoAmount ?? from_amount;

      setEstimatedData({});

      if (formType === formTypes.buy) {
        setCryptoAmount('');
      } else {
        setFiatAmount('');
      }

      estimateb2bDebounced({
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
      });
    }
  }, [from_amount, to_currency, from_currency, from_network, to_network]);

  useEffect(() => {
    const url = b2b ? `${config.guardarianB2bUrl}/b2b` : config.guardarianApiUrl;
    axios
      .get(`${url}/currencies`)
      .then(({ data: { fiat_currencies: fiatCurrencies, crypto_currencies: cryptoCurrencies } }) => {
        const mappedFiatCurrencyData = [];
        fiatCurrencies
          .filter((obj) => (b2b ? obj.enabled_b2b === true : obj.enabled === true))
          .filter((obj) => {
            if (!urlParams.fiatCurrenciesList) {
              return true;
            }

            return !!urlParams.fiatCurrenciesList.find(
              (currency) => currency.ticker.toLowerCase() === obj.ticker.toLowerCase(),
            );
          })
          .forEach((currencyObj) => {
            if (currencyObj.networks.length > 0) {
              currencyObj.networks.forEach((el) => {
                const isFromList = urlParams.fiatCurrenciesList
                  ? !!urlParams.fiatCurrenciesList.find(
                      (currency) =>
                        currency.ticker.toLowerCase() === currencyObj.ticker.toLowerCase() &&
                        currency.network.toLowerCase() === el.network.toLowerCase(),
                    )
                  : true;

                if (!isFromList) {
                  return;
                }

                mappedFiatCurrencyData.push({
                  id: currencyObj.ticker,
                  title: el.name,
                  network: el.network,
                  paymentMethods: el.payment_methods,
                  default_exchange_value: currencyObj.default_exchange_value,
                });
              });
            } else {
              mappedFiatCurrencyData.push({
                id: currencyObj.ticker,
                title: currencyObj.name,
                network: null,
                paymentMethods: currencyObj.payment_methods,
                default_exchange_value: currencyObj.default_exchange_value,
              });
            }
          });

        const mappedCryptoCurrencyData = [];

        cryptoCurrencies
          .filter((obj) => (b2b ? obj.enabled_b2b === true : obj.enabled === true))
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
                  default_exchange_value: currencyObj.default_exchange_value,
                });
              });
            } else {
              mappedCryptoCurrencyData.push({
                id: currencyObj.ticker,
                title: currencyObj.name,
                network: null,
                paymentMethods: currencyObj.payment_methods,
                default_exchange_value: currencyObj.default_exchange_value,
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
          setCryptoAmount(defaultCryptoCurrency.default_exchange_value);
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

          setFiatAmount(defaultFiatCurrency.default_exchange_value);
          setFiatCurrency(defaultFiatCurrency);
          setCryptoCurrency(defaultCryptoCurrency);
        }
      });
  }, []);

  return (
    <>
      <div className={isWidget ? '' : css.calculatorWrapper}>
        <div className={cn(css.calculator, className)}>
          <div className={cn(isWidget ? css.toggleNavWidget : css.toggleNav, 'btn-group')}>
            {!urlParams.sideToggleDisabled &&
              formNavBtns.map((btn) => (
                <Button
                  key={btn.id}
                  active={btn.id === formType}
                  onClick={toggleFormType}
                  name={btn.id}
                  className={css.navBtn}
                  rounded
                  grey={!isWidget}
                  blue={isWidget}
                >
                  {btn.title}
                </Button>
              ))}
          </div>
          <CombinedInput
            inputClass={css.combinedInput}
            containerClass={css.combinedInputContainer}
            inputContainerClass={isWidget && css.inputContainerClass}
            label='You send'
            name='You send'
            {...formObj.from_currency.input}
            value={b2b ? formObj.from_currency.input.value ?? '10000' : formObj.from_currency.input.value ?? '300'}
            error={error || fromAmountError}
            appendedComponents={{
              select: (
                <Select hasSearch item={CurrencyItem} className={css.inputSelect} {...formObj.from_currency.select} />
              ),
              error: (
                <ErrorMessage
                  error={!fromAmountError && error ? error : null}
                  fromAmount={from_amount}
                  range={minMaxRange}
                  {...formObj.from_currency.error}
                />
              ),
            }}
          />
          <CalculatorInfo
            isWidget={isWidget}
            isB2b={b2b}
            color={isWidget ? '#353535' : '#fff'}
            estimatedData={estimatedData}
            fromCurrency={formType === formTypes.buy ? fiatCurrency : cryptoCurrency}
            isSellInfo={formType === formTypes.sell}
            error={error || fromAmountError}
          />
          <CombinedInput
            inputClass={css.combinedInput}
            containerClass={css.combinedInputContainer}
            inputContainerClass={isWidget && css.inputContainerClass}
            readOnly
            label='You get'
            name='You recieve'
            {...formObj.to_currency.input}
            value={to_amount ? `${b2b ? '~' : ''}${formatNumber(to_amount)}` : ''}
            error={error || fromAmountError}
            appendedComponents={{
              select: (
                <Select hasSearch item={CurrencyItem} className={css.inputSelect} {...formObj.to_currency.select} />
              ),
            }}
          />
          {b2b && (
            <a className={css.partnerLink} href='https://partner.guardarian.com/sign-up'>
              <Button fullWidth size='md' green id='partner-button' className={css.buyButton}>
                Become a partner
              </Button>
            </a>
          )}

          {!b2b && (
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
          )}
        </div>
        {status === 'SLOW' && (
          <div className={css.exchangesNotification}>
            <Warning width='16' height='16' color='#fbad39' />
            Exchange processing time is temporarily longer than usual!
          </div>
        )}
      </div>
      {isRegionalTxCreationError(error) && (
        <FormModal open currency={from_currency} amount={from_amount} region={userRegion} />
      )}
    </>
  );
});

export { Calculator };
