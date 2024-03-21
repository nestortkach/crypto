import React from 'react';
import classNames from 'classnames';

import { Title } from 'components/Title';
import { Text } from 'components/Text';
import { Calculator } from 'components/Calculator';
import { useBreakPoint, breakpoints } from 'hooks/useResponsive';

import css from './Banner.module.scss';

const data = {
  title: 'Simple way to Buy & Sell crypto with the best rates',
  subtext: '300+ cryptocurrencies two-side exchanges with simple verification and without account registration',
};

export const Banner = () => {
  const breakpoint = useBreakPoint();
  const isResponsive = breakpoint === breakpoints.xs;

  return (
    <div className={css.component}>
      <div className='container'>
        <div className={css.content}>
          <div className={classNames(css.contentPart, css.textBlock)}>
            <Title className={css.title} tag='h1' size='xl'>
              {data.title}
            </Title>
            {isResponsive && <Calculator className={css.form} />}

            <Text className={css.subtext} tag='p' size='xl'>
              {data.subtext}
            </Text>

            <footer className={css.footer}>
              <div className={css.footerItem}>
                <div className={css.icon}>
                  <img src='/rate-cloud-icon.svg' alt='' />
                </div>
                <span>Best rates possible </span>
              </div>

              <div className={css.footerItem}>
                <div className={css.icon}>
                  <img src='/fee-laptop-icon.svg' alt='' />
                </div>
                <span>Transparent fees</span>
              </div>
            </footer>
          </div>

          {!isResponsive && (
            <div className={css.form}>
              <Calculator />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
