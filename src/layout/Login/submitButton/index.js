import React from 'react';
import cn from 'classnames';
import css from './styles.module.scss';

function SubmitButton({ disabled, loading, error, onClick }) {
  const arrowClass = cn(css.arrow, {
    [css.arrow_loading]: loading,
    [css.arrow_error]: error,
  });

  const buttonClass = cn(css.button, {
    [css.button_disabled]: disabled,
  });

  return (
    <div className={css.wrapper}>
      <button type='button' className={buttonClass} onClick={onClick} disabled={disabled || error}>
        <span className={css.text}>Send code</span>
        <span className={arrowClass} />
      </button>
    </div>
  );
}

export { SubmitButton };
