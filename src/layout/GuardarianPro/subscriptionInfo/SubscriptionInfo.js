import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/dist/client/router';

import { useSelector, useDispatch } from 'react-redux';

import apiClientSubscriptionsInfo from 'api/api-recurring-payments';

import { Button } from 'components/Button/Button';
import { Popover } from 'components/Popover/Popover';
import { NewArrowLeft } from 'components/Icons/ArrowLeft';

import { Footer } from 'layout/Footer';
import { Header } from 'layout/Header';
import css from 'layout/GuardarianPro/subscriptions/ProSubscriptions.module.scss';
import { ContainerWithSidebar } from 'layout/GuardarianPro/components/containerWithSidebar';

import { deleteToken } from 'utils/checkLocalStorageExpire';
import { setIsAuth, selectIsAuth } from 'utils/store/features/authSlice';
import { selectSubscriptionById, updateSubscriptionInList } from 'utils/store/features/proSlice';

import { columns } from './utils';
import styles from './styles.module.scss';

import { Table } from '../components/table';
import { AccountInfo } from '../components/accountInfo';
import { datePrettifier, mappedStatuses, cutString } from '../utils';
import { StatusContainer } from '../components/statusContainer';
import { ActionsContainer } from '../components/actionsContainer/ActionsContainer';

function SubscriptionInfo() {
  const router = useRouter();
  const { product, id } = router.query;
  const dispatch = useDispatch();

  const subscription = useSelector((state) => selectSubscriptionById(state, id));
  const [requests, setRequests] = useState(null);

  const subscriptionInfoData = useMemo(
    () => [
      {
        id: 1,
        title: 'Subscription id',
        value: subscription?.id,
      },
      {
        id: 2,
        title: 'Created at',
        value: datePrettifier(subscription?.startsAt),
      },
      {
        id: 3,
        title: 'Status',
        value: <StatusContainer status={mappedStatuses[subscription?.status]} />,
      },
      {
        id: 4,
        title: 'Card',
        value: '...',
      },
      {
        id: 5,
        title: 'Actions',
        value: <ActionsContainer singleSubPage id={subscription?.id} status={subscription?.status} />,
      },
      {
        id: 6,
        title: 'Total sent',
        value: `${subscription?.fromAmount?.substring(0, 5)} ${subscription?.fromCurrency}`,
      },
      {
        id: 7,
        title: 'Wallet',
        value: (
          <Popover
            popoverClassName={styles.popover}
            icon={<div>{cutString(subscription?.customerWalletAddress, 5, 5)}</div>}
          >
            <div>{subscription?.customerWalletAddress}</div>
          </Popover>
        ),
      },
      {
        id: 8,
        title: 'Total received',
        value: `~ ${subscription?.expectedToAmount?.substring(0, 7)} ${subscription?.toCurrency}`,
      },
    ],
    [subscription],
  );

  const getSubscriptionInfo = async () => {
    try {
      const subscriptionInfo = !subscription?.id
        ? await apiClientSubscriptionsInfo.getSubscriptionById(id)
        : subscription;

      const paymentRequests = await apiClientSubscriptionsInfo.getSubscriptionPaymentRequests(id);

      if (subscriptionInfo && paymentRequests) {
        dispatch(setIsAuth(true));

        if (!subscription?.id) {
          dispatch(updateSubscriptionInList(subscriptionInfo.data));
        }

        setRequests(paymentRequests.data.requests);

        return;
      }
    } catch (e) {
      if (e.statusCode !== 401) {
        router.push('/pro/subscriptions');

        return;
      }

      dispatch(setIsAuth(false));
      deleteToken();
      router.push('/');
    }
  };

  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    getSubscriptionInfo();
  }, []);

  if (product === 'subscriptions') {
    return (
      <>
        {isAuth && (
          <>
            <Header theme='none' />
            <div className='container'>
              <ContainerWithSidebar>
                <div className={css.container}>
                  <Button onClick={() => router.push('/pro/subscriptions')} className={styles.btn} lightGray>
                    <div className={styles.btnItems}>
                      <NewArrowLeft width='15' heigth='12' />
                      <span>Back</span>
                    </div>
                  </Button>
                  <div>
                    <div className={styles.title}>Subscription Info</div>
                    <AccountInfo
                      divider
                      noMarginTextContainer
                      containerClassName={styles.infoContainer}
                      data={subscriptionInfoData}
                    />
                  </div>
                  <Table
                    emptyMessage='No payment requests yet.'
                    title='History'
                    pageSize={5}
                    rows={requests}
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

  return null;
}

export { SubscriptionInfo };
