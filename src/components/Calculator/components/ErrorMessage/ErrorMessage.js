import React from 'react';

import css from './ErrorMessage.module.scss';

const calculateLimitAmount = (fromAmount, range) => {
  if (fromAmount > range.max) {
    return `${Math.floor(range.max * 100000) / 100000} `;
  }
  return `${Math.ceil(range.min * 100000) / 100000} `;
};

const ErrorMessage = ({ range, amountSetter, fromAmount, error }) => {
  if (error) {
    return (
      <p
        className={error.length > 60 ? [css.errorWrapper, css.reduceFontSize].join(' ') : css.errorWrapper}
        onClick={
          error === 'Amount is not in min-max range'
            ? () => amountSetter(fromAmount > range.max ? range.max : range.min)
            : null
        }
      >
        {error}
      </p>
    );
  }

  return (
    <p className={css.errorWrapper} onClick={() => amountSetter(fromAmount > range.max ? range.max : range.min)}>
      {fromAmount > range.max ? 'Max' : 'Min'} amount is{' '}
      <span className={css.underlinedText}>
        {calculateLimitAmount(fromAmount, range)}
        {range.fromCurrency}
      </span>
    </p>
  );
};

export { ErrorMessage };
