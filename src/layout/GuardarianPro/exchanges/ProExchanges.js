import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useSelector, useDispatch } from 'react-redux';

import apiClientExchangesInfo from 'api/api-customer-cabinet-info';
import CalculatorWidget from 'components/CalculatorWidget/v1';

import { Footer } from 'layout/Footer';
import { Header } from 'layout/Header';
import { ContainerWithSidebar } from 'layout/GuardarianPro/components/containerWithSidebar';

import { deleteToken } from 'utils/checkLocalStorageExpire';
import { setIsAuth, selectIsAuth } from 'utils/store/features/authSlice';

import css from './ProExchanges.module.scss';
import { columns } from './utils';

import { Table } from '../components/table';

function ProExchanges() {
  const [transactionsInfo, setTransactionsInfo] = useState(null);
  const isAuth = useSelector(selectIsAuth);

  const router = useRouter();
  const dispatch = useDispatch();

  const getTransactionsInfo = async () => {
    try {
      const response = await apiClientExchangesInfo.getCustomerTransactions();

      if (response) {
        const mappedResponse = response.data.map((el) => ({
          ...el,
          from: `${el?.fromAmount?.substring(0, 8)} ${el?.fromCurrency}`,
          to: `${el?.toAmount !== 'null' ? el?.toAmount?.substring(0, 8) : 0} ${el?.toCurrency}`,
        }));

        dispatch(setIsAuth(true));
        setTransactionsInfo(mappedResponse);

        return;
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
                <CalculatorWidget
                  containerClass={css.calculatorContainer}
                  calculatorClass={css.calculator}
                  widgetDataProp={{
                    theme: 'darkblue',
                    type: 'wide',
                    partnerApiToken: 'c14d927f-cb01-4561-9520-28ec22c92710',
                  }}
                />
                <Table
                  emptyMessage='No transactions yet. Create your first!'
                  title='History'
                  pageSize={5}
                  rows={transactionsInfo}
                  columns={columns}
                />
              </div>
            </ContainerWithSidebar>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export { ProExchanges };
