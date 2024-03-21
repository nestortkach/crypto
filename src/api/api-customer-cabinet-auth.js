/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import config from '../../config';

const apiClientAuth = axios.create({
  baseURL: config.guardarianCustomerCabinetUrl,
  withCredentials: true,
});

apiClientAuth.requestVerifyCode = async (verifiableType, verifiable, setError) => {
  try {
    const body = {
      verifiableType,
      verifiable,
    };

    const result = await apiClientAuth.post('/auth/request-verify-code', body);

    return result.data;
  } catch (error) {
    setError(error.response?.data?.message);
    return error.response?.data?.message;
  }
};

apiClientAuth.verifyCode = async (verifiableType, verifiable, verificationId, code, setError) => {
  try {
    const body = {
      verifiableType,
      verifiable,
      verificationId,
      code,
    };

    const result = await apiClientAuth.post('/auth/verify-code', body);

    return result.data;
  } catch (error) {
    if (error.response?.data?.message) {
      setError(error.response?.data?.message);
      return error.response?.data;
    }
    setError(
      `Incorrect code. Attempts left: ${
        error.response?.data?.maxVerificationAttempts - error.response?.data?.verificationAttempt
      }`,
    );
    return error.response?.data;
  }
};

apiClientAuth.refreshToken = async (refreshToken) => {
  try {
    const body = {
      refreshToken,
    };

    const result = await apiClientAuth.post('/auth/refresh-token', body);

    return result;
  } catch (error) {
    throw new Error(error?.response?.data?.message);
  }
};

export default apiClientAuth;
