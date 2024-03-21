// import { Button } from 'components/Button';
import { formTypes } from 'components/Calculator/constants';

// import { Title } from 'components/Title';
import Link from 'next/link';
import { breakpoints, useBreakPoint } from 'hooks/useResponsive';
// import { useRouter } from 'next/router';
import React, { memo, useEffect, useState } from 'react';
import { Button } from '../../components/Button';
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
        <div className={css2.container}>
          <section className={css2.component}>
            <div className={css2.actionArea}>
              <h1 className={css2.title}>Fiat on- and off-ramp solutions for crypto exchanges</h1>

              <p className={css2.paymentList}>
                Integrate Guardarian solutions into your CEX/ DEX platform to grow your user base and boost transaction
                volumes.
              </p>
              <div className={css2.textWrapper}>
                <Link href='https://partner.guardarian.com/sign-up'>
                  <Button size='md' green className={css2.buyButton}>
                    Integrate now
                  </Button>
                </Link>
                <Link href='https://guardarian.com/for-partners#contactUsCrypto'>
                  <Button size='md' outline className={css2.salesButton}>
                    Contact sales
                  </Button>
                </Link>
              </div>
            </div>

            <div className={css2.calculatorArea}>
              {isMobile && urlParams && <img src='/iphone-1-mobile.webp' width={279} alt='iphone' />}

              {!isMobile && urlParams && (
                <div className={css.formWrap}>
                  <img className={css2.imagePhone} src='/iphone-1.webp' width={381} alt='iphone' />
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
