import React, { useEffect, useState } from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import cn from 'classnames';

import { getCountryFromBrowserLanguage } from 'utils/contry';

import css from './PhoneInput.module.scss';

function PhoneInput({ value, containerClass, onChange, name, label }) {
  const inputClass = cn(css.input, {
    [css.input_valid]: value,
  });

  const forbiddenCountries = [
    'cn',
    'vn',
    'bo',
    'co',
    'ec',
    'dz',
    'id',
    'kg',
    'ma',
    'np',
    'sa',
    'ir',
    'pk',
    'kh',
    'us',
    'jp',
    'ck',
    'tw',
    'nz',
    'af',
    'ae',
    'bh',
    'bd',
    'eg',
    'iq',
    'ye',
    'jo',
    'qa',
    'kw',
    'lb',
    'ly',
    'my',
    'ml',
    'mr',
    'ng',
    'om',
    'so',
    'lk',
    'sd',
    'sy',
    'tn',
  ];

  const [country, setCountry] = useState(undefined);

  useEffect(() => {
    setCountry(getCountryFromBrowserLanguage());
  }, []);

  return (
    <div className={cn(css.outerContainer, containerClass)}>
      <label className={css.label}>{label}</label>
      <ReactPhoneInput
        country={country}
        inputProps={{ name }}
        excludeCountries={forbiddenCountries}
        placeholder='+'
        value={value}
        onChange={onChange}
        containerClass={css.innerContainer}
        inputClass={inputClass}
        buttonClass={css.button}
      />
    </div>
  );
}

export { PhoneInput };
