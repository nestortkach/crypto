import React, { useEffect, useState } from 'react';

import { Title } from 'components/Title';
import { Text } from 'components/Text';
import { Calculator } from 'components/Calculator/Calculator';
import { formTypes } from 'components/Calculator/constants';
import { breakpoints, useBreakPoint } from 'hooks/useResponsive';

import css from './ExchangeWithCalculatorSection.module.scss';

export const ExchangeWithCalculatorSection = ({
  cryptoCurrency = 'ETH',
  fiatCurrency = 'CNY',
  title = 'Buy ETH with UnionPay',
  description = '',
  logo = '/union-pay.svg',
}) => {
  const [urlParams, setUrlParams] = useState(null);

  const breakpoint = useBreakPoint();
  const isMobile = breakpoint === breakpoints.xs;

  useEffect(() => {
    const UrlSearchParams = new URLSearchParams(window.location.search);

    const data = {
      defaultCryptoCurrency: UrlSearchParams.get('default_crypto_currency') || cryptoCurrency,
      defaultCryptoNetwork: UrlSearchParams.get('default_crypto_network'),
      defaultFiatCurrency: UrlSearchParams.get('default_fiat_currency') || fiatCurrency,
      defaultSide: UrlSearchParams.get('default_side') || formTypes.buy,
    };

    setUrlParams(data);
  }, []);

  return (
    <section className={css.component}>
      <div className={css.content}>
        <Title size='xl' className={css.title}>
          {title}
        </Title>

        {isMobile && urlParams && <Calculator className={css.calc} urlParams={urlParams} />}

        <Text size='md' className={css.subText}>
          {description}
        </Text>

        <div className={css.paymentMethods}>
          <img src={logo} alt={fiatCurrency} />
        </div>
      </div>

      {!isMobile && urlParams && (
        <div className={css.formWrap}>
          <Calculator className={css.calc} urlParams={urlParams} />
        </div>
      )}
    </section>
  );
};
