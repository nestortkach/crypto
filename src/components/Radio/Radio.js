import React from 'react';
import classNames from 'classnames';

import { Text } from '../Text';

import css from './Radio.module.scss';

export const Radio = ({ children, className, onChange, selected, options = [], ...radioProps }) => {
  const onRadioChange = (e) => {
    const { value } = e.target;

    onChange(value, radioProps.name);
  };

  return options.map((item) => {
    const checked = selected === item.value;

    return (
      <label className={classNames(css.component, 'radio', className)} key={item.value}>
        <span
          className={classNames(css.fakeRadio, {
            [css.checked]: checked,
          })}
        >
          <input type='radio' onChange={onRadioChange} checked={checked} {...radioProps} value={item.value} />
        </span>
        <Text size='lg'>{item.label}</Text>
      </label>
    );
  });
};
