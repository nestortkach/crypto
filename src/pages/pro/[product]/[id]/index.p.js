import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';

import apiClientExchangesInfo from 'api/api-customer-cabinet-info';

import { DocHead } from 'layout/Head';
import { SubscriptionInfo } from 'layout/GuardarianPro/subscriptionInfo';

import { setIsAuth } from 'utils/store/features/authSlice';
import { deleteToken, getToken } from 'utils/checkLocalStorageExpire';
import { CrossStorage } from 'utils/context/crossStorageContext';

export default function SingleSubscription() {
  const { logout, loading } = useContext(CrossStorage);

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const removeSession = () => {
    logout();
    dispatch(setIsAuth(false));
    deleteToken();
    router.push('/');
  };

  async function refresh() {
    const token = getToken();

    if (!token?.refreshToken) {
      removeSession();
      return;
    }

    const response = await apiClientExchangesInfo.getCustomerInfo();

    if (!response.data) {
      removeSession();
      return;
    }

    dispatch(setIsAuth(true));
  }

  useEffect(() => {
    if (!loading) {
      refresh();
      setIsLoading(false);
    }
  }, [loading]);

  return (
    <>
      {!isLoading && (
        <>
          <DocHead title='Guardarian Pro - Buy/Sell Crypto' />
          <SubscriptionInfo />
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  if (context.query.product !== 'subscriptions') {
    return { notFound: true };
  }

  return {
    props: {},
  };
}
