import React from 'react';
import cn from 'classnames';

import css from './Button.module.scss';

const Button = ({
  className,
  children,
  white,
  green,
  grey,
  disabled,
  size,
  active,
  fullWidth,
  rounded = true,
  onClick,
  name,
}) => {
  const buttonClassName = cn(css.button, className, {
    [css.rounded]: rounded,
    [css.active]: active,
    [css.white]: white,
    [css.green]: green,
    [css.fullWidth]: fullWidth,
    [css.grey]: grey,
    [css.md]: size === 'md',
  });

  return (
    <button type='button' className={buttonClassName} onClick={onClick} disabled={disabled} name={name}>
      {children}
    </button>
  );
};

export { Button };
