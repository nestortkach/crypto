import React, { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { Text } from 'components/Text';
import { CookieSection } from 'layout/CookieSection';
import { useBreakPoint, breakpoints } from 'hooks/useResponsive';
import { footerBottomDesktop, footerMobLinks } from 'constants/nav';
import css from './Footer.module.scss';
import { extendedBottomLinks } from '../../constants/nav';
import { useRouter } from 'next/router';

const social = [
  {
    id: 'social-media-1',
    path: 'https://www.facebook.com/Guardariancom',
    img: '/social-icons/fb-dark.svg',
    alt: 'facebook',
  },
  {
    id: 'social-media-2',
    path: 'https://twitter.com/Guardarian_com',
    img: '/social-icons/twitter-dark.svg',
    alt: 'twitter',
  },
  {
    id: 'social-media-3',
    path: 'https://www.youtube.com/channel/UCYjnir4rpj9ZL2bgWhX945Q/featured',
    img: '/social-icons/youtube-dark.svg',
    alt: 'youtube',
  },
  {
    id: 'social-media-5',
    path: 'https://www.reddit.com/r/Guardarian',
    img: '/social-icons/reddit-dark.svg',
    alt: 'reddit',
  },
  {
    id: 'social-media-6',
    path: 'https://medium.com/@guardarian',
    img: '/social-icons/medium-dark.svg',
    alt: 'medium',
  },
];

const payment = [
  {
    id: 'payment-method-1',
    path: '/payment-methods/visa_dark.svg',
    name: 'visa',
  },
  {
    id: 'payment-method-2',
    path: '/mastercard_new.svg',
    name: 'mastercard',
  },
];

function Footer({ isIntegrateUsPage }) {
  const breakpoint = useBreakPoint();
  const useResponsiveNav = breakpoint === breakpoints.sm || breakpoint === breakpoints.xs;
  const { pathname } = useRouter();
  console.log(pathname);
  const renderNav = useCallback(() => {
    if (useResponsiveNav) {
      return (
        <>
          <div className={css.mobNavLinkList}>
            {extendedBottomLinks.map((section) => {
              if (section.title === 'Pro Account') {
                return null;
              }

              return (
                <div className={css.col} key={section.title}>
                  <Text className={css.navTitle} fontWeight='medium'>
                    {section.title}
                  </Text>

                  <div className={css.linkList}>
                    {section.links.map((link) => (
                      <Link key={link.id} href={link.path}>
                        <a target={link.target}>{link.title}</a>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={css.divider} />
          <div className={css.mobNav}>
            {footerMobLinks.map((link) => (
              <div className={css.mobNavItem} key={link.id}>
                <Link href={link.path}>
                  <a target={link.target}>{link.title}</a>
                </Link>
              </div>
            ))}
          </div>
          <div className={css.paymentList}>
            {payment.map((item) => (
              <img key={item.id} src={item.path} alt={item.name} />
            ))}
          </div>

          <div className={css.bottomNavigatorSocialMedia}>
            <div className={classNames(css.col, css.socialCol, css.socialMob)}>
              <div className={css.socialList}>
                {social.map((item) => (
                  <a key={item.id} href={item.path}>
                    <img src={item.img} alt={item.alt} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }

    return extendedBottomLinks.map((section) => {
      if (section.title === 'Pro Account') {
        return null;
      }

      return (
        <div className={css.col} key={section.title + Math.random()}>
          <Text className={css.navTitle} fontWeight='medium'>
            {section.title}
          </Text>

          <div className={css.linkList}>
            {section.links.map((link) => (
              <Link key={link.id} href={link.path === '#brand-assets' ? `/press-and-media#brand-assets` : link.path}>
                <a target={link.target}>{link.title}</a>
              </Link>
            ))}
          </div>
        </div>
      );
    });
  }, [useResponsiveNav]);

  return (
    <>
      <footer className={css.integrateUsFooter}>
        <div className={css.row}>
          <div className={css.contentPart}>
            <div className={css.footerLogo}>
              <img src='/main-logo-dark.svg' alt='guardarian' />
            </div>
            <div className={css.logosWithRegistry}>
              <div className={css.logos}>
                <span>
                  <Image className={css.logo} src='/logos/police.svg' alt='police' width={31.56} height={40} />
                </span>
                <span>
                  <Image className={css.logo} src='/logos/eu.svg' alt='eu' width={48} height={32} />
                </span>
              </div>
              <Text size='sm' className={css.registry}>
                Guardarian OÜ © All Rights Reserved <br />
                Address: Rotermanni 2-9, Tallinn 10111, Estonia <br />
                License: FVT000200. Registry code: 14320990 <br />
                Contact us at <a href='mailto:sales@guardarian.com'>sales@guardarian.com</a> <br />
              </Text>
            </div>
          </div>

          <div className={css.footerNav}>{renderNav()}</div>
        </div>
        {!useResponsiveNav && (
          <div className={css.row}>
            <div className={css.divider} />
            <div className={css.bottomNavigator}>
              <div className={css.bottomNavigatorLink}>
                {footerBottomDesktop.links.map((link) => (
                  <Link key={link.id} href={link.path}>
                    <a target={link.target}>{link.title}</a>
                  </Link>
                ))}
              </div>
              <div className={classNames(css.col, css.paymentCol)}>
                <div className={css.paymentList}>
                  {payment.map((item) => (
                    <img key={item.id} src={item.path} alt={item.name} />
                  ))}
                </div>
              </div>
              <div className={css.bottomNavigatorSocialMedia}>
                <div className={classNames(css.col, css.socialCol)}>
                  <div className={css.socialList}>
                    {social.map((item) => (
                      <a rel='noreferrer' target='_blank' key={item.id + item.path} href={item.path}>
                        <img src={item.img} alt={item.alt} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </footer>
      <CookieSection />
    </>
  );
}

export { Footer };
