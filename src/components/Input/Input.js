import React from 'react';
import cn from 'classnames';
import css from './Input.module.scss';

function Input({ containerClass, inputClass, label, placeholder, value, onChange, name }) {
  const inputClassname = cn(css.input, inputClass, {
    [css.input_valid]: value,
  });
  return (
    <div className={cn(css.container, containerClass)}>
      {label && (
        <label className={css.label} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={inputClassname}
        onChange={onChange}
        name={name}
        id={name}
        type='text'
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
export { Input };
