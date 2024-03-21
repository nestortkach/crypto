import React from 'react';
import cn from 'classnames';

import css from './Textarea.module.scss';

function Textarea({ containerClass, inputClass, label, placeholder, value, onChange, name, rows = 5 }) {
  const textareaClass = cn(css.textarea, inputClass, {
    [css.textarea_valid]: value,
  });

  return (
    <div className={cn(css.container, containerClass)}>
      <label className={css.label} htmlFor={name}>
        {label}
      </label>
      <textarea
        className={textareaClass}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        id={name}
        rows={rows}
      />
    </div>
  );
}

export { Textarea };
