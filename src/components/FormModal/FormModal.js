import React, { useState } from 'react';
import cn from 'classnames';
import axios from 'axios';
import modalImg from '/public/form-modal/background.png';
import SuccessIcon from '/public/form-modal/success-icon.svg';
import modalCloseIcon from '/public/form-modal/close-modal-icon.svg';
import css from './FormModal.module.scss';
import { Loader } from '../Loader/Loader';
import { CORS_PROXY, ERRORS, GOOGLE_FORM_ENTRIES, GOOGLE_FORM_URL } from 'components/FormModal/constants';
import { isValidPhoneNumber } from '../../helpers/isValidPhoneNumber';

export const FormModal = ({ open, currency, amount, region }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isOpen, setIsOpen] = useState(open);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateData(data)) {
      setIsValid(true);
      setIsLoading(true);

      const query = [
        `${GOOGLE_FORM_ENTRIES.emailOrPhone}=${data}`,
        `${GOOGLE_FORM_ENTRIES.currency}=${currency}`,
        `${GOOGLE_FORM_ENTRIES.amount}=${amount}`,
        `${GOOGLE_FORM_ENTRIES.region}=${region}`,
        'submit=Submit',
      ];

      const actionUrlWithParams = `${GOOGLE_FORM_URL}?${query.join('&')}`;

      try {
        await axios.get(CORS_PROXY + encodeURIComponent(actionUrlWithParams));
        setIsSubmitted(true);
      } catch (error) {
        setErrorMessage(ERRORS.SUBMIT);
      }

      setIsLoading(false);
    } else {
      setIsValid(false);
      setErrorMessage(ERRORS.VALIDATION);
    }
  };

  const validateData = (data) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const isValid = emailRegex.test(data) || isValidPhoneNumber(data);

    if (!isValid) {
      setErrorMessage(ERRORS.VALIDATION);
    }

    return isValid;
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleInputFocus = () => {
    setIsInputActive(true);
  };

  const handleInputBlur = () => {
    setIsInputActive(false);
  };

  return (
    <>
      {isOpen && (
        <div className={css.backdrop}>
          <div className={css.container}>
            <div className='close-btn'>
              <img src={modalCloseIcon.src} alt='close-icon' className={css.closeIcon} onClick={handleClose} />
            </div>
            <h1 className={css.title}>Your country support is coming soon!</h1>
            <p className={css.description}>
              Leave your contact details and we'll notify you as soon as Guardarian supports your region. We're actively
              working to reach you!
            </p>
            <form onSubmit={handleSubmit}>
              <div className={css.inputContainer}>
                <input
                  value={data}
                  onChange={(e) => {
                    setData(e.currentTarget.value);
                    setErrorMessage('');
                  }}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className={`${css.input} ${!isValid ? css.errorInput : ''} ${errorMessage ? '' : css.defaultMargin} ${
                    isInputActive ? css.activeInput : ''
                  }`}
                />
                <label className={`${css.placeholder} ${isInputActive || data ? css.activePlaceholder : ''}`}>
                  Your email or mobile phone
                </label>
              </div>
              {errorMessage && (
                <p className={`${css.errorMessage} ${errorMessage ? css.errorMargin : ''}`}>{errorMessage}</p>
              )}

              <button disabled={isLoading} className={css.submitBtn} type='submit'>
                {isLoading ? <Loader className={cn(css.loader)} /> : 'Notify me'}
              </button>
            </form>
            <p className={css.descriptionbottom}>
              We’ll let you know when the service is available. No junk marketing emails.{' '}
            </p>
            <img src={modalImg.src} alt='planet' className={css.img} />
          </div>
        </div>
      )}
      {isOpen && isSubmitted && (
        <div className={css.backdropsuccess}>
          <div className={css.container}>
            <div className='close-btn'>
              <img src={modalCloseIcon.src} alt='close-icon' className={css.closeIcon} onClick={handleClose} />
            </div>
            <img src={SuccessIcon.src} alt='success-icon' />
            <h1 className={`${css.title} ${css.titlesuccess}`}>Success!</h1>
            <p className={css.description}>
              Your request has been successfully created. We will contact you as soon as Guardarian supports
              your region.
            </p>
            <button className={css.submitBtn} type='submit' onClick={handleClose}>
              Done
            </button>
            <img src={modalImg.src} alt='planet' className={css.imgsuccess} />
          </div>
        </div>
      )}
    </>
  );
};
