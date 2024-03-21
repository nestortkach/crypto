import React, { memo } from 'react';
import Image from 'next/image';
import { Button } from 'components/Button/Button';
import Link from 'next/link';

import css from './BannerSection.module.scss';

import { useBreakPoint } from 'hooks/useResponsive';

const BannerSection = memo(({ id, status, singleSubPage }) => {
  const breakpoint = useBreakPoint();

  return (
    <div className={css.section}>
      <div className={css.mainWrapper}>
        {breakpoint === 'laptop' && (
          <div className={css.box}>
            <img className={css.image} src='/Button.png' />
            <div className={css.textBlock}>
              <h2>Ready for takeoff?</h2>
              <p>Contact our team and start reaping your benefits already today!</p>
              <Link href='https://guardarian.com/for-partners#contactUsCrypto'>
                <Button className={css.actionButton}>
                  <span>Talk to us</span>
                </Button>
              </Link>
            </div>
          </div>
        )}
        {breakpoint !== 'laptop' && (
          <div className={css.integrateUsSection}>
            <div className={css.wrapper}>
              <h3 className={css.heading}>Ready for takeoff?</h3>
              <p className={css.subheading}>Contact our team and start reaping your benefits already today!</p>
              <Link href='https://guardarian.com/for-partners#contactUsCrypto'>
                <Button className={css.actionButton}>
                  <span>Talk to us</span>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

BannerSection.displayName = 'BannerSection';

export { BannerSection };
