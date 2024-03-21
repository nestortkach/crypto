import React, { memo } from 'react';
import Image from 'next/image';
import { Button } from 'components/Button/Button';
import Link from 'next/link';

import css from './IntegrateUsBanner.module.scss';

import { useBreakPoint } from 'hooks/useResponsive';

const IntegrateUsBanner = memo(({ id, status, singleSubPage }) => {
  const breakpoint = useBreakPoint();

  return (
    <div className={css.integrateUsWrapper}>
      <div className={css.section}>
        <div className={css.integrateUsSection}>
          <div>
            <div className={css.wrapper}>
              <div>
                <div>
                  <h1 className={css.heading}>Let your customers buy & sell crypto from your service</h1>
                </div>
                <div>
                  <p className={css.subheading}>
                    Simple yet powerful on-ramp & off-ramp integration from an industry-leading company.
                  </p>
                </div>
                {breakpoint === 'laptop' && (
                  <div>
                    <Link href='https://partner.guardarian.com/sign-up?_ga=2.52153312.870711640.1680451641-1843201250.1671621385'>
                      <Button className={css.actionButton}>
                        <span>Integrate now</span>
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <img className={css.phonesImage} src='integrateUs/integrateUsPhones.png' alt='leftArrow' />
              </div>
              {breakpoint === 'mobile' && (
                <div>
                  <Link href='https://partner.guardarian.com/sign-up?_ga=2.52153312.870711640.1680451641-1843201250.1671621385'>
                    <Button className={css.actionButton}>
                      <span>Integrate now</span>
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

IntegrateUsBanner.displayName = 'IntegrateUsBanner';

export { IntegrateUsBanner };
