import cn from 'classnames';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import {
  selectPhoneValid,
  selectPhoneInput,
  selectPhoneCode,
  selectPhoneApproved,
  selectPhoneVerificationId,
  setPhoneInput,
  setPhoneCode,
  setIsPhoneApproved,
  setPhoneVerificationId,
  setPhoneValid,
  setIsAuth,
} from 'utils/store//features/authSlice';
import apiClientAuth from 'api/api-customer-cabinet-auth';

import css from './styles.module.scss';
import { SubmitButton } from '../submitButton';
import { PhoneInput } from '../../../components/PhoneInput/v2';
import { setToken } from '../../../utils/checkLocalStorageExpire';
import { SMSCode } from '../../../components/SmsCode';

const PHONE_NUMBER_REGEX = /^[1-9]\d{3,14}$/;

function PhoneVerification({ isSubmittedPhone, phone }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const phoneValid = useSelector(selectPhoneValid);
  const phoneInput = useSelector(selectPhoneInput);
  const phoneCode = useSelector(selectPhoneCode);
  const phoneApproved = useSelector(selectPhoneApproved);
  const phoneVerificationId = useSelector(selectPhoneVerificationId);

  const [error, setError] = useState(false);

  const handleChangePhone = () => {
    dispatch(setIsPhoneApproved(false));
    dispatch(setPhoneCode(''));
    dispatch(setPhoneInput(''));
    dispatch(setPhoneValid(false));
    dispatch(setPhoneVerificationId(''));
  };

  const handleChange = (phoneNumber) => {
    setError(false);
    dispatch(setPhoneInput(phoneNumber));

    if (!PHONE_NUMBER_REGEX.test(phoneInput?.value)) {
      dispatch(setPhoneValid(false));
    } else {
      dispatch(setPhoneValid(true));
    }
  };

  const handleGetVerifyCode = async () => {
    try {
      const response = await apiClientAuth.requestVerifyCode('PHONE_NUMBER', `+${phoneInput?.value}`, setError);

      if (response?.verificationId) {
        dispatch(setPhoneVerificationId(response.verificationId));
        dispatch(setIsPhoneApproved(true));
        return;
      }
    } catch (e) {
      setError(e.message);
      dispatch(setPhoneValid(false));
    }
  };

  const fetchPhoneVerification = async () => {
    try {
      const response = await apiClientAuth.verifyCode(
        'PHONE_NUMBER',
        `+${phoneInput?.value}`,
        `${phoneVerificationId}`,
        phoneCode,
        setError,
      );

      if (response?.access_token || response?.accessToken) {
        setToken(response);
        dispatch(setIsAuth(true));

        router.push('/pro/exchanges');
        return;
      }
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    if (phoneCode?.length > 3) {
      fetchPhoneVerification();
    }
  }, [phoneCode]);

  return (
    <div>
      {!phoneApproved && !phoneVerificationId && (
        <PhoneInput
          className={cn(css.phoneInput, { [css.phoneInput_submited]: isSubmittedPhone })}
          containerClass={cn(css.phoneVerification, css.code)}
          phone={phone}
          onPhoneChange={handleChange}
        >
          <div className={css.adaptiveDesktop}>
            <SubmitButton onClick={handleGetVerifyCode} disabled={!phoneValid} />
          </div>
        </PhoneInput>
      )}
      <div className={css.adaptiveMobile}>
        <SubmitButton onClick={handleGetVerifyCode} disabled={!phoneValid} />
      </div>
      {phoneApproved && phoneVerificationId && (
        <div className={css.inputContainer}>
          <SMSCode
            error={!phoneApproved}
            code={phoneCode}
            onChange={setPhoneCode}
            timer='60'
            onChangeNumber={handleChangePhone}
            //   onResend={handleResendCode}
            verificationType='phone'
          />
        </div>
      )}

      {error && <div className={css.error}>{error}</div>}
    </div>
  );
}

export { PhoneVerification };
