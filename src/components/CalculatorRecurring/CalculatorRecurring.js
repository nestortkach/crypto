import React, { useState, useCallback, useEffect } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';
import cn from 'classnames';
import { frequencyList } from 'constants/frequency';
import Select from 'components/Select';
import { Button } from 'components/Button';
import { formatNumber } from 'components/Calculator/utils';
import { CurrencyItem } from 'components/Select/CurrencyItem';
import { Tooltip } from 'components/Tooltip/Tooltip';
import { Info } from 'components/Icons/Info';
import { ErrorMessage } from 'components/Calculator/components/ErrorMessage';
import { CombinedInput } from 'components/Calculator/components/CombinedInput';
import { maxFiatValueLength, numberRegex } from 'components/Calculator/constants';
import css from 'components/Calculator/Calculator.module.scss';
import styles from './styles.module.scss';
import { estimate, getCurrencies, createSubAndRedirectToSub } from './actions';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePicker } from './components/DatePicker/DatePicker';
import { Frequency } from './components/Frequency/Frequency';

const estimateDebounced = debounce(estimate, 400);

function CalculatorRecurring({ className, compact = false }) {
  const [error, setError] = useState('');
  const [fiatAmount, setFiatAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [cryptoAmount, setCryptoAmount] = useState({});
  const [fiatCurrency, setFiatCurrency] = useState(null);
  const [cryptoCurrency, setCryptoCurrency] = useState(null);
  const [fiatCurrenciesList, setFiatCurrenciesList] = useState([]);
  const [cryptoCurrenciesList, setCryptoCurrenciesList] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [frequency, setFrequency] = useState(frequencyList[0]);

  const isValid = Object.keys(cryptoAmount).length > 0 && !loading;

  const selectFrequency = useCallback((option) => {
    const foundFrequency = frequencyList.find((f) => f.id === option.id);

    setFrequency(foundFrequency);
  }, []);

  const selectFiat = useCallback(
    (option) => {
      const foundFiatCurrency = fiatCurrenciesList.find((f) => f.id === option.id);

      setFiatCurrency(foundFiatCurrency);
      setFiatAmount(foundFiatCurrency.default_exchange_value);
    },
    [fiatCurrenciesList],
  );

  const selectCrypto = useCallback(
    (option) => {
      const foundCryptoCurrency = cryptoCurrenciesList.find((f) => {
        if (option.network) {
          return f.id === option.id && f.network === option.network;
        }
        return f.id === option.id;
      });

      setCryptoCurrency(foundCryptoCurrency);
    },
    [cryptoCurrenciesList],
  );

  const validateAndSetFiat = useCallback((e) => {
    const value = e.target.value.replace(',', '.');

    if (numberRegex.test(value) && value.length <= maxFiatValueLength) {
      setFiatAmount(value);
      setCryptoAmount('');
    }
  }, []);

  useEffect(() => {
    const abortSignal = axios.CancelToken.source();

    setCryptoAmount('');

    estimateDebounced({
      onSuccess: setCryptoAmount,
      from_amount: fiatAmount,
      from_currency: fiatCurrency?.id,
      from_network: fiatCurrency?.network,
      to_currency: cryptoCurrency?.id,
      to_network: cryptoCurrency?.network,
      setError,
      setLoading,
      cancelToken: abortSignal.token,
    });

    return () => abortSignal.cancel('Request cancelled');
  }, [fiatAmount, fiatCurrency, cryptoCurrency]);

  useEffect(() => {
    const abortSignal = axios.CancelToken.source();

    getCurrencies({
      setError,
      setLoading,
      setFiatCurrency,
      setCryptoCurrency,
      setFiatCurrenciesList,
      setCryptoCurrenciesList,
      setFiatAmount,
      cancelToken: abortSignal.token,
    });

    return () => abortSignal.cancel('Request cancelled');
  }, []);

  return (
    <div className={cn(className, compact && styles.compact, styles.calculator)}>
      <div className={styles.pickerContainer}>
        <div>
          <h1 className={styles.title}>Auto-Invest in your favourite crypto!</h1>
          {!compact && (
            <h3 className={styles.title_description}>Regular fiat-to-crypto exchanges of pre-determined amount</h3>
          )}
        </div>
        <div className={styles.picker}>
          <DatePicker startDate={startDate} setStartDate={setStartDate} />
          <Frequency
            className={styles.frequencySelect}
            list={frequencyList}
            selected={frequency}
            onSelect={selectFrequency}
          />
        </div>
      </div>
      <div className={styles.inputsContainer}>
        <CombinedInput
          inputClass={cn(css.combinedInput, styles.combinedInput)}
          containerClass={cn(css.combinedInputContainer)}
          inputContainerClass={cn(styles.combinedInputContainer)}
          loaderClass={styles.loader}
          label='You send'
          name='You send'
          onChange={validateAndSetFiat}
          value={fiatAmount ?? 300}
          error={error}
          appendedComponents={{
            select: (
              <Select
                hasSearch
                item={CurrencyItem}
                className={css.inputSelect}
                onSelect={selectFiat}
                list={fiatCurrenciesList}
                selected={fiatCurrency}
                disabled={fiatCurrenciesList.length <= 1}
              />
            ),
            error: <ErrorMessage error={error} fromAmount={parseFloat(fiatAmount) || 0} />,
          }}
        />
        <CombinedInput
          inputClass={cn(css.combinedInput, styles.combinedInput)}
          containerClass={cn(css.combinedInputContainer)}
          inputContainerClass={cn(styles.combinedInputContainer)}
          loaderClass={styles.loader}
          readOnly
          label={
            <span className={styles.popupBox}>
              You get{' '}
              <Tooltip
                boxClassName={css.popoverBox}
                closeButtonClassName={styles.closeButton}
                tooltipClassName={styles.tooltip}
                popoverClassname={css.popover}
                text='This is expected rate. Guardarian guarantees to pick up the best possible rate on the moment of the exchange'
              >
                <Info width='14' height='14' />
              </Tooltip>
            </span>
          }
          name='You recieve'
          value={cryptoAmount?.expectedToAmount ? `${formatNumber(cryptoAmount?.expectedToAmount)}` : ''}
          error={error}
          appendedComponents={{
            select: (
              <Select
                hasSearch
                item={CurrencyItem}
                className={css.inputSelect}
                onSelect={selectCrypto}
                list={cryptoCurrenciesList}
                selected={cryptoCurrency}
                disabled={cryptoCurrenciesList.length <= 1}
              />
            ),
          }}
        />
        <Button
          onClick={() =>
            createSubAndRedirectToSub({
              fiatAmount,
              fiatCurrency,
              cryptoCurrency,
              startDate,
              frequency,
              setError,
              setLoading,
            })
          }
          fullWidth
          size='md'
          green
          id='partner-button'
          disabled={!isValid}
          className={styles.actionButton}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}

export { CalculatorRecurring };
