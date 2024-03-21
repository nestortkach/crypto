import React, { memo, useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import Link from 'next/link';

import { selectFiatCurrenciesList, selectCryptoCurrenciesList } from 'utils/store/features/coinsSlice';
import { changeColors } from 'utils/changeCalculatorTheme';
import { Calculator } from 'components/CalculatorWidget/v1/components/Calculator';
import { Button } from 'components/Button';
import { useBreakPoint } from 'hooks/useResponsive';

import css from './WidgetSection.module.scss';
import { CopyCode } from './components/CopyCode';
import { Customise } from './components/CustomisationForm';
import { numberRegex, maxValueLength, defaultWidgetsData } from './constants';

const WidgetSection = memo(({ isPartnerUrl }) => {
  const [widgetData, setWidgetData] = useState(defaultWidgetsData);

  const fiatCurrenciesListWidget = useSelector(selectFiatCurrenciesList);
  const cryptoCurrenciesListWidget = useSelector(selectCryptoCurrenciesList);

  const toggleFormType = useCallback(
    (e) => {
      const buttonName = e.target.name;
      setWidgetData({ ...widgetData, type: buttonName.toLowerCase() });
    },
    [widgetData],
  );

  const toggleFlowType = useCallback(
    (e) => {
      const buttonName = e.target.name;
      if (!buttonName) {
        setWidgetData({ ...widgetData, defaultSide: '', sideToggleDisabled: '' });
        return;
      }
      setWidgetData({ ...widgetData, defaultSide: buttonName.toLowerCase(), sideToggleDisabled: true });
    },
    [widgetData],
  );

  const copyText = useMemo(
    () =>
      `<iframe
          height="625"
          title="Guardarian Widget"
          src="https://guardarian.com/calculator/v1?partner_api_token=${widgetData?.xApiKey || 'YOUR_API_KEY'}&theme=${
        widgetData?.theme
      }&type=${widgetData?.type}${
        widgetData?.defaultFiatAmount ? `&default_fiat_amount=${widgetData?.defaultFiatAmount}` : ''
      }${widgetData?.defaultFiatCurrency ? `&default_fiat_currency=${widgetData?.defaultFiatCurrency}` : ''}${
        widgetData?.defaultCryptoCurrency ? `&default_crypto_currency=${widgetData?.defaultCryptoCurrency}` : ''
      }${
        widgetData?.cryptoCurrenciesList
          ? `&crypto_currencies_list=${encodeURIComponent(JSON.stringify(widgetData?.cryptoCurrenciesList))}`
          : ''
      }${
        widgetData?.fiatCurrenciesList
          ? `&fiat_currencies_list=${encodeURIComponent(JSON.stringify(widgetData?.fiatCurrenciesList))}`
          : ''
      }${widgetData?.defaultSide ? `&default_side=${widgetData?.defaultSide}&side_toggle_disabled=true` : ''}" 
      />`,
    [widgetData],
  );

  const handleChangeCryptoCurrenciesList = useCallback((currencies) => {
    const filteredCurrencies = currencies
      .filter((el) => el.isSelected)
      .map((el) => ({ ticker: el.id, network: el.network }));

    setWidgetData((prev) => ({
      ...prev,
      cryptoCurrenciesList: filteredCurrencies.length > 0 ? filteredCurrencies : '',
    }));
  }, []);

  const handleChangeFiatCurrenciesList = useCallback((currencies) => {
    const filteredCurrencies = currencies
      .filter((el) => el.isSelected)
      .map((el) => ({ ticker: el.id, network: el.network }));

    setWidgetData((prev) => ({
      ...prev,
      fiatCurrenciesList: filteredCurrencies.length > 0 ? filteredCurrencies : '',
    }));
  }, []);

  const toggleFormAmount = useCallback(
    (e) => {
      const value = e.target.value.replace(',', '.');

      if (numberRegex.test(value) && value.length <= maxValueLength) {
        setWidgetData({ ...widgetData, defaultFiatAmount: value });
      }
    },
    [widgetData],
  );

  const toggleFormApiKey = useCallback(
    (e) => {
      const { value } = e.target;

      setWidgetData({ ...widgetData, xApiKey: value });
    },
    [widgetData],
  );

  const toggleFormTheme = useCallback(
    (e) => {
      const buttonName = e.target.name;
      setWidgetData({ ...widgetData, theme: buttonName.toLowerCase() });
    },
    [widgetData],
  );

  const handleChangeDefaultCrypto = useCallback(
    (currency) => {
      setWidgetData((prev) => ({ ...prev, defaultCryptoCurrency: currency }));
    },
    [widgetData],
  );

  const handleChangeDefaultFiat = useCallback(
    (currency) => {
      setWidgetData((prev) => ({ ...prev, defaultFiatCurrency: currency }));
    },
    [widgetData],
  );

  useEffect(() => {
    if (widgetData) {
      changeColors(widgetData?.theme, widgetData.background || 'black');
    }
  }, [widgetData?.theme, widgetData?.background]);

  const breakpoint = useBreakPoint();

  if (isPartnerUrl) {
    return (
      <>
        {!isPartnerUrl && (
          <div className={cn(css.integrateUs, { [css.integrateUsPartnerUrl]: isPartnerUrl })}>
            <div className={cn({ container: !isPartnerUrl })}>
              <div className={cn(css.integrateUsVia)}>
                <h2>Integrate us via:</h2>
                <div className={css.actions}>
                  <Button className={cn(css.actionButton, css.buttonChosen)}>
                    <span>Widget</span>
                  </Button>
                  <a href='/api-doc' target='_blank' className={css.actionButton}>
                    <span>API</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={cn({ [css.widgetSection]: !isPartnerUrl, [css.widgetSectionPartnerUrl]: isPartnerUrl })}>
          <div className={cn({ container: !isPartnerUrl })}>
            <div
              className={cn({
                [css.widgetContainer]: !isPartnerUrl,
                [css.widgetContainerPartnerUrl]: isPartnerUrl,
                [css.wide]: widgetData?.type === 'wide',
              })}
            >
              {widgetData && (
                <>
                  <div className={cn(css.customizeContainer, { [css.customizePartnerUrl]: isPartnerUrl })}>
                    <div className={css.textContainer}>
                      <div className={css.title}>Customise</div>
                      {!isPartnerUrl && (
                        <div className={css.text}>
                          Widget is the easiest way to integrate Guardarian, you can create{' '}
                          <a className={css.link} href='https://partner.guardarian.com/sign-up'>
                            partner account
                          </a>{' '}
                          and start earning commision of its trading volume 💰
                        </div>
                      )}
                    </div>

                    <Customise
                      isPartnerUrl={isPartnerUrl}
                      widgetData={widgetData}
                      toggleFormType={toggleFormType}
                      toggleFlowType={toggleFlowType}
                      toggleFormTheme={toggleFormTheme}
                      toggleFormAmount={toggleFormAmount}
                      toggleFormApiKey={toggleFormApiKey}
                      handleChangeFiatCurrenciesList={handleChangeFiatCurrenciesList}
                      handleChangeCryptoCurrenciesList={handleChangeCryptoCurrenciesList}
                      handleChangeDefaultCrypto={handleChangeDefaultCrypto}
                      handleChangeDefaultFiat={handleChangeDefaultFiat}
                      fiatCurrenciesList={fiatCurrenciesListWidget?.map((el) => ({
                        ...el,
                        isSelected: false,
                        isDefault: el.id === 'EUR',
                      }))}
                      cryptoCurrenciesList={cryptoCurrenciesListWidget?.map((el) => ({
                        ...el,
                        isSelected: false,
                        isDefault: el.id === 'BTC',
                      }))}
                    />
                    {!isPartnerUrl && <CopyCode isPartnerUrl={isPartnerUrl} text={copyText} />}
                  </div>

                  <div
                    className={cn(css.calculatorContainer, {
                      [css.wideCalculatorContainer]: widgetData?.type === 'wide',
                    })}
                  >
                    <div className={cn(css.calcContainer, { [css.calcContainerPartner]: isPartnerUrl })}>
                      <div className={css.title}>Result</div>
                      <Calculator
                        className={cn(css.calc, { [css.wideCalc]: widgetData?.type === 'wide' })}
                        urlParams={widgetData}
                      />
                    </div>
                    {isPartnerUrl && <CopyCode isPartnerUrl={isPartnerUrl} text={copyText} />}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={css.section}>
      <div className={css.widgetSectionWrapper}>
        <div className={css.integrateUs}>
          <div>
            <div className={css.integrateUsVia}>
              <div>
                <h2>Use our plug-and-play solution</h2>
              </div>
              <div className={css.actions}>
                <p>
                  You don’t need any technical knowledge to integrate our on-ramp. Simply make your widget look how you
                  want and insert the code into your webpage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {breakpoint === 'mobile' || breakpoint !== 'laptop' ? (
          <div className={css.widgetSectionMobile}>
            <div className='container'>
              <div className={cn(css.widgetContainer, { [css.wide]: widgetData?.type === 'wide' })}>
                {widgetData && (
                  <>
                    <div className={css.customizeContainer}>
                      <Customise
                        widgetData={widgetData}
                        toggleFormType={toggleFormType}
                        toggleFlowType={toggleFlowType}
                        toggleFormTheme={toggleFormTheme}
                        toggleFormAmount={toggleFormAmount}
                        toggleFormApiKey={toggleFormApiKey}
                        handleChangeFiatCurrenciesList={handleChangeFiatCurrenciesList}
                        handleChangeCryptoCurrenciesList={handleChangeCryptoCurrenciesList}
                        handleChangeDefaultCrypto={handleChangeDefaultCrypto}
                        handleChangeDefaultFiat={handleChangeDefaultFiat}
                        fiatCurrenciesList={fiatCurrenciesListWidget?.map((el) => ({
                          ...el,
                          isSelected: false,
                          isDefault: el.id === 'EUR',
                        }))}
                        cryptoCurrenciesList={cryptoCurrenciesListWidget?.map((el) => ({
                          ...el,
                          isSelected: false,
                          isDefault: el.id === 'BTC',
                        }))}
                      />
                      {/* <CopyCode text={copyText} /> */}
                      <Link href='https://partner.guardarian.com/sign-up?_ga=2.52153312.870711640.1680451641-1843201250.1671621385'>
                        <Button className={css.actionButton}>
                          <span>Integrate now</span>
                        </Button>
                      </Link>
                    </div>

                    <div
                      className={cn(css.calculatorContainer, {
                        [css.wideCalculatorContainer]: widgetData?.type === 'wide',
                      })}
                    >
                      <Calculator
                        className={cn(css.calc, { [css.wideCalc]: widgetData?.type === 'wide' })}
                        urlParams={widgetData}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className={css.widgetSection}>
              <div className={css.containerMobile}>
                <div className={cn(css.widgetContainer, { [css.wide]: widgetData?.type === 'wide' })}>
                  {widgetData && (
                    <>
                      <div className={css.customizeContainer}>
                        <div className={css.title}>Customise</div>
                        <Customise
                          widgetData={widgetData}
                          toggleFormType={toggleFormType}
                          toggleFlowType={toggleFlowType}
                          toggleFormTheme={toggleFormTheme}
                          toggleFormAmount={toggleFormAmount}
                          toggleFormApiKey={toggleFormApiKey}
                          handleChangeFiatCurrenciesList={handleChangeFiatCurrenciesList}
                          handleChangeCryptoCurrenciesList={handleChangeCryptoCurrenciesList}
                          handleChangeDefaultCrypto={handleChangeDefaultCrypto}
                          handleChangeDefaultFiat={handleChangeDefaultFiat}
                          fiatCurrenciesList={fiatCurrenciesListWidget?.map((el) => ({
                            ...el,
                            isSelected: false,
                            isDefault: el.id === 'EUR',
                          }))}
                          cryptoCurrenciesList={cryptoCurrenciesListWidget?.map((el) => ({
                            ...el,
                            isSelected: false,
                            isDefault: el.id === 'BTC',
                          }))}
                        />
                        {/* <CopyCode text={copyText} /> */}
                        <Link href='https://partner.guardarian.com/sign-up?_ga=2.52153312.870711640.1680451641-1843201250.1671621385'>
                          <Button className={css.actionButton}>
                            <span>Integrate now</span>
                          </Button>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className={css.widgetSection2}>
              <div className={css.containerMobile}>
                <div
                  className={cn(css.calculatorContainer, {
                    [css.wideCalculatorContainer]: widgetData?.type === 'wide',
                  })}
                >
                  <div className={cn(css.calcContainer, { [css.calcContainerPartner]: isPartnerUrl })}>
                    <div className={css.title}>Result</div>
                    <Calculator
                      className={cn(css.calc, { [css.wideCalc]: widgetData?.type === 'wide' })}
                      urlParams={widgetData}
                    />
                  </div>
                  {isPartnerUrl && <CopyCode isPartnerUrl={isPartnerUrl} text={copyText} />}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

WidgetSection.displayName = 'WidgetSection';

export { WidgetSection };
