import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import css from './Logo.module.scss';

export const Logo = ({ className, mobile, isDark }) => (
  <Link href='/'>
    <a className={classNames(css.logo, className)}>
      {mobile ? (
        <>
          <img
            className={css.logoPng}
            src={isDark ? '/main-logo-mobile-dark.svg' : '/main-logo-mobile.svg'}
            alt='logo-guardarian'
          />
        </>
      ) : (
        <>
          <img className={css.logoPng} src={isDark ? '/main-logo-dark.svg' : '/main-logo.svg'} alt='logo-guardarian' />
        </>
      )}
    </a>
  </Link>
);
