import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import cn from 'classnames';
import { debounce } from 'lodash';
import { Lock } from 'components/Icons/Lock';
import { GuardarianWithoutLogo } from 'components/Icons/GuardarianWithoutLogo';
import {
  setFiatListUnfiltered,
  setCryptoListUnfiltered,
  setFiatList,
  setCryptoList,
  selectFiatCurrenciesListUnfiltered,
  selectCryptoCurrenciesListUnfiltered,
} from 'utils/store/features/coinsSlice';
import { Button } from '../Button';
import { CurrencyItem } from '../Select/CurrencyItem';
import Select from '../Select';
import { CombinedInput } from './components/CombinedInput';
import { ErrorMessage } from './components/ErrorMessage';
import { CalculatorInfo } from './components/CalculatorInfo/CalculatorInfo';
import { formatNumber } from './utils';
import { formTypes, formNavBtns, maxFiatValueLength, cryptoNumberRegex, numberRegex } from './constants';
import { estimate, createTransaction } from './action';
import config from '../../../../../../config';
import css from './Calculator.module.scss';

const estimateDebounced = debounce(estimate, 400);

const Calculator = ({ className, urlParams = {} }) => {
  const dispatch = useDispatch();

  const fiatCurrenciesListWidget = useSelector(selectFiatCurrenciesListUnfiltered);
  const cryptoCurrenciesListWidget = useSelector(selectCryptoCurrenciesListUnfiltered);

  const [fiatAmount, setFiatAmount] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  const [cryptoAmount, setCryptoAmount] = useState(0);
  const [estimatedData, setEstimatedData] = useState({});
  const [loading, setLoading] = useState(false);
  const [formType, setFormType] = useState(urlParams?.defaultSide === formTypes.sell ? formTypes.sell : formTypes.buy);

  const [fiatCurrenciesList, setFiatCurrenciesList] = useState([]);
  const [cryptoCurrenciesList, setCryptoCurrenciesList] = useState([]);

  const [fiatCurrency, setFiatCurrency] = useState(null);
  const [cryptoCurrency, setCryptoCurrency] = useState(null);
  const [error, setError] = useState('');
  const [fromAmountError, setFromAmountError] = useState(false);
  const [minMaxRange, setMinMaxRange] = useState({});

  const isValid = Object.keys(estimatedData).length > 0 && !loading;

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

    if (numberRegex.test(value) && value.length <= maxFiatValueLength) {
      setFiatAmount(value);
    }
  }

  function validateAndSetCrypto(e) {
    const value = e.target.value.replace(',', '.');

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
      xApiKey: urlParams.partnerApiToken,
      deposit_type: urlParams.depositType,
      payout_address: urlParams.payoutAddress,
      extra_id: urlParams.payoutExtraId,
      skip_choose_payout_address: urlParams.skipChoosePayoutAddress,
      payment_category: urlParams.paymentCategory,
      skip_choose_payment_category: urlParams.skipChoosePaymentCategory,
      redirects_successful: urlParams.redirectsSuccessful,
      redirects_failed: urlParams.redirectsFailed,
      redirects_cancelled: urlParams.redirectsCancelled,
      email: urlParams.email,
      phone_number: urlParams.phoneNumber,
      us_region_alpha_2: urlParams.usRegionAlpha2,
      country_alpha_2: urlParams.countryAlpha2,
      street_address: urlParams.streetAddress,
      apt_number: urlParams.aptNumber,
      post_index: urlParams.postIndex,
      first_name: urlParams.firstName,
      last_name: urlParams.lastName,
      region: urlParams.region,
      city: urlParams.city,
      kyc_shared_token: urlParams.kycSharedToken,
      kyc_shared_token_provider: urlParams.kycSharedTokenProvider,
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
    if (formType === formTypes.buy) {
      dispatch(setFiatList(getFiltredCurrencyList(fiatCurrenciesList, 'deposit_enabled')));
      const filtredList = getFiltredCurrencyList(cryptoCurrenciesList, 'withdrawal_enabled');
      if (!filtredList.includes(cryptoCurrency)) {
        setCryptoCurrency(filtredList[0]);
      }
      if (!fiatAmount) {
        setFiatAmount(fiatCurrency?.default_exchange_value);
      }
    } else {
      const filtredList = getFiltredCurrencyList(fiatCurrenciesList, 'withdrawal_enabled');
      dispatch(setFiatList(getFiltredCurrencyList(fiatCurrenciesList, 'withdrawal_enabled')));
      if (filtredList.length === 0) {
        return;
      }
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
    const abortSignal = axios.CancelToken.source();

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
        setLoading,
        minMaxRange,
        setMinMaxRange,
        setFromAmountError,
        setAmount: formType !== formTypes.buy ? setFiatAmount : setCryptoAmount,
        cancelToken: abortSignal.token,
        deposit_type: urlParams.depositType,
        xApiKey: urlParams.partnerApiToken,
        isFiat: formType === formTypes.buy,
      });
    }

    return () => abortSignal.cancel('Request cancelled');
  }, [from_amount, to_currency, from_currency, from_network, to_network]);

  useEffect(() => {
    if (minMaxRange && !cryptoAmount) {
      setCryptoAmount(minMaxRange.min);
    }
  }, [minMaxRange]);

  useEffect(() => {
    if (!cryptoCurrenciesListWidget.length > 0 && !fiatCurrenciesListWidget.length > 0) {
      return;
    }

    const mappedFiatCurrencyData = [];

    fiatCurrenciesListWidget
      .filter((obj) => obj.enabled === true)
      .filter((obj) => {
        if (!urlParams?.fiatCurrenciesList) {
          return true;
        }

        return !!urlParams?.fiatCurrenciesList?.find(
          (currency) => currency.ticker.toLowerCase() === obj.ticker.toLowerCase(),
        );
      })
      .forEach((currencyObj) => {
        if (currencyObj.networks.length > 0) {
          currencyObj.networks.forEach((el) => {
            const isFromList = urlParams?.fiatCurrenciesList
              ? !!urlParams?.fiatCurrenciesList?.find(
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

    cryptoCurrenciesListWidget
      .filter((obj) => obj.enabled === true)
      .filter((obj) => {
        if (!urlParams?.cryptoCurrenciesList) {
          return true;
        }

        return !!urlParams.cryptoCurrenciesList.find(
          (currency) => currency.ticker.toLowerCase() === obj.ticker.toLowerCase(),
        );
      })
      .forEach((currencyObj) => {
        if (currencyObj.networks.length > 0) {
          currencyObj.networks.forEach((el) => {
            const isFromList = urlParams?.cryptoCurrenciesList
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

    if (firstLoad) {
      dispatch(setFiatList(getFiltredCurrencyList(mappedFiatCurrencyData, 'deposit_enabled')));
      dispatch(setCryptoList(getFiltredCurrencyList(mappedCryptoCurrencyData, 'withdrawal_enabled')));
    }

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
      setCryptoAmount(urlParams?.defaultCryptoAmount || defaultCryptoCurrency?.default_exchange_value);
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
      setCryptoCurrency(defaultCryptoCurrency);
      setFiatAmount(urlParams?.defaultFiatAmount || defaultFiatCurrency?.default_exchange_value);
    }
  }, [
    urlParams?.defaultFiatCurrency,
    urlParams?.defaultCryptoCurrency,
    urlParams?.cryptoCurrenciesList,
    urlParams?.fiatCurrenciesList,
    fiatCurrenciesListWidget,
    cryptoCurrenciesListWidget,
  ]);

  useEffect(() => {
    setFiatAmount(urlParams?.defaultFiatAmount);
  }, [urlParams?.defaultFiatAmount]);

  useEffect(() => {
    if (urlParams.defaultSide) {
      setFormType(urlParams.defaultSide);
    }
  }, [urlParams.defaultSide]);

  useEffect(() => {
    const abortSignal = axios.CancelToken.source();

    axios
      .get(`${config.guardarianApiUrl}/currencies`)
      .then(({ data: { fiat_currencies: fiatCurrencies, crypto_currencies: cryptoCurrencies } }) => {
        dispatch(setFiatListUnfiltered(fiatCurrencies));
        dispatch(setCryptoListUnfiltered(cryptoCurrencies));
        setFirstLoad(false);
      });

    return () => abortSignal.cancel('Request cancelled');
  }, []);

  if (urlParams?.type === 'wide') {
    return (
      <>
        <div className={cn(css.calculator, className, css.wide_calculator)}>
          <div className={css.wide_toggleContainer}>
            <div className={cn(css.toggleNav, 'btn-group', css.wide_toggleNav)}>
              {!urlParams.sideToggleDisabled &&
                formNavBtns.map((btn) => (
                  <Button
                    key={btn.id}
                    active={btn.id === formType}
                    onClick={toggleFormType}
                    name={btn.id}
                    className={css.navBtn}
                    disabled={btn.id === formTypes.sell && urlParams.sellButtonDisabled}
                    rounded
                    grey
                  >
                    {btn.title}
                  </Button>
                ))}
            </div>

            <CalculatorInfo
              wideCalculator
              estimatedData={estimatedData}
              isSellInfo={formType === formTypes.sell}
              error={error || fromAmountError}
            />
          </div>
          <div className={css.wide_inputContainer}>
            <CombinedInput
              inputClass={css.combinedInput}
              containerClass={css.combinedInputContainer}
              label='You send'
              {...formObj.from_currency.input}
              error={fromAmountError || error}
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

            <CombinedInput
              inputClass={css.combinedInput}
              containerClass={css.combinedInputContainer}
              readOnly
              label='You get'
              {...formObj.to_currency.input}
              value={to_amount ? `${formatNumber(to_amount)}` : ''}
              error={error || fromAmountError}
              appendedComponents={{
                select: (
                  <Select hasSearch item={CurrencyItem} className={css.inputSelect} {...formObj.to_currency.select} />
                ),
              }}
            />

            <Button
              size='md'
              green
              id={formType === formTypes.buy ? 'buy-button' : 'sell-button'}
              className={cn(css.buyButton, css.wideButton)}
              onClick={onSubmit}
              disabled={!isValid}
            >
              {formType === formTypes.buy ? 'BUY' : 'SELL'}
            </Button>
          </div>
        </div>
        {urlParams?.fullPage && (
          <>
            <div className={css.fullPage}>
              <Lock className={css.icon} />
              <p className={css.text}>
                This transaction is secure, allowing you to pay with your card, bank transfer, or other methods with
                complete confidence.
              </p>
            </div>
            <div className={css.poweredByText}>
              <p>Powered by</p>
              <GuardarianWithoutLogo />
            </div>
          </>
        )}
      </>
    );
  }

  if (fiatCurrency && cryptoCurrency) {
    const currencyWord = cryptoCurrency.title.split(' ').shift();
    const currencyName = currencyWord.charAt(0) + currencyWord.slice(1).toLowerCase();

    return (
      <>
        {urlParams?.fullPage && (
          <p className={css.fullPageText}>
            Press “{formType === formTypes.sell ? 'Sell' : 'Buy'}” to proceed with your exchange.
          </p>
        )}
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
                  disabled={btn.id === formTypes.sell && urlParams.sellButtonDisabled}
                  rounded
                  grey
                >
                  {btn.title}
                </Button>
              ))}
          </div>

          <CombinedInput
            inputClass={css.combinedInput}
            containerClass={css.combinedInputContainer}
            inputContainerClass={css.wideInputContainer}
            loaderClass={css.loader}
            label='You send'
            {...formObj.from_currency.input}
            error={fromAmountError || error}
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
            estimatedData={estimatedData}
            isSellInfo={formType === formTypes.sell}
            error={error || fromAmountError}
          />

          <CombinedInput
            inputClass={css.combinedInput}
            containerClass={css.combinedInputContainer}
            inputContainerClass={cn(css.wideInputContainer)}
            loaderClass={css.loader}
            readOnly
            label='You get'
            {...formObj.to_currency.input}
            value={to_amount ? `${formatNumber(to_amount)}` : ''}
            error={error || fromAmountError}
            appendedComponents={{
              select: (
                <Select hasSearch item={CurrencyItem} className={css.inputSelect} {...formObj.to_currency.select} />
              ),
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
            {formType === formTypes.buy ? `Buy ${currencyName}` : `Sell ${currencyName}`}
          </Button>
          {/*
        {!fromAmountError && error ? <div className={css.error}>{error}</div> : null} */}
        </div>
        {urlParams?.fullPage && (
          <>
            <div className={css.fullPage}>
              <Lock className={css.icon} />
              <p className={css.text}>
                This transaction is secure, allowing you to pay with your card, bank transfer, or other methods with
                complete confidence.
              </p>
            </div>
            <div className={css.poweredByText}>
              <p>Powered by</p>
              <GuardarianWithoutLogo />
            </div>
          </>
        )}
      </>
    );
  }

  return null;
};

export { Calculator };
