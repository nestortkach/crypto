/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { getRefreshToken, getAccessToken, setToken } from 'utils/checkLocalStorageExpire';

import apiClientAuth from './api-customer-cabinet-auth';
import config from '../../config';

const apiClientExchangesInfo = axios.create({
  baseURL: config.guardarianCustomerCabinetUrl,
  withCredentials: true,
});

apiClientExchangesInfo.getCustomerInfo = async (token) => {
  try {
    const result = await apiClientExchangesInfo.get('/customers/info', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

apiClientExchangesInfo.getCustomerLimits = async (token) => {
  try {
    const result = await apiClientExchangesInfo.get('/customers/limits', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

apiClientExchangesInfo.getCustomerTransactions = async () => {
  try {
    const result = await apiClientExchangesInfo.get('/customers/transactions');

    return result;
  } catch (error) {
    throw new Error(error?.response?.data?.message);
  }
};

apiClientExchangesInfo.addEmail = async (email) => {
  try {
    const result = await apiClientExchangesInfo.post('/customers/add-email', {
      email,
    });

    return result;
  } catch (error) {
    throw new Error(error?.response?.data?.message);
  }
};

apiClientExchangesInfo.interceptors.request.use(
  async (conf) => {
    const token = getAccessToken();
    const requestConfig = { ...conf };

    if (!requestConfig.headers?.Authorization || requestConfig.headers?.Authorization?.length < 20) {
      requestConfig.headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      };
    }

    return requestConfig;
  },
  (error) => {
    Promise.reject(error);
  },
);

apiClientExchangesInfo.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();
        const response = await apiClientAuth.refreshToken(refreshToken);

        if (response.data) {
          setToken(response.data);
        }

        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
        return apiClientAuth(originalRequest);
      } catch (e) {
        console.log(e);
      }
    }
    return Promise.reject(error);
  },
);

export default apiClientExchangesInfo;
