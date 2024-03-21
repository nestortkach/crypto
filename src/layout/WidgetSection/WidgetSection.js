import React, { useEffect, useState } from 'react';

import { Text } from 'components/Text';
import { formTypes } from 'components/Calculator/constants';
import { breakpoints, useBreakPoint } from 'hooks/useResponsive';
import { Calculator } from '../../components/Calculator/Calculator';

import css from './WidgetSection.module.scss';

const WidgetSection = () => {
  const [urlParams, setUrlParams] = useState(null);

  const breakpoint = useBreakPoint();
  const isMobile = breakpoint === breakpoints.xs;

  useEffect(() => {
    const UrlSearchParams = new URLSearchParams(window.location.search);

    const data = {
      defaultCryptoCurrency: UrlSearchParams.get('default_crypto_currency'),
      defaultCryptoNetwork: UrlSearchParams.get('default_crypto_network'),
      defaultFiatCurrency: UrlSearchParams.get('default_fiat_currency'),
      defaultSide: UrlSearchParams.get('default_side') || formTypes.buy,
    };

    setUrlParams(data);
  }, []);

  return (
    <section className={css.component}>
      <div className='container'>
        <div className={css.flex}>
          <div className={css.content}>
            {isMobile && urlParams && <Calculator isWidget className={css.calc} urlParams={urlParams} />}

            <h2 className={css.title}>How it works</h2>

            <Text size='md' className={css.subText}>
              Plug and play fully customizable widget for your website.
            </Text>

            <h3 className={css.listTitle}>Features:</h3>
            <div className={css.list}>
              <p className={css.listItem}>Set default values</p>
              <p className={css.listItem}>Set default coins</p>
              <p className={css.listItem}>Transparent fees</p>
              <p className={css.listItem}>Set specific buy or sell option</p>
              <p className={css.listItem}>White label solution with your brand style</p>
              <p className={css.listItem}>
                Simple to integrate: <br /> {"<iframe src='url' title='description'></iframe>"}
              </p>
            </div>
          </div>

          {!isMobile && urlParams && (
            <div className={css.formWrap}>
              <Calculator isWidget className={css.calc} urlParams={urlParams} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { WidgetSection };
