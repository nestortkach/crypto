import React, { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import cn from 'classnames';
import HideClickOutside from '@coxy/react-click-outside';

import { deleteToken } from 'utils/checkLocalStorageExpire';

import css from './NavDropdown.module.scss';

import { guardarianRecurringPaymentsDisabledPublic } from '../../../config';
import CustomerCabinetIntegrate from '../Icons/CustomerCabinetIntegrate';

const recurringPaymentsDisabled = guardarianRecurringPaymentsDisabledPublic === 'true';

export const NavDropdown = ({ item, isDark, loggedIn, logout, alignDropdownRight }) => {
  const [show, setShow] = useState(false);
  const classes = cn(css.dropdownMenu, { [css.active]: show, [css.alignRight]: alignDropdownRight });

  const router = useRouter();

  const handleLogout = () => {
    logout();
    deleteToken();
    router.push('/');
  };

  return (
    <div
      className={cn(css.dropdown, { [css.isWhite]: isDark }, { [css.noPadding]: loggedIn })}
      onClick={() => setShow((prev) => !prev)}
    >
      <div className={isDark ? css.dropdownContentDarkIntegrateUs : css.dropdownContent}>
        {loggedIn ? (
          <div className={isDark ? css.loginLinkAuth : css.loginLinkLight}>
            <CustomerCabinetIntegrate />
          </div>
        ) : (
          item.title
        )}
      </div>

      <HideClickOutside onClose={() => setShow(false)} visible={show}>
        <div className={classes}>
          {item.children.map((c) => {
            if (c.onClick) {
              return (
                <Link key={c.path + c.title} href=''>
                  <span className={cn(css.styledLink, css.logout)} onClick={handleLogout}>
                    {c.title}
                  </span>
                </Link>
              );
            }

            if (recurringPaymentsDisabled && c.title === 'Subscriptions') {
              return null;
            }
            return (
              <Link key={c.path + c.title} href={c.path}>
                <a className={c.type && css.childrenTitle}>
                  {c.type ? (
                    <button type='button' className={css.styledLinkButton}>
                      {c.title}
                    </button>
                  ) : (
                    c.title
                  )}
                  <image>{c.new && <img src='/services/New.png' className={css.newImage} />}</image>
                </a>
              </Link>
            );
          })}
        </div>
      </HideClickOutside>
    </div>
  );
};
