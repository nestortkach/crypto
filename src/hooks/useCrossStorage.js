import { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import { CrossStorageClient } from 'cross-storage';

import apiClientExchangesInfo from 'api/api-customer-cabinet-info';
import { getToken, setToken, deleteToken } from 'utils/checkLocalStorageExpire';

import { guardarianPaymentsPageUrl } from '../../config';
import { setIsAuth } from '../utils/store/features/authSlice';

function useCrossStorage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const storage = useRef(null);
  const isFirstRender = useRef(true);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!storage.current) {
      storage.current = new CrossStorageClient(guardarianPaymentsPageUrl);
    }

    const setKeys = async () => {
      try {
        const { accessToken, refreshToken, expiresIn } = getToken();
        const access_token = await storage.current.get('access_token');
        const refresh_token = await storage.current.get('refresh_token');
        const expires_in = await storage.current.get('expires_in');

        if (
          ![accessToken, refreshToken, expiresIn].includes('undefined') &&
          accessToken &&
          refreshToken &&
          expiresIn &&
          new Date(expiresIn).getTime() > new Date(expires_in).getTime()
        ) {
          if (isFirstRender.current) {
            isFirstRender.current = false;
            const response = await apiClientExchangesInfo.getCustomerInfo(accessToken);

            if (!response.data) {
              throw new Error(response);
            }

            dispatch(setIsAuth(true));
          }

          await storage.current.set('access_token', accessToken);
          await storage.current.set('refresh_token', refreshToken);
          await storage.current.set('expires_in', expiresIn);
          setData({ access_token: accessToken, refresh_token: refreshToken, expires_in: expiresIn });

          return;
        }

        if (
          ![access_token, refresh_token, expires_in].includes('undefined') &&
          access_token &&
          refresh_token &&
          expires_in
        ) {
          if (isFirstRender.current) {
            isFirstRender.current = false;
            const response = await apiClientExchangesInfo.getCustomerInfo(access_token);

            if (!response.data) {
              throw new Error(response);
            }

            dispatch(setIsAuth(true));
          }

          setToken({ accessToken: access_token, refreshToken: refresh_token, expiresIn: expires_in });
          setData({ access_token, refresh_token, expires_in });
        }
      } catch (e) {
        dispatch(setIsAuth(false));
        deleteToken();
        await storage.current.del('access_token');
        await storage.current.del('refresh_token');
        await storage.current.del('expires_in');
      }
    };

    storage.current
      .onConnect()
      .then(setKeys)
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [router.pathname]);

  const logout = useCallback(async () => {
    deleteToken();
    await storage.current.del('access_token');
    await storage.current.del('refresh_token');
    await storage.current.del('expires_in');
  }, [storage]);

  return {
    data,
    error,
    loading,
    logout,
  };
}

export { useCrossStorage };
