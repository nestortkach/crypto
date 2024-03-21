import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

import { Text } from 'components/Text';
import { Form } from 'components/Form';
import { Title } from 'components/Title';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Checkbox } from 'components/Checkbox';
import { Textarea } from 'components/Textarea';
import { formMsg } from 'constants/formMsgType';

import css from './ContactForm.module.scss';

const initialState = {
  templateType: 'contact-form',
  name: '',
  website: '',
  email: '',
  message: '',
  services: {
    api: false,
    widget: false,
    exchanges: false,
    cryptoCards: false,
  },
};

const requiredFields = ['name', 'email', 'services'];
const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

const checkRequiredFields = (formState, termsAccepted) => {
  const fieldsWithError = Object.keys(formState).filter((field) => {
    if (requiredFields.includes(field)) {
      if (field === 'services') {
        return Object.keys(formState[field]).some((element) => formState[field][element]) ? '' : field;
      }

      if (field === 'email') {
        return EMAIL_REGEX.test(formState[field]) ? '' : field;
      }

      return formState[field] ? '' : field;
    }

    return false;
  });

  if (!termsAccepted) {
    fieldsWithError.push('terms');
  }

  return fieldsWithError;
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState([]);
  const [submitResult, setSubmitResult] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const errorFields = checkRequiredFields(formData, termsAccepted);

    if (errorFields.length > 0) {
      setErrors(errorFields);

      return;
    }

    axios
      .post('/api/contact', formData)
      .then(() => {
        setFormData(initialState);
        setSubmitResult(true);
        setTimeout(() => setSubmitResult(null), 5000);
      })
      .catch(() => {
        setSubmitResult(false);
        setTimeout(() => setSubmitResult(null), 5000);
      });
  };

  const handleFieldValueChange = ({ target }) => {
    setErrors([...errors].filter((el) => el !== target.name));
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleServicesValueChange = ({ target }) => {
    setErrors([...errors].filter((el) => el !== 'services'));
    setFormData({ ...formData, services: { ...formData.services, [target.name]: !formData.services[target.name] } });
  };

  return (
    <>
      <Title size='md' className={css.title}>
        Contact sales
      </Title>

      <Text size='sm' className={css.subtitle}>
        Become a Guardarian partner to take your crypto projects to the next level!
      </Text>

      <Form className={css.contactForm} onSubmit={handleSubmit}>
        <div className={css.flexContainer}>
          <Input
            inputClass={errors.includes('name') ? css.error : css.input}
            name='name'
            label='Name of service*'
            placeholder={errors.includes('email') ? 'Please enter name of your service' : ''}
            value={formData.name}
            onChange={handleFieldValueChange}
          />

          <Input
            inputClass={errors.includes('email') ? css.error : css.input}
            name='email'
            label='Email*'
            placeholder={errors.includes('email') ? 'Please enter valid email' : ''}
            value={formData.email}
            onChange={handleFieldValueChange}
          />

          <Input
            inputClass={css.input}
            name='website'
            label='Website'
            placeholder=''
            value={formData.website}
            onChange={handleFieldValueChange}
          />
          <div className={css.checkboxContainer}>
            <span className={css.label}>What services are you interested in?*</span>
            <div className={css.checkboxRow}>
              <Checkbox
                checkboxClassName={errors.includes('services') ? css.error : css.checkbox}
                childClassName={css.servicesTitle}
                name='api'
                onChange={handleServicesValueChange}
                checked={formData.services.api}
              >
                API
              </Checkbox>
              <Checkbox
                checkboxClassName={errors.includes('services') ? css.error : css.checkbox}
                childClassName={css.servicesTitle}
                name='widget'
                onChange={handleServicesValueChange}
                checked={formData.services.widget}
              >
                Widget
              </Checkbox>
            </div>
            <div className={css.checkboxRow}>
              <Checkbox
                checkboxClassName={errors.includes('services') ? css.error : css.checkbox}
                childClassName={css.servicesTitle}
                name='exchanges'
                onChange={handleServicesValueChange}
                checked={formData.services.exchanges}
              >
                Exchanges for business
              </Checkbox>
              <Checkbox
                checkboxClassName={errors.includes('services') ? css.error : css.checkbox}
                childClassName={css.servicesTitle}
                name='cryptoCards'
                onChange={handleServicesValueChange}
                checked={formData.services.cryptoCards}
              >
                Crypto Cards
              </Checkbox>
            </div>
          </div>
        </div>
        <div className={css.flexContainer}>
          <Textarea
            inputClass={css.input}
            name='message'
            label='Message'
            placeholder=''
            value={formData.message}
            onChange={handleFieldValueChange}
            rows={4}
          />

          <Checkbox
            checkboxClassName={errors.includes('terms') ? css.error : css.checkbox}
            className
            name='terms'
            onChange={() => {
              setTermsAccepted((prev) => !prev);
            }}
            checked={termsAccepted}
          >
            <>
              I agree to the terms of the <Link href='/privacy-policy'>Privacy Policy</Link> and{' '}
              <Link href='/terms-of-use'>Terms of Use</Link> of Guardarian OU
            </>
          </Checkbox>

          {submitResult === true && <div className={css.success}>{formMsg.success_new}</div>}
          {submitResult === false && <div>{formMsg.err}</div>}

          {submitResult === null && (
            <Button className={css.button} onClick={handleSubmit} fullWidth primary>
              Submit
            </Button>
          )}
        </div>
      </Form>
    </>
  );
};

export { ContactForm };
