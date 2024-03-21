import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import axios from 'axios';

import { Button } from 'components/Button';
import { Text } from 'components/Text';
import { Input } from 'components/Input';

import { dataErrorHandler } from 'utils/validator';
import * as formTypes from 'constants/formTypes';
import { formMessageType, formMsg } from 'constants/formMsgType';
import { formModel } from './form.model';

import css from './BusinessVerificationForm.module.scss';

export const BusinessVerificationForm = () => {
  const [formState, toggleFromState] = useState(formModel);
  const [message, toggleFormMessage] = useState('');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      let isValid = true;
      let validatedFormState = {};

      Object.keys(formState).forEach((key) => {
        const controlData = formState[key];
        const error = dataErrorHandler(controlData.value, controlData.validationRules);

        if (error) {
          isValid = false;
        }

        validatedFormState = {
          ...validatedFormState,
          [key]: {
            ...controlData,
            error,
          },
        };
      });

      if (!isValid) {
        toggleFromState(validatedFormState);
      } else {
        const preparedData = Object.keys(formState).reduce(
          (prev, key) => ({
            ...prev,
            [key]: {
              label: formState[key].label,
              value: formState[key].value,
            },
          }),
          { templateType: formTypes.businessForm },
        );

        axios
          .post('/api/contact', preparedData)
          .then(() => {
            toggleFormMessage(formMessageType.scs);
            setTimeout(() => {
              toggleFormMessage('');
            }, 3000);
          })
          .catch(() => {
            toggleFormMessage(formMessageType.err);
          });
      }
    },
    [formState, toggleFromState],
  );

  const patchFormState = useCallback(
    (key, value, error = null) => {
      toggleFromState({
        ...formState,
        [key]: {
          ...formState[key],
          value,
          error,
        },
      });
    },
    [formState],
  );

  const inputHandler = useCallback(
    (e) => {
      const { value, name } = e.target;
      const error = dataErrorHandler(value, formState[name].validationRules);

      patchFormState(name, value, error);
    },
    [patchFormState, formState],
  );

  const controlRenderer = useCallback(
    (key) => {
      const { label, control, error, validationRules, ...controlProps } = formState[key];
      const commonProps = { ...controlProps, name: key };
      const value = controlProps.value || '';
      const formControl = <Input inputClass={css.input} {...commonProps} onChange={inputHandler} value={value} />;

      return (
        <div className={cn(css.item, { [css.hasError]: error })} key={key}>
          <Text size='lg' className={css.label}>
            {label}
          </Text>
          {error && <Text className={css.error}>{error}</Text>}
          {formControl}
        </div>
      );
    },
    [formState],
  );

  return (
    <div className={css.component}>
      <div className='container'>
        <form onSubmit={onSubmit}>
          {Object.keys(formModel).map((key) => controlRenderer(key))}

          <footer className={css.footer}>
            {message && (
              <div className={css.footer_item}>
                {message === formMessageType.err && <span className='error'>{formMsg.err}</span>}
                {message === formMessageType.scs && <span className='success'>{formMsg.scs}</span>}
              </div>
            )}

            <div className={css.footer_item}>
              <Button type='submit' onClick={onSubmit} green className={css.submit}>
                Apply
              </Button>
            </div>
          </footer>
        </form>
      </div>
    </div>
  );
};
