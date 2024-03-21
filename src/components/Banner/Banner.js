import React from 'react';
import classNames from 'classnames';

import css from './Banner.module.scss';

export const Banner = (props) => {
  const { children, className = '' } = props;

  return (
    <div className={classNames(css.component, className)}>
      <div className='container'>{children}</div>
    </div>
  );
};
