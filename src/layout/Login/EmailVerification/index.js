import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useSelector, useDispatch } from 'react-redux';
// import cn from 'classnames';
import {
  selectEmailValid,
  selectEmailInput,
  selectEmailCode,
  selectEmailApproved,
  selectEmailVerificationId,
  setEmailInput,
  setEmailCode,
  setIsEmailApproved,
  setEmailVerificationId,
  setEmailValid,
} from 'utils/store//features/authSlice';

import apiClientAuth from 'api/api-customer-cabinet-auth';
import apiClientExchangesInfo from 'api/api-customer-cabinet-info';

import { Input } from '../../../components/Input/v2';
import { SMSCode } from '../../../components/SmsCode';

import css from './styles.module.scss';
import { SubmitButton } from '../submitButton';
import { setToken } from '../../../utils/checkLocalStorageExpire';

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

function EmailVerification({ addEmailPopup, setNewEmail, closePopup }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const emailValid = useSelector(selectEmailValid);
  const emailInput = useSelector(selectEmailInput);
  const emailCode = useSelector(selectEmailCode);
  const emailApproved = useSelector(selectEmailApproved);
  const emailVerificationId = useSelector(selectEmailVerificationId);

  const handleChangeEmail = () => {
    dispatch(setIsEmailApproved(false));
    dispatch(setEmailCode(''));
    dispatch(setEmailInput(''));
    dispatch(setEmailValid(false));
    dispatch(setEmailVerificationId(''));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setError(false);
    dispatch(setEmailInput(e.target.value));

    if (!EMAIL_REGEX.test(value)) {
      dispatch(setEmailValid(false));
    } else {
      dispatch(setEmailValid(true));
    }
  };

  const handleGetVerifyCode = async () => {
    try {
      const response = await apiClientAuth.requestVerifyCode('EMAIL', emailInput, setError);
      if (response?.verificationId) {
        dispatch(setEmailVerificationId(response.verificationId));
        dispatch(setIsEmailApproved(true));

        return;
      }
    } catch (e) {
      setError(e.message);
      dispatch(setEmailValid(false));
    }
  };

  const fetchEmailVerification = async () => {
    try {
      const response = await apiClientAuth.verifyCode(
        'EMAIL',
        emailInput,
        `${emailVerificationId}`,
        emailCode,
        setError,
      );
      if (response?.access_token || response?.accessToken) {
        setToken(response);
        router.push('/pro/exchanges');
        return;
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const addEmail = async () => {
    try {
      const response = await apiClientExchangesInfo.addEmail(emailInput);

      if (response?.success) {
        setNewEmail(emailInput);
        closePopup();
        return;
      }
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    if (emailCode?.length > 5) {
      if (addEmailPopup) {
        addEmail();
        return;
      }

      fetchEmailVerification();
    }
  }, [emailCode, addEmailPopup]);

  return (
    <>
      <div className={css.inputContainer}>
        {!emailApproved && !emailVerificationId && (
          <>
            <Input
              className={css.phoneNumber}
              value={emailInput}
              onChange={handleChange}
              label='Email'
              border={false}
              autoSize={false}
              type='email'
            />
            <div className={css.adaptiveDesktop}>
              <SubmitButton onClick={handleGetVerifyCode} disabled={!emailValid} />
            </div>
          </>
        )}

        {emailApproved && emailVerificationId && (
          <SMSCode
            error={!emailApproved}
            code={emailCode}
            onChange={setEmailCode}
            // timer='60'
            onChangeNumber={handleChangeEmail}
            verificationType='email'
          />
        )}
      </div>
      <div className={css.adaptiveMobile}>
        <SubmitButton onClick={handleGetVerifyCode} disabled={!emailValid} />
      </div>
      {error && <div className={css.error}>{error}</div>}
    </>
  );
}

export { EmailVerification };
