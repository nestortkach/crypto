import React, { memo, useState, useCallback } from 'react';
import Link from 'next/link';
import css from './OnRampFeatures.module.scss';
import { Button } from 'components/Button';
import { useBreakPoint } from 'hooks/useResponsive';
import { defaultWidgetsData } from '../WidgetSection/v2/constants';

const flowBtns = [
  {
    id: 0,
    title: 'Coinex',
    noDefaultSide: true,
  },
  {
    id: 1,
    title: 'Probit',
    name: 'buy_crypto',
  },
  {
    id: 2,
    title: 'Zelcore',
    name: 'sell_crypto',
  },
];

const imgarr1 = [
  {
    id: 0,
    path: '/Visa-New.svg',
  },
  {
    id: 1,
    path: '/master-card.svg',
  },
  {
    id: 2,
    path: '/sepa.svg',
  },
];
const imgarr2 = [
  {
    id: 0,
    path: '/SWIFT.svg',
  },
  {
    id: 1,
    path: '/Faster-Payments.svg',
  },
];
const imgarr3 = [
  {
    id: 0,
    path: '/Google-Pay.svg',
  },
  {
    id: 1,
    path: '/Apple-Pay.svg',
  },
  {
    id: 2,
    path: '/R-Pay.svg',
  },
];
export const OnRampFeatures = memo(() => {
  const [widgetData, setWidgetData] = useState(defaultWidgetsData);
  const [activeButton, setActiveButton] = useState(0);
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
  return (
    <div className={css.section}>
      <div className='container'>
        <div className={css.container}>
          <h2>Guardarian on-ramp features</h2>
          <div className={css.content}>
            <div className={css.paymentsWrapper}>
              <div className={css.payments}>
                {activeButton === 0 ? (
                  <div className={css.imageBlock}>
                    <img src='/CheckoutSection/CoinEx.webp' />
                  </div>
                ) : activeButton === 1 ? (
                  <div className={css.imageBlock}>
                    <img src='/CheckoutSection/Probit.webp' />
                  </div>
                ) : (
                  <div className={css.imageBlock}>
                    <img src='/CheckoutSection/Zelcore.webp' />
                  </div>
                )}
                <div className={css.partnersButtons}>
                  <div className={css.navBtns}>
                    {flowBtns.map((btn) => (
                      <Button
                        key={btn.id}
                        active={
                          btn?.name === widgetData?.defaultSide || (!widgetData?.defaultSide && btn?.noDefaultSide)
                        }
                        onClick={(e) => {
                          setActiveButton(btn.id);
                          toggleFlowType(e);
                        }}
                        name={btn?.name}
                        className={css.navBtn}
                        rounded
                        customBlue
                      >
                        {btn.title}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <div className={css.paymentsDescription}>
                <h3 className={css.paymentTitle}>Embeddable checkout</h3>
                <p className={css.paymentSubtitle}>
                  Integrate our checkout directly into your platform for a seamless customer experience. Personalise it
                  to promote your brand and build customer trust.
                </p>
              </div>
            </div>
            <div className={css.paymentsWrapperReverse}>
              <div className={css.paymentsDescription}>
                <h3 className={css.paymentTitle}>Diverse payment options</h3>
                <p className={css.optionSubtitle}>
                  Accept all the major payment methods, such as Visa, Mastercard, SEPA, SWIFT, Faster Payments, Google
                  Pay, Apple Pay, Revolut Pay, and a range of local payment options.
                </p>
              </div>

              <div className={css.card}>
                <div className={css.firstWrapper}>
                  {imgarr1.map((item) => (
                    <img key={item.id} src={item.path} className={css.imgarr1} />
                  ))}
                </div>
                <div className={css.secondWrapper}>
                  {imgarr2.map((item) => (
                    <img key={item.id} src={item.path} className={css.imgarr2} />
                  ))}
                </div>
                <div className={css.thirdWrapper}>
                  {imgarr3.map((item) => (
                    <img key={item.id} src={item.path} className={css.imgarr3} />
                  ))}
                </div>
              </div>
            </div>
            <div className={css.paymentsWrapper}>
              <div className={css.apiSection}>
                <img alt='' src='/ApiImage.jpg' />
                <div className={css.readApiButton}>
                  <Link href='/api-doc'>
                    <button type='button'>
                      <span>Read API Docs</span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className={css.paymentsDescription}>
                <h3 className={css.paymentTitle}>Custom solutions</h3>
                <p className={css.optionSubtitle}>
                  Guardarian tailors solutions to your platform’s needs, enhancing user experience. From custom designs
                  to flexible estimates and deposit ranges, we provide a perfect fit for your operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

OnRampFeatures.displayName = 'CheckoutSection';
