import React, { memo, useState, useEffect, useCallback, useMemo } from 'react';
import { useBreakPoint } from 'hooks/useResponsive';
import { Button } from 'components/Button/Button';

import css from './ServicePrivilegesSection.module.scss';

const mockedDataBlocks = [
  {
    title: 'Fully assisted onboarding',
    subtitle: 'We will guide you through the integration & get you started with your partner cabinet',
    image: '/ServicePrivilegesSection/icon1.png',
  },
  {
    title: '24/7 customer support',
    subtitle: 'Your dedicated customer support manager will be there whenever you need help',
    image: '/ServicePrivilegesSection/icon2.png',
  },
  {
    title: 'Licensed and compliant',
    subtitle: 'Guardarian is EU-licensed and offers complete regulation compliance',
    image: '/ServicePrivilegesSection/icon3.png',
  },
  {
    title: 'Superior security',
    subtitle: 'Enjoy 0 chargeback with our excellent fraud protection and secure KYC verification',
    image: '/ServicePrivilegesSection/icon4.png',
  },
];

const ServicePrivilegesSection = memo(() => {
  const breakpoint = useBreakPoint();

  return (
    <div className={css.section}>
      <div className={css.privilegesWrapper}>
        <div className={css.integrateUsSection}>
          <div className={css.wrapper}>
            <div>
              <div>
                <h2 className={css.heading}>A service you can rely on</h2>
              </div>
              <div>
                <p className={css.subheading}>
                  Keep your peace of mind with our outstanding customer support & security measures
                </p>
              </div>
            </div>

            <div className={css.sectionBlocks}>
              {mockedDataBlocks.map((item, index) => {
                return (
                  <div className={css.sectionBlock}>
                    <div className={css.imageBlock}>
                      <img
                        style={
                          index === 0
                            ? { width: 151, height: 82 }
                            : index === 1
                            ? { width: 99, height: 106 }
                            : { width: 100, height: 90 }
                        }
                        src={item.image}
                      />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ServicePrivilegesSection.displayName = 'ServicePrivilegesSection';

export { ServicePrivilegesSection };
