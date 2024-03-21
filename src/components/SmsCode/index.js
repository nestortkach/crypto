import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import cn from 'classnames';
import css from './styles.module.scss';

function SMSCode({ code, onChange, onChangeNumber, error, success, loading, verificationType }) {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputLabel = verificationType === 'email' ? 'Email code' : 'SMS code';
  const changeVerifier = verificationType === 'email' ? 'Change email' : 'Change number';

  const onlyNumReg = /^[0-9\b]+$/;
  //   const isTimerExpired = timer === '';
  const hasStatus = loading || success || error;

  const textLabelClass = cn(css.labelText, {
    [css.labelText_visible]: code,
    [css.labelText_error]: error,
  });

  const statusTextClass = cn(css.statusText, {
    [css.statusText_error]: error,
  });

  //   const resendCodeClass = cn(css.resendCode, {
  //     [css.resendCode_disabled]: !isTimerExpired,
  //   });

  const handleChange = ({ target }) => {
    const { value } = target;

    if (value.length > 6) {
      return;
    }

    if (value === '' || onlyNumReg.test(value)) {
      dispatch(onChange(value));
    }
  };

  return (
    <div className={css.smsCode}>
      <svg className={css.lock} width='22' height='28' viewBox='0 0 22 28' fill='none'>
        <path
          d='M21.6668 14.0001C21.6668 12.5294 20.4708 11.3334 19.0002 11.3334H17.6668V7.33342C17.6668 3.65741 14.6762 0.666748 11.0002 0.666748C7.32416 0.666748 4.3335 3.65741 4.3335 7.33342V11.3334H3.00016C1.5295 11.3334 0.333496 12.5294 0.333496 14.0001V24.6667C0.333496 26.1374 1.5295 27.3334 3.00016 27.3334H19.0002C20.4708 27.3334 21.6668 26.1374 21.6668 24.6667V14.0001ZM7.00016 7.33342C7.00016 5.12808 8.79483 3.33341 11.0002 3.33341C13.2055 3.33341 15.0002 5.12808 15.0002 7.33342V11.3334H7.00016V7.33342Z'
          fill='#5583ff'
        />
      </svg>

      <label className={css.label} htmlFor='code'>
        <span className={textLabelClass}>{inputLabel}</span>

        <input
          type='number'
          ref={inputRef}
          autoComplete='one-time-code'
          className={cn(css.input, { [css.input_success]: success })}
          onChange={handleChange}
          value={code}
        />
      </label>

      {!hasStatus && (
        <div className={css.controls}>
          <button type='button' className={css.changeNumber} onClick={onChangeNumber}>
            {changeVerifier}
          </button>

          {/* <button type='button' className={resendCodeClass} onClick={onResend} disabled={!isTimerExpired}>
            <span className={css.refresh} />
            <span className={css.resendText}>{isTimerExpired ? 'Resend code' : timer}</span>
          </button> */}
        </div>
      )}

      {hasStatus && (
        <div className={css.statusWrapper}>
          {error && <div className={statusTextClass}>Incorrect code</div>}
          {loading && (
            <div
              className={cn(css.status, {
                [css.status_loading]: loading,
              })}
            />
          )}
        </div>
      )}
    </div>
  );
}

export { SMSCode };
