import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { getCountryFromBrowserLanguage } from 'utils/contry';

import { deleteSymbols } from './utils';
import css from './styles.module.scss';

import { Input } from '../../Input/v2';

const PhoneInput = ({
  className,
  containerClass,
  error,
  country,
  disabled,
  onEnterKeyPress,
  onPhoneChange,
  phone,
  children,
}) => {
  const [countryCode, setCountryCode] = useState({
    country: {},
    value: '',
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedNumber, setFormattedNumber] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const countrySelect = useRef(null);
  const phoneInput = useRef(null);

  useEffect(() => {
    if (countrySelect && !countryCode.value) {
      if (countrySelect.current?.state.selectedCountry) {
        setCountryCode(getCountryInfo());

        return;
      }

      countrySelect.current?.updateCountry(country || getCountryFromBrowserLanguage());
    }
  }, [country, countryCode.value, countrySelect.current]);

  useEffect(() => {
    if (!countryCode.value) {
      setCountryCode(getCountryInfo());
    }

    if (!showDropdown) {
      phoneInput?.current?.focus();
    }
  }, [countryCode.value]);

  const getCountryInfo = () => ({
    value: countrySelect.current?.state.selectedCountry.dialCode,
    country: countrySelect.current?.state.selectedCountry,
  });

  const handleNumberChange = (value, isPhone) => {
    if (isPhone) {
      setPhoneNumber(value);
      onPhoneChange({
        ...countryCode,
        value: countryCode.value + value,
      });

      return;
    }

    setCountryCode(value);
    onPhoneChange({
      ...value,
      value: value.country.dialCode + phoneNumber,
    });
  };

  const updateNumber = (value) => {
    if (!countryCode.value) {
      setCountryCode(getCountryInfo());
    }

    let formatted = countrySelect.current
      .formatNumber(countryCode.country.dialCode + deleteSymbols(value), countryCode.country)
      .slice(countryCode.country.dialCode.length + 1);

    if (formatted.startsWith(' ')) {
      formatted = formatted.slice(1);
    }

    if (formatted.slice(-1) === ')') {
      setFormattedNumber(formatted.slice(0, -1));
    } else {
      setFormattedNumber(formatted);
    }

    setPhoneNumber(deleteSymbols(formatted));
    handleNumberChange(deleteSymbols(formatted), true);
  };

  const changeDropdownState = () => {
    if (countrySelect) {
      countrySelect.current.state.showDropdown = !showDropdown;
      setShowDropdown(!showDropdown);
    }
  };

  return (
    <div className={cn(css.flex, css.relative)}>
      <div className={cn(containerClass, css.code)} onClick={changeDropdownState}>
        <div
          className={cn(css.phoneInput, className, {
            [css.phoneInput_error]: error,
          })}
        >
          <ReactPhoneInput
            ref={countrySelect}
            id='phone'
            placeholder='Country'
            value={countryCode.value}
            disabled={disabled}
            country={phone ? '' : country || getCountryFromBrowserLanguage()}
            onChange={(value, country) => handleNumberChange({ value, country }, false)}
            onEnterKeyPress={onEnterKeyPress}
            containerClass={css.container}
            inputClass={css.input}
            buttonClass={css.dropdownButton}
            dropdownClass={css.drowdown}
            searchClass={css.search}
            searchPlaceholder='Type a Country'
            searchNotFound='Please, try again'
            countryCodeEditable={false}
            showDropdown={showDropdown}
            onKeyDown={(e) => {
              e.preventDefault();
            }}
            inputProps={{ autoFocus: false, disabled: true }}
            enableSearch
          />
        </div>
      </div>
      <div className={containerClass}>
        <div className={cn(css.flex)}>
          <Input
            ref={phoneInput}
            className={css.phoneNumber}
            value={formattedNumber}
            onChange={({ target: { value } }) => updateNumber(value)}
            onEnterKeyPress={onEnterKeyPress}
            label='Phone number'
            border={false}
            error={error}
            autoSize={false}
            type='tel'
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export { PhoneInput };
