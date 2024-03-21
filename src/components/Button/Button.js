import React from 'react';
import cn from 'classnames';

import css from './Button.module.scss';

function Button({
  className,
  children,
  primary,
  darkBlue,
  lightGray,
  blue,
  customBlue,
  white,
  green,
  lightGreen,
  grey,
  outline,
  primaryDark,
  disabled,
  size,
  active,
  fullWidth,
  rounded = true,
  onClick,
  name,
  id,
  type = 'button',
  ariaLabel,
}) {
  const buttonClassName = cn(css.button, className, {
    [css.lightGreen]: lightGreen,
    [css.rounded]: rounded,
    [css.primary]: primary,
    [css.active]: active,
    [css.darkBlue]: darkBlue,
    [css.blue]: blue,
    [css.customBlue]: customBlue,
    [css.white]: white,
    [css.green]: green,
    [css.outline]: outline,
    [css.primaryDark]: primaryDark,
    [css.fullWidth]: fullWidth,
    [css.grey]: grey,
    [css.lightGray]: lightGray,
    [css.md]: size === 'md',
  });

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
      name={name}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export { Button };
