import { createElement } from 'react';
import classNames from 'classnames';

import css from './Text.module.scss';

export const Text = ({ tag, size, className, fontWeight, id, children }) => {
  const classes = classNames(css.component, className, {
    [css[size]]: size,
    [css[fontWeight]]: fontWeight,
  });

  return createElement(tag, { className: classes, id }, children);
};

Text.defaultProps = {
  size: 'md',
  tag: 'div',
  className: '',
  id: '',
  fontWeight: '',
};
