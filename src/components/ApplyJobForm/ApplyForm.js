import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

import { Input } from 'components/Input';
import { Textarea } from 'components/Textarea';
import { Checkbox } from 'components/Checkbox';
import { Button } from 'components/Button';
import { PhoneInput } from 'components/PhoneInput';
import { Col, Form, Row } from 'components/Form';
import { FileUploader } from 'components/FileUploader';

import formTypes from 'constants/formTypes';
import { formMessageType, formMsg } from 'constants/formMsgType';
import { getBase64, getBase64Info } from 'utils/getBase64';

import css from './ApplyForm.module.scss';

const initialState = {
  templateType: formTypes.applyJob,
  firstName: '',
  lastName: '',
  position: '',
  phone: '',
  email: '',
  message: '',
  cv_file: null,
};

export const ApplyForm = (props) => {
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

  const handleFileInput = useCallback(
    async (e) => {
      const file = e.target.files[0];

      if (file) {
        const base64 = await getBase64(file);
        const { type, base64string } = getBase64Info(base64);

        updateFormData({
          ...formData,
          cv_file: {
            content: base64string,
            filename: file.name,
            type,
            disposition: 'attachment',
            contentId: file.name,
          },
        });
      }
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
          <Input label='First Name' name='firstName' value={formData.firstName} onChange={handleInput} />
        </Col>

        <Col size={6}>
          <Input label='Last Name' name='lastName' value={formData.lastName} onChange={handleInput} />
        </Col>
      </Row>

      <Row>
        <Col size={12}>
          <Input
            label='Position you are applying for'
            name='position'
            value={formData.website}
            onChange={handleInput}
          />
        </Col>
      </Row>

      <Row>
        <Col size={6}>
          <PhoneInput onChange={handlePhoneInput} value={formData.phone} name='phone' label='Phone' />
        </Col>

        <Col size={6}>
          <Input label='Email' name='email' value={formData.email} onChange={handleInput} />
        </Col>
      </Row>

      <Row>
        <Col size={12}>
          <Textarea label='Message' name='message' value={formData.message} onChange={handleInput} />
        </Col>
      </Row>

      <Row>
        <Col size={12}>
          <FileUploader
            name='cv_file'
            maxSize={26214400}
            placeholder='Upload your CV'
            onChange={handleFileInput}
            accept='.docx, .rtf, .pdf'
          />
        </Col>
      </Row>

      <Row>
        <Col size={12}>
          <Checkbox className={css.terms} onChange={() => toggleAcceptance(!acceptedTerms)} checked={acceptedTerms}>
            I have read and agreed to the{' '}
            <Link href='/privacy-policy'>
              <a target='_blank'>Privacy Policy</a>
            </Link>
            , I agree that my personal data will be collected and processed.
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
          <Button fullWidth disabled={!acceptedTerms} primary>
            Send
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
