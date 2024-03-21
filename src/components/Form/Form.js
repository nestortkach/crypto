import React from 'react';
import cn from 'classnames';

import css from './Form.module.scss';

export const Form = (props) => {
  const { children, className, onSubmit } = props;

  return (
    <form className={cn(css.component, className)} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export const Row = ({ className, children }) => <div className={cn(css.row, className)}>{children}</div>;

export const Col = ({ size, className, children }) => {
  const classes = cn(css.col, {
    [css[`col${size}`]]: size,
    className,
  });

  return <div className={classes}>{children}</div>;
};
