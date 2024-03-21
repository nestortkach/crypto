import React, { useState, useRef } from 'react';
import cx from 'classnames';

import css from './FileUploader.module.scss';

export const FileUploader = (props) => {
  const [value, saveValue] = useState('');
  const [fileName, saveFileName] = useState('');
  const [fileIsValid, toggleFileValidation] = useState(true);
  const { onChange, name, placeholder, maxSize, ...rest } = props;

  const ref = useRef(null);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const file = e.target.files[0];

    if (maxSize && file.size > maxSize) {
      toggleFileValidation(false);
    } else {
      toggleFileValidation(true);

      saveFileName(file ? file.name : '');
      saveValue(inputValue);
      onChange(e);
    }
  };

  const clearInput = () => {
    saveValue('');
  };

  return (
    <div className={css.component}>
      <label className={cx(css.button, css.primary)}>
        <object className={css.icon} data='/download_icon.svg' type='image/svg+xml' />
        <input className={css.input} type='file' value={value} onChange={handleChange} {...rest} ref={ref} />
        <span className={css.placeholder}>{placeholder}</span>
      </label>

      {!fileIsValid && <small className={css.error}>File size should be less than 25mb.</small>}

      {value && (
        <div className={css.fileList}>
          <span className={css.fileName}>{fileName}</span>
          <span className={css.clear} onClick={clearInput}>
            <object data='/trash-bin.svg' type='image/svg+xml' />
          </span>
        </div>
      )}
    </div>
  );
};
