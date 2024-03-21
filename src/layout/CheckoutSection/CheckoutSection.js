import React, { memo, useState } from 'react';
import Link from 'next/link';
import css from './CheckoutSection.module.scss';
import { Button } from 'components/Button';
import { useBreakPoint } from 'hooks/useResponsive';

const mockedButtons = [
  {
    title: 'CoinEx',
  },
  {
    title: 'Zelcore',
  },
  {
    title: 'ProBit',
  },
];

const CheckoutSection = memo(() => {
  const breakpoint = useBreakPoint();
  const [activeButton, setActiveButton] = useState(0);
  return (
    <div className={css.section}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.apiSectionHeading}>
            <div className={css.heading}>
              <h2>
                Designed to promote <div>Your brand</div>
              </h2>
            </div>
            <div className={css.subheading}>
              <p>
                You don’t need any technical knowledge to integrate our on-ramp. Simply make your widget look how you
                want and insert the code into your webpage.
              </p>
            </div>
          </div>

          <div className={css.partnersButtons}>
            <div className={css.partnersButtonBlock}>
              {mockedButtons.map((item, index) => {
                return (
                  <button
                    onClick={() => setActiveButton(index)}
                    className={activeButton === index ? css.activePartnerButton : css.partnerButton}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>

          {activeButton === 0 ? (
            <div className={css.imageBlock}>
              <img style={{ width: '100%', borderRadius: '10px' }} src='/CheckoutSection/CoinEx.webp' />
            </div>
          ) : activeButton === 1 ? (
            <div className={css.imageBlock}>
              <img style={{ width: '100%', borderRadius: '10px' }} src='/CheckoutSection/Zelcore.webp' />
            </div>
          ) : (
            <div className={css.imageBlock}>
              <img style={{ width: '100%', borderRadius: '10px' }} src='/CheckoutSection/Probit.webp' />
            </div>
          )}

          <div className={css.integrateButton}>
            <Link href='https://partner.guardarian.com/sign-up?_ga=2.52153312.870711640.1680451641-1843201250.1671621385'>
              <Button className={css.actionButton}>
                <span>Integrate now</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

CheckoutSection.displayName = 'CheckoutSection';

export { CheckoutSection };
