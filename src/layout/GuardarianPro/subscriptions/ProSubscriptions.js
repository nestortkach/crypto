import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useSelector, useDispatch } from 'react-redux';

import apiClientSubscriptionsInfo from 'api/api-recurring-payments';

import { Footer } from 'layout/Footer';
import { Header } from 'layout/Header';
import { ContainerWithSidebar } from 'layout/GuardarianPro/components/containerWithSidebar';

import { CalculatorRecurring } from 'components/CalculatorRecurring';

import { setIsAuth, selectIsAuth } from 'utils/store/features/authSlice';
import { setSubscriptionList, selectAllSubscriptions } from 'utils/store/features/proSlice';
import { deleteToken } from 'utils/checkLocalStorageExpire';

import { columns } from './utils';
import css from './ProSubscriptions.module.scss';

import { Table } from '../components/table';
import { Faq } from '../components/faq/Faq';

function ProSubscriptions() {
  const isAuth = useSelector(selectIsAuth);
  const subscriptions = useSelector(selectAllSubscriptions);

  const router = useRouter();
  const dispatch = useDispatch();

  const getTransactionsInfo = async () => {
    try {
      const response = await apiClientSubscriptionsInfo.getAllSubscriptions();

      if (response.data) {
        dispatch(
          setSubscriptionList(
            response.data
              ?.map((el) => ({ ...el, actions: '' }))
              .sort((a, b) => -a.createdAt.localeCompare(b.createdAt)),
          ),
        );
        dispatch(setIsAuth(true));
      }
    } catch (e) {
      dispatch(setIsAuth(false));
      deleteToken();
      router.push('/');
    }
  };

  useEffect(() => {
    getTransactionsInfo();
  }, []);

  return (
    <>
      {isAuth && (
        <>
          <Header theme='none' />
          <div className='container'>
            <ContainerWithSidebar>
              <div className={css.container}>
                <CalculatorRecurring />
                <Table
                  containerClassName={css.tableContainer}
                  emptyMessage='No subscriptions yet. Create your first!'
                  title='Manage subscriptions'
                  pageSize={5}
                  rows={subscriptions}
                  columns={columns}
                />
                <Faq />
              </div>
            </ContainerWithSidebar>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}

export { ProSubscriptions };
