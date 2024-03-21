import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { changeColors } from 'utils/changeCalculatorTheme';

import { Calculator } from './components/Calculator';
import { formTypes } from './components/Calculator/constants';
import styles from './styles.module.scss';
import { partnerApiTokens } from './components/Calculator/utils';

const CalculatorWidget = ({ widgetDataProp, containerClass, calculatorClass }) => {
  const [widgetData, setWidgetData] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const data = {
      partnerApiToken: urlParams.get('partner_api_token'),
      defaultSide: urlParams.get('default_side') || formTypes.buy,
      sideToggleDisabled: urlParams.get('side_toggle_disabled'),
      sellButtonDisabled: urlParams.get('sell_button_disabled'),
      defaultCryptoCurrency: urlParams.get('default_crypto_currency'),
      defaultCryptoNetwork: urlParams.get('default_crypto_network'),
      defaultFiatCurrency: urlParams.get('default_fiat_currency'),
      defaultFiatAmount: urlParams.get('default_fiat_amount'),
      cryptoCurrenciesList: urlParams.get('crypto_currencies_list'),
      fiatCurrenciesList: urlParams.get('fiat_currencies_list'),
      depositType: urlParams.get('deposit_type'),
      payoutAddress: urlParams.get('payout_address'),
      payoutExtraId: urlParams.get('payout_extra_id'),
      skipChoosePayoutAddress: urlParams.get('skip_choose_payout_address')
        ? urlParams.get('skip_choose_payout_address') === 'true'
        : undefined,
      paymentCategory: urlParams.get('payment_category'),
      skipChoosePaymentCategory: urlParams.get('skip_choose_payment_category')
        ? urlParams.get('skip_choose_payment_category') === 'true'
        : undefined,
      redirectsSuccessful: urlParams.get('redirects_successful'),
      redirectsFailed: urlParams.get('redirects_failed'),
      redirectsCancelled: urlParams.get('redirects_cancelled'),
      email: urlParams.get('email'),
      phoneNumber: urlParams.get('phone_number'),
      usRegionAlpha2: urlParams.get('us_region_alpha_2'),
      countryAlpha2: urlParams.get('country_alpha_2'),
      streetAddress: urlParams.get('street_address'),
      aptNumber: urlParams.get('apt_number'),
      postIndex: urlParams.get('postIndex'),
      firstName: urlParams.get('first_name'),
      lastName: urlParams.get('last_name'),
      region: urlParams.get('region'),
      city: urlParams.get('city'),
      kycSharedToken: urlParams.get('kyc_shared_token'),
      kycSharedTokenProvider: urlParams.get('kyc_shared_token_provider'),
      theme: urlParams.get('theme'),
      type: urlParams.get('type'),
      fullPage: urlParams.get('full_page'),
    };

    if (data.cryptoCurrenciesList) {
      data.cryptoCurrenciesList = JSON.parse(decodeURIComponent(data.cryptoCurrenciesList));
    }

    if (data.fiatCurrenciesList) {
      data.fiatCurrenciesList = JSON.parse(decodeURIComponent(data.fiatCurrenciesList));
    }

    if (widgetDataProp) {
      setWidgetData(widgetDataProp);
      changeColors(widgetDataProp.theme, urlParams.get('background') || 'black');

      return;
    }

    setWidgetData(data);
    changeColors(data.theme, urlParams.get('background') || 'black');
  }, []);

  return (
    <div className={cn(styles.container, containerClass, { [styles.fullPage]: widgetData?.fullPage === 'true' })}>
      {widgetData?.fullPage && partnerApiTokens[widgetData?.partnerApiToken] && (
        <header className={styles.fullPage_header}>
          <Image src='/main-logo.svg' alt='logo' width='180' height='40' />
          <Image
            src={`/partners-section/${partnerApiTokens[widgetData?.partnerApiToken]}.svg`}
            alt={`${partnerApiTokens[widgetData?.partnerApiToken]} logo`}
            width='40'
            height='40'
          />
        </header>
      )}
      {widgetData && (
        <Calculator
          className={cn(styles.calc, { [styles.wideCalc]: widgetData?.type === 'wide' }, calculatorClass)}
          urlParams={widgetData}
        />
      )}
    </div>
  );
};

export default CalculatorWidget;
