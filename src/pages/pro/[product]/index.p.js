import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';

import apiClientExchangesInfo from 'api/api-customer-cabinet-info';

import { setIsAuth } from 'utils/store/features/authSlice';
import { deleteToken, getToken } from 'utils/checkLocalStorageExpire';
import { CrossStorage } from 'utils/context/crossStorageContext';

import { DocHead } from 'layout/Head';
import { ProExchanges } from 'layout/GuardarianPro/exchanges';
import { ProSubscriptions } from 'layout/GuardarianPro/subscriptions';
import { ProSettings } from 'layout/GuardarianPro/settings';

import { guardarianRecurringPaymentsDisabled } from '../../../../config';

export default function Pro() {
  const { logout, loading } = useContext(CrossStorage);

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const getScreen = useCallback(() => {
    switch (router.query.product) {
      case 'exchanges':
        return <ProExchanges />;
      case 'subscriptions':
        return <ProSubscriptions />;
      case 'settings':
        return <ProSettings />;
      default:
        return null;
    }
  }, [router.query]);

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
          {getScreen()}
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const productPages = ['settings', 'exchanges'];

  if (guardarianRecurringPaymentsDisabled !== 'true') {
    productPages.push('subscriptions');
  }

  if (!productPages.includes(context.query.product)) {
    return { notFound: true };
  }

  return {
    props: {},
  };
}
