import React, { useCallback, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

import { Input } from 'components/Input';
import { Textarea } from 'components/Textarea';
import { Checkbox } from 'components/Checkbox';
import { Button } from 'components/Button';
import { PhoneInput } from 'components/PhoneInput';
import { Col, Form, Row } from 'components/Form';
import Select from 'components/Select';

import formTypes from 'constants/formTypes';
import { formMessageType, formMsg } from 'constants/formMsgType';
import { exchangeAmountOptions } from './constants';

import css from './RequestExchangeForm.module.scss';

const initialState = {
  templateType: formTypes.requestExchange,
  companyName: '',
  exchangeAmount: exchangeAmountOptions[0],
  website: '',
  phone: '',
  email: '',
  message: '',
};

export const RequestExchangeForm = (props) => {
  const [formData, updateFormData] = useState(initialState);
  const [acceptedTerms, toggleAcceptance] = useState(false);
  const [message, toggleFormMessage] = useState('');

  const handleInput = useCallback(
    (e) => {
      const { name } = e.target;

      updateFormData({ ...formData, [name]: e.target.value });
    },
    [updateFormData, formData],
  );

  const updateFormControl = useCallback(
    (val, name) => {
      updateFormData({ ...formData, [name]: val });
    },
    [formData, updateFormData],
  );

  const handlePhoneInput = useCallback((val) => updateFormControl(val, 'phone'), [updateFormData, formData]);

  const handleAmount = useCallback((val) => updateFormControl(val, 'exchangeAmount'), [updateFormData, formData]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .post('/api/contact', formData)
        .then(() => {
          updateFormData(initialState);
          toggleFormMessage(formMessageType.scs);

          setTimeout(() => {
            props.onSuccessSubmit();
            toggleFormMessage('');
          }, 3000);
        })
        .catch(() => {
          toggleFormMessage(formMessageType.err);
        });
    },
    [formData],
  );

  return (
    <Form className={css.component} onSubmit={handleSubmit}>
      <Row>
        <Col size={6}>
          <Input
            label='Company name'
            name='companyName'
            placeholder='Your company name'
            value={formData.companyName}
            onChange={handleInput}
          />
        </Col>

        <Col size={6}>
          <Select
            label='Approximate exchange  amount'
            name='exchangeAmount'
            list={exchangeAmountOptions}
            selected={formData.exchangeAmount}
            onSelect={handleAmount}
          />
        </Col>
      </Row>

      <Row>
        <Col size={6}>
          <Input
            label='Website'
            name='website'
            placeholder='example.com'
            value={formData.website}
            onChange={handleInput}
          />
        </Col>

        <Col size={6}>
          <PhoneInput onChange={handlePhoneInput} value={formData.phone} name='phone' label='Phone' />
        </Col>
      </Row>

      <Row>
        <Col size={12}>
          <Input
            label='Email'
            name='email'
            placeholder='something@example.com'
            value={formData.email}
            onChange={handleInput}
          />
        </Col>
      </Row>

      <Row>
        <Col size={12}>
          <Textarea label='Message' name='message' value={formData.message} onChange={handleInput} />
        </Col>
      </Row>

      <Row>
        <Col size={12}>
          <Checkbox className={css.terms} onChange={() => toggleAcceptance(!acceptedTerms)} checked={acceptedTerms}>
            I have read and agreed{' '}
            <Link href='/terms-of-service'>
              <a target='blank' className={css.link}>
                Terms of service
              </a>
            </Link>{' '}
            and{' '}
            <Link href='/privacy-policy'>
              <a target='blank' className={css.link}>
                Privacy policy
              </a>
            </Link>
          </Checkbox>
        </Col>
      </Row>

      {message && (
        <Row>
          <Col size={12}>
            {message === formMessageType.err && <span className='error'>{formMsg.err}</span>}
            {message === formMessageType.scs && <span className='success'>{formMsg.scs}</span>}
          </Col>
        </Row>
      )}

      <Row>
        <Col size={12}>
          <Button fullWidth disabled={!acceptedTerms}>
            Send
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
