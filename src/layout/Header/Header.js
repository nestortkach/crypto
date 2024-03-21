import React, { memo } from 'react';
import cn from 'classnames';

import { Logo } from 'components/Logo';

import { HeaderNav } from './HeaderNav';

import css from './Header.module.scss';

export const Header = memo(({ children, hideNav, lightblue, blue, theme, isIntegrateUsPage }) => {
  const className = cn(css.backgroundBox, {
    [css.lightblue]: lightblue,
    [css.blue]: blue,
    [css[theme]]: true,
  });

  const isDark = theme === 'doge' || theme === 'none';

  return (
    <div className={className}>
      <header className={css.integrateUsHeader}>
        <div className={css.headerContent}>
          <Logo isDark={isDark} />
          {!hideNav && <HeaderNav isIntegrateUsPage={isIntegrateUsPage} isDark={isDark} />}
        </div>
      </header>

      {children}
    </div>
  );
});
