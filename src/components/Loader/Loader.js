import React from 'react';
import cn from 'classnames';

import css from './Loader.module.scss';

const Loader = ({ className }) => {
  const loaderClassName = cn(css.loader, className, {
    [css.default]: !className,
  });

  return <div className={loaderClassName} />;
};

export { Loader };
