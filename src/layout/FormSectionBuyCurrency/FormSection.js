import { Calculator } from 'components/Calculator/Calculator';
import { formTypes } from 'components/Calculator/constants';
import { breakpoints, useBreakPoint } from 'hooks/useResponsive';
import React, { memo, useEffect, useState } from 'react';
import css from './FormSection.module.scss';
import css2 from './FormSection2.module.scss';
import isFunction from 'lodash/isFunction';

const FormSection = memo(
  ({
    arrowText = 'Make the first exchange to automate the next one',
    renderCalculator = (props) => <Calculator {...props} />,
  }) => {
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
      <div className={css2.wrapper}>
        <div className={css2.formWrapper}>
          <div className='container'>
            <section className={css2.component}>
              <div className={css2.actionArea}>
                <h1>Automate your crypto investments</h1>
                <p className={css2.paymentList}>
                  Set-up recurring fiat-to-crypto exchanges with Guardarian Subscriptions and watch your portfolio grow.
                </p>
                <div className={css2.textWrapper}>
                  {arrowText && <p className={css2.bottomTxt}>{arrowText}</p>}
                  <img alt='' src='/next-arrow.svg' className={css2.image} />
                </div>
              </div>
              <div className={css2.calculatorArea}>
                {isFunction(renderCalculator) && (
                  <>
                    {isMobile && urlParams && renderCalculator({ urlParams, className: css.calc })}
                    {!isMobile && urlParams && (
                      <div className={css.formWrap}>
                        {renderCalculator({ urlParams, className: css.calc })}
                        <div className={css.glass} />
                      </div>
                    )}
                  </>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  },
);

FormSection.displayName = 'FormSection';

export { FormSection };
