import { createElement } from 'react';
import classNames from 'classnames';

import css from './Title.module.scss';

export const Title = ({ fontWeight, onClick, className, size, tag, children }) => {
  const classes = classNames(css.component, className, {
    [css[size]]: size,
    [css[fontWeight]]: fontWeight,
  });

  return createElement(tag, { className: classes, onClick }, children);
};

Title.defaultProps = {
  tag: 'h2',
  size: 'xl',
  fontWeight: 'bold',
  className: '',
};
