/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { getRefreshToken, getAccessToken, setToken } from 'utils/checkLocalStorageExpire';

import apiClientAuth from './api-customer-cabinet-auth';
import config from '../../config';

const apiClientSubscriptionsInfo = axios.create({
  baseURL: config.guardarianRecurringPaymentsUrl,
  withCredentials: true,
});

apiClientSubscriptionsInfo.getAllSubscriptions = async () => {
  try {
    const result = await apiClientSubscriptionsInfo.get('/recurring-payment/all');

    return result;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

apiClientSubscriptionsInfo.getSubscriptionById = async (id) => {
  try {
    const result = await apiClientSubscriptionsInfo.get(`/recurring-payment/${id}`);

    return result;
  } catch (error) {
    throw error?.response?.data;
  }
};

apiClientSubscriptionsInfo.getSubscriptionPaymentRequests = async (id) => {
  try {
    const result = await apiClientSubscriptionsInfo.get(`/recurring-payment/${id}/requests`);

    return result;
  } catch (error) {
    throw error?.response?.data;
  }
};

apiClientSubscriptionsInfo.cancelSubscription = async (id) => {
  try {
    const result = await apiClientSubscriptionsInfo.post(`/recurring-payment/${id}/cancel`);

    return result;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

apiClientSubscriptionsInfo.pauseSubscription = async (id) => {
  try {
    const result = await apiClientSubscriptionsInfo.post(`/recurring-payment/${id}/pause`);

    return result;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

apiClientSubscriptionsInfo.continueSubscription = async (id) => {
  try {
    const result = await apiClientSubscriptionsInfo.post(`/recurring-payment/${id}/resume`);

    return result;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

apiClientSubscriptionsInfo.interceptors.request.use(
  async (conf) => {
    const token = getAccessToken();

    const requestConfig = { ...conf };

    requestConfig.headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    return requestConfig;
  },
  (error) => {
    Promise.reject(error);
  },
);

apiClientSubscriptionsInfo.interceptors.response.use(
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

export default apiClientSubscriptionsInfo;
