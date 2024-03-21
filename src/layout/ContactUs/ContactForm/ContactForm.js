import React, { useState } from 'react';
import axios from 'axios';

import { Input } from 'components/Input';
import { Textarea } from 'components/Textarea';
import { Button } from 'components/Button';

import { Col, Form, Row } from 'components/Form';
import { formMsg } from 'constants/formMsgType';

import classNames from 'classnames';
import css from './ContactForm.module.scss';

const initialState = {
  templateType: 'support-form',
  name: '',
  email: '',
  message: '',
};

const ContactForm = ({ className }) => {
  const [formData, setFormData] = useState(initialState);
  const [submitResult, setSubmitResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/api/contact', formData)
      .then(() => {
        setFormData(initialState);
        setSubmitResult(true);
        setTimeout(() => setSubmitResult(null), 3000);
      })
      .catch(() => {
        setSubmitResult(false);
        setTimeout(() => setSubmitResult(null), 3000);
      });
  };

  const handleFieldValueChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <Form className={classNames(css.contactForm, className)} onSubmit={handleSubmit}>
      <Row className={css.row}>
        <Col size={12}>
          <Input
            inputClass={css.input}
            name='name'
            label='Name'
            placeholder=''
            value={formData.website}
            onChange={handleFieldValueChange}
          />
        </Col>
      </Row>

      <Row className={css.row}>
        <Col size={12}>
          <Input
            inputClass={css.input}
            name='email'
            label='Email'
            placeholder=''
            value={formData.email}
            onChange={handleFieldValueChange}
          />
        </Col>
      </Row>

      <Row className={css.row}>
        <Col size={12}>
          <Textarea
            inputClass={css.textarea}
            name='message'
            label='Message'
            placeholder=''
            value={formData.message}
            onChange={handleFieldValueChange}
            rows={9}
          />
        </Col>
      </Row>

      <Row className={css.row}>
        <Col size={12}>
          {submitResult === true && <div className={css.success}>{formMsg.scs}</div>}
          {submitResult === false && <div className={css.error}>{formMsg.err}</div>}

          {submitResult === null && (
            <Button className={css.button} onClick={handleSubmit} fullWidth primary>
              Send
            </Button>
          )}
        </Col>
      </Row>
    </Form>
  );
};

export { ContactForm };
