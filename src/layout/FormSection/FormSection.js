// import { Button } from 'components/Button';
import { Calculator } from 'components/Calculator/Calculator';
import { formTypes } from 'components/Calculator/constants';

// import { Title } from 'components/Title';
import Link from 'next/link';
import { breakpoints, useBreakPoint } from 'hooks/useResponsive';
// import { useRouter } from 'next/router';
import React, { memo, useEffect, useState } from 'react';

import css from './FormSection.module.scss';
import css2 from './FormSection2.module.scss';

const FormSection = memo(() => {
  const [urlParams, setUrlParams] = useState(null);
  // const router = useRouter();

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
              <h1>
                Best place to buy{' '}
                <span className={css2.bold}>
                  over <Link href='/currencies'>400 crypto</Link>
                </span>
              </h1>

              <ul className={css.benefitsList}>
                <li>Zero extra costs</li>
                <li>Fast and friendly verification</li>
                <li>5+ payment options</li>
              </ul>
              <div className={css2.paymentList}>
                {/* {
                  breakpoint === "mobile" ?
                <>
                <img src='/payment-methods/visa.svg' alt='Visa' />
                <img src='/payment-methods/mastercard_new.svg' alt='MC' />
                <img src='/payment-methods/sepa_new.svg' alt='SEPA' />
                <img src='/payment-methods/swift.svg' alt='Swift' />
                <img src='/payment-methods/faster-pay.svg' alt='FasterPay' />
                  </>
                  :
                <> */}
                <img src='/payment-methods/visa.svg' alt='Visa' />
                <img src='/payment-methods/mastercard_new.svg' alt='MC' />
                <img src='/payment-methods/sepa_new.svg' alt='SEPA' />
                <img src='/payment-methods/swift.svg' alt='Swift' />
                <img src='/payment-methods/faster-pay.svg' alt='FasterPay' />
                <img src='/payment-methods/google_pay_new_logo.svg' alt='GooglePay' />
                <img src='/payment-methods/apple-pay-new.svg' alt='ApplePay' />
                {/* </>
                } */}
              </div>
            </div>

            <div className={css2.calculatorArea}>
              {isMobile && urlParams && <Calculator className={css.calc} urlParams={urlParams} />}

              {!isMobile && urlParams && (
                <div className={css.formWrap}>
                  <Calculator className={css.calc} urlParams={urlParams} />
                  <div className={css.glass} />
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
});

FormSection.displayName = 'FormSection';

export { FormSection };
