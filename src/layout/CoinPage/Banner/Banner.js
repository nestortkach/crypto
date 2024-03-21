import React, { useEffect } from 'react';
import classNames from 'classnames';

import { Title } from 'components/Title';
import { Text } from 'components/Text';
import { Calculator } from 'components/CalculatorWidget/v1/components/Calculator';
import { formTypes } from 'components/CalculatorWidget/v1/components/Calculator/constants';
import { xApiKey } from 'components/Calculator/constants';

import { changeCalculatorTheme } from 'utils/changeCalculatorTheme';
import { useBreakPoint, breakpoints } from 'hooks/useResponsive';

import css from './Banner.module.scss';

export const Banner = ({
  creators,
  title,
  text,
  info,
  calculatorTheme,
  currency,
  network,
  fiatCurrency,
  type = formTypes.buy,
}) => {
  const breakpoint = useBreakPoint();
  const isResponsive = breakpoint === breakpoints.xs;

  const data = {
    partnerApiToken: xApiKey,
    defaultSide: type,
    defaultCryptoCurrency: currency,
    defaultFiatCurrency: fiatCurrency,
    defaultCryptoNetwork: network,
    defaultTitle: title,
  };

  const componentClasses = classNames(css.component, {
    [css.doge]: calculatorTheme === 'doge',
  });

  const coinInfoTitleClasses = classNames(css.coinInfoTitle, {
    [css.dogeCoinInfoTitle]: calculatorTheme === 'doge',
  });

  useEffect(() => {
    changeCalculatorTheme(calculatorTheme);
  }, []);

  return (
    <div className={componentClasses}>
      <div className='container'>
        <div className={css.content}>
          <div className={classNames(css.contentPart, css.textBlock)}>
            <Title className={css.title} tag='h1' size='xl'>
              {title}
            </Title>
            {isResponsive && <Calculator urlParams={data} />}

            <Text className={css.subtext} tag='p' size='xl'>
              {text}
            </Text>

            <div className={css.coinInfo}>
              <div className={css.coinInfoBox}>
                <p className={coinInfoTitleClasses}>Release</p>
                <p className={css.coinInfoText}>{info.release}</p>
              </div>
              <div className={css.coinInfoBox}>
                <p className={coinInfoTitleClasses}>Ticker</p>
                <p className={css.coinInfoText}>{info.ticker}</p>
              </div>
              <div className={css.coinInfoBox}>
                {creators ? (
                  <p className={coinInfoTitleClasses}>Creators</p>
                ) : (
                  <p className={coinInfoTitleClasses}>{title.includes('Buy Toncoin (TON)') ? '' : 'Creator'}</p>
                )}

                <p className={css.coinInfoText}>{info.creator}</p>
              </div>
            </div>

            <div className={css.paymentMethods}>
              <img src='/payment-methods/visa.svg' alt='Visa' />
              <img src='/payment-methods/mastercard.svg' alt='Mastercard' />
              <img src='/payment-methods/sepa.svg' alt='Sepa' />
              <img src='/payment-methods/swift.svg' alt='Swift' />
              <img src='/payment-methods/faster-pay.svg' alt='Swift' />
              <img src='/payment-methods/google_pay_new_logo.svg' alt='Swift' />
              <img src='/payment-methods/apple-pay-new.svg' alt='ApplePay' />
            </div>
          </div>

          {!isResponsive && (
            <div className={css.calculator}>
              <Calculator urlParams={data} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
