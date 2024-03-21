import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { Button } from 'components/Button';

import css from './CookieSection.module.scss';

const CookieSection = () => {
  const [show, setShow] = useState(false);

  const setCookiesAccepted = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setShow(false);
  };

  useEffect(() => {
    if (!localStorage.getItem('cookies-accepted')) {
      setShow(true);
    }
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className={css.section}>
      <div className={cn('container', css.container)}>
        <p className={css.text}>
          We use cookies to help you navigate through the Website, efficiently perform the functions of the Website and
          in order to improve the Website, prevent frauds, illegal activity etc. We use necessary cookies, as well as
          statistics and marketing cookies. By clicking «Accept» you agree to our use of all cookies under our{' '}
          <Link href='/privacy-policy' passHref>
            <span className={css.link}>Privacy Policy</span>
          </Link>{' '}
          provisions. However, you can &quot;Decline&quot; our use of cookies and then we will limit of use to necessary
          cookies only.
        </p>

        <Button className={css.button} primary onClick={setCookiesAccepted}>
          Accept
        </Button>
      </div>
    </div>
  );
};

export { CookieSection };
