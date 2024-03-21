import React, { forwardRef } from 'react';
import cn from 'classnames';
import css from './Input-v2.module.scss';

const Input = forwardRef((props, ref) => {
  const { containerClass, inputClass, label, placeholder, value, onChange, name, onClickCapture, type } = props;
  const inputClassname = cn(css.input, inputClass, {
    [css.input_valid]: value,
  });

  return (
    <div className={cn(css.wrapper, containerClass, { [css.hasValue]: !!value })}>
      <label className={css.labelBox}>
        <span className={cn(css.labelText, 'input__label')}>{label}</span>
        <input
          ref={ref}
          onClickCapture={onClickCapture}
          className={inputClassname}
          onChange={onChange}
          name={name}
          id={name}
          type={type || 'text'}
          value={value}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
});

export { Input };
