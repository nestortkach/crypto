import React, { useCallback, useState, useContext, memo, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { NavDropdown } from 'components/NavDropdown';
import { Button } from 'components/Button';

import { extendedLinks, desktopLinks, b2bPathnames } from 'constants/nav';

import { useBreakPoint, breakpoints } from 'hooks/useResponsive';

import { Login } from 'layout/Login';
import { CustomPopup } from 'layout/Login/CustomPopup';

import { selectIsAuth, setIsAuth } from 'utils/store//features/authSlice';
import { CrossStorage } from 'utils/context/crossStorageContext';

import css from './HeaderNav.module.scss';

import { guardarianRecurringPaymentsDisabledPublic } from '../../../../config';
import CustomerCabinetIntegrate from '../../../components/Icons/CustomerCabinetIntegrate';
import { deleteToken } from '../../../utils/checkLocalStorageExpire';

const recurringPaymentsDisabled = guardarianRecurringPaymentsDisabledPublic === 'true';

export const HeaderNav = memo(({ isDark, isIntegrateUsPage }) => {
  const dispatch = useDispatch();

  const [isOpen, toggleNav] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [transition, toggleTransition] = useState(false);
  const isAuth = useSelector(selectIsAuth);
  const [isNavOpen, setIsNavOpen] = useState({
    0: false,
  });

  const { logout, loading } = useContext(CrossStorage);

  const handlePopupClose = () => setShowForm(false);
  const handlePopupOpen = () => setShowForm(true);

  const breakpoint = useBreakPoint();
  const router = useRouter();

  const useResponsiveNav = breakpoint === breakpoints.xs || breakpoint === breakpoints.sm;

  const closeNav = useCallback(() => {
    toggleNav(false);
    setTimeout(() => toggleTransition(false), 500);
    document.body.style.overflow = 'auto';
  }, []);

  const openNav = useCallback(() => {
    toggleNav(true);
    toggleTransition(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleLogout = () => {
    logout();
    deleteToken();
    dispatch(setIsAuth(false));
    router.push('/');
  };

  const renderNavigation = useCallback(() => {
    if (useResponsiveNav) {
      return React.Children.toArray(
        extendedLinks.map((section, index) => {
          if (section.title === 'Pro Account') {
            if (isAuth) {
              return (
                <div>
                  <div className={css.sectionProAcc}>
                    <Button className={css.integrateButton} onClick={handlePopupOpen}>
                      Integrate Us
                    </Button>
                  </div>
                  <div className={css.section} key={section.title}>
                    {section.title && (
                      <div className={css.sectionTitleButton}>
                        {section.title}
                        <button type='button' onClick={handleLogout}>
                          Logout
                        </button>
                      </div>
                    )}
                    {section.links.map((item) => {
                      if (recurringPaymentsDisabled && item.title === 'Subscriptions') {
                        return null;
                      }
                      return (
                        <div key={item.id} className={css.proAccLinks}>
                          <Link key={item.path} href={item.path}>
                            <a target={item.target}>{item.title}</a>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
            return (
              <div className={css.sectionProAcc} key={section.title}>
                <Link href='/integrate-us'>
                  <Button className={css.integrateButton}>Integrate Us</Button>
                </Link>

                <Button className={css.loginButton} onClick={handlePopupOpen}>
                  Log in
                </Button>
              </div>
            );
          }
          return (
            <div className={css.section} key={section.title}>
              {section.title && (
                <div
                  onClick={() =>
                    section.title !== 'Pro Account' &&
                    setIsNavOpen((prevState) => ({
                      ...prevState,
                      [index]: !isNavOpen[index],
                    }))
                  }
                  className={css.sectionTitle}
                >
                  {section.title === 'Pro Account' ? (
                    <div className={css.sectionProAcc}>
                      <Button className={css.integrateButton} onClick={handlePopupOpen}>
                        Integrate Us
                      </Button>
                      <div className={css.proAccTitleSection}>
                        <div className={css.proAccTitle}>{section.title}</div>
                        <div className={css.logoutButton}>Logout</div>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                      <div className={css.mobileLinkTitle}>{section.title}</div>
                      <div className={isNavOpen[index] ? css.openedLinks : css.hiddenLinks}>
                        <img src='/arrowDown.svg' alt=' ' />
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div
                className={isNavOpen[index] || section.title === 'Pro Account' ? css.linksBlock : css.linksBlockHidden}
              >
                {section.links.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <a style={{ width: '100%', textAlign: 'left' }} target={item.target}>
                      {item.type === 'button' ? (
                        <div className={css.titleLinkButton}>{item.title}</div>
                      ) : (
                        <div className={css.titleLink}>{item.title}</div>
                      )}
                      {/* {item.new && <img src='/services/New.png' className={css.newImage} />} */}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          );
        }),
      );
    }
    return React.Children.toArray(
      desktopLinks.map((item) => {
        if (item.title === 'Log in' && b2bPathnames.includes(router.pathname)) {
          return (
            <span className={isDark ? css.loginLink : css.loginLinkLight}>
              <a href='https://partner.guardarian.com/'>Partners {item.title}</a>
            </span>
          );
        }

        if (item.title === 'Log in' && isAuth) {
          return <NavDropdown alignDropdownRight loggedIn={isAuth} logout={handleLogout} isDark={isDark} item={item} />;
        }

        if (item.title === 'Log in' && !isAuth) {
          return (
            <Link passHref href='#'>
              <button
                type='button'
                disabled={loading}
                onClick={handlePopupOpen}
                className={isDark ? css.loginLink : css.loginLinkLight}
              >
                <CustomerCabinetIntegrate />
              </button>
            </Link>
          );
        }

        if (item.children && item.children.length > 0) {
          return <NavDropdown isIntegrateUsPage={isIntegrateUsPage} isDark={isDark} item={item} />;
        }

        return (
          <Link key={item.title + item.path} href={item.path}>
            <a id={item.button && css.integrateUsPageButton}>{item.title}</a>
          </Link>
        );
      }),
    );
  }, [useResponsiveNav, isAuth, router.pathname, isDark, loading, isNavOpen]);

  const classes = classNames(css.headerNav, {
    [css.mobile]: useResponsiveNav,
    [css.isOpen]: isOpen,
    [css.transition]: transition,
    [css.headerNavDark]: isDark,
  });

  const lineClasses = classNames(css.line, {
    [css.darkLine]: isDark,
  });

  useEffect(closeNav, [closeNav, router.pathname]);

  return (
    <>
      <div>
        <nav className={classes}>
          {useResponsiveNav && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 54 }}>
              <img className={css.logo} src='/main-logo-mobile.svg' />
              <img className={css.logo} onClick={closeNav} src='/closeButton.svg' />
            </div>
          )}
          {renderNavigation()}
        </nav>
      </div>

      {useResponsiveNav && (
        <label className={css.burger} onClick={openNav}>
          <span className={lineClasses} />
          <span className={lineClasses} />
          <span className={lineClasses} />
        </label>
      )}

      <CustomPopup title='Log in to Guardarian Pro' visible={showForm} onClose={handlePopupClose}>
        <Login />
      </CustomPopup>
    </>
  );
});
