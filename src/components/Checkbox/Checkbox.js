import React from 'react';
import cn from 'classnames';

import css from './Checkbox.module.scss';

function Checkbox({ childClassName, checkboxClassName, name, className, onChange, checked, children }) {
  return (
    <label className={cn(css.label, className)}>
      <input name={name} className={css.input} onChange={onChange} checked={checked} type='checkbox' />

      <span className={cn(css.checkbox, 'checkbox', checkboxClassName)} />
      <span className={childClassName}>{children}</span>
    </label>
  );
}

export { Checkbox };
