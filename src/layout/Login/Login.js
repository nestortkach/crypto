import React, { memo, useState } from 'react';
import cn from 'classnames';

import { EmailVerification } from './EmailVerification';
import { PhoneVerification } from './PhoneVerification';

import css from './Login.module.scss';

const switchButtonsArray = [
  { name: 'email', title: 'Email' },
  { name: 'phone', title: 'Phone' },
];

export const Login = memo(() => {
  const [active, setActive] = useState('email');

  const handleChange = (e) => {
    if (active !== e.target.name) {
      setActive(e.target.name);
    }
  };

  return (
    <>
      <div>
        <div className={css.switchContainer}>
          {switchButtonsArray.map((el) => (
            <button
              key={el.name}
              type='button'
              name={el.name}
              onClick={handleChange}
              className={cn(css.switchButton, { [css.active]: active === el.name })}
            >
              {el.title}
            </button>
          ))}
        </div>
      </div>
      {active === 'phone' && <PhoneVerification />}
      {active === 'email' && <EmailVerification />}
    </>
  );
});

Login.displayName = 'Login';
