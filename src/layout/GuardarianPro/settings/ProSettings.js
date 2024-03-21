import { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useDispatch, useSelector } from 'react-redux';

import apiClientExchangesInfo from 'api/api-customer-cabinet-info';
import CalculatorWidget from 'components/CalculatorWidget/v1';

import { Footer } from 'layout/Footer';
import { Header } from 'layout/Header';
import { CustomPopup } from 'layout/Login/CustomPopup';
import { EmailVerification } from 'layout/Login/EmailVerification';
import { ContainerWithSidebar } from 'layout/GuardarianPro/components/containerWithSidebar';

import { deleteToken } from 'utils/checkLocalStorageExpire';
import { setIsAuth, selectIsAuth } from 'utils/store//features/authSlice';

import css from './ProSettings.module.scss';
import styles from '../components/actionsContainer/ActionsContainer.module.scss';

import { AccountInfo } from '../components/accountInfo';

function ProSettings() {
  const [addedEmail, setNewEmail] = useState(null);
  const [limitsInfo, setLimitsInfo] = useState(null);
  const [customerInfo, setCustomerInfo] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClose = () => setShowPopup(false);
  const handlePopupOpen = () => setShowPopup(true);

  const isAuth = useSelector(selectIsAuth);

  const getEmail = useCallback(() => {
    if (customerInfo && !customerInfo?.emails[0]?.email) {
      return (
        <button onClick={handlePopupOpen} className={css.addButton} type='button'>
          Add email
        </button>
      );
    }

    if (addedEmail) {
      return addedEmail;
    }

    return Array.isArray(customerInfo?.emails) && customerInfo?.emails[0]?.email;
  }, [addedEmail, customerInfo]);

  const customerInfoData = useMemo(
    () => [
      {
        title: 'Phone number',
        value: Array.isArray(customerInfo?.phoneNumbers) && customerInfo?.phoneNumbers[0]?.phoneNumber,
      },
      {
        title: 'Successful exchanges',
        value: customerInfo?.finishedTransactionsNumber ?? '',
      },
      {
        title: 'Name & Surname',
        value:
          customerInfo?.firstName && customerInfo?.lastName && `${customerInfo?.firstName} ${customerInfo?.lastName}`,
      },
      {
        title: 'Last Exchange',
        value: Array.isArray(customerInfo?.phoneNumbers) && customerInfo?.phoneNumbers[0]?.phoneNumber,
      },
      {
        title: 'Email',
        value: getEmail(),
      },
    ],
    [customerInfo, addedEmail],
  );

  const limitsInfoData = useMemo(() => {
    const cardDepositsLimit = {
      alreadyUsedLimit: {
        DAILY: Math.max(limitsInfo?.CIRCLE?.alreadyUsedLimit?.DAILY, limitsInfo?.UNLIMINT?.alreadyUsedLimit?.DAILY),
        MONTHLY: Math.max(
          limitsInfo?.CIRCLE?.alreadyUsedLimit?.MONTHLY,
          limitsInfo?.UNLIMINT?.alreadyUsedLimit?.MONTHLY,
        ),
      },
      limit: {
        DAILY: Math.max(limitsInfo?.CIRCLE?.limit?.DAILY, limitsInfo?.UNLIMINT?.limit?.DAILY),
        MONTHLY: Math.max(limitsInfo?.CIRCLE?.limit?.MONTHLY, limitsInfo?.UNLIMINT?.limit?.MONTHLY),
      },
    };

    return [
      {
        id: 1,
        title: 'Bank card',
        value: '',
        isTitle: true,
      },
      {
        id: 2,
        title: 'Daily',
        value:
          limitsInfo &&
          `${Number(cardDepositsLimit?.limit?.DAILY) - Number(cardDepositsLimit?.alreadyUsedLimit?.DAILY)} / ${Number(
            cardDepositsLimit?.limit?.DAILY,
          )}`,
      },
      {
        id: 3,
        title: 'Monthly',
        value:
          limitsInfo &&
          `${
            Number(cardDepositsLimit?.limit?.MONTHLY) - Number(cardDepositsLimit?.alreadyUsedLimit?.MONTHLY)
          } / ${Number(cardDepositsLimit?.limit?.MONTHLY)}`,
      },
      {
        id: 4,
        title: 'Wire transfer',
        value: '',
        isTitle: true,
      },
      {
        id: 5,
        title: 'Daily',
        value:
          limitsInfo &&
          `${
            Number(limitsInfo?.CLEAR_JUNCTION?.limit?.DAILY) -
            Number(limitsInfo?.CLEAR_JUNCTION?.alreadyUsedLimit?.DAILY)
          } / ${Number(limitsInfo?.CLEAR_JUNCTION?.limit?.DAILY)}`,
      },
      {
        id: 6,
        title: 'Monthly',
        value:
          limitsInfo &&
          `${
            Number(limitsInfo?.CLEAR_JUNCTION?.limit?.MONTHLY) -
            Number(limitsInfo?.CLEAR_JUNCTION?.alreadyUsedLimit?.MONTHLY)
          } / ${Number(limitsInfo?.CLEAR_JUNCTION?.limit?.MONTHLY)}`,
      },
      {
        id: 7,
        title: 'Crypto deposit',
        value: '',
        isTitle: true,
      },
      {
        id: 8,
        title: 'Daily',
        value:
          limitsInfo &&
          `${
            Number(limitsInfo?.CRYPTO_THROUGH_CN?.limit?.DAILY) -
            Number(limitsInfo?.CRYPTO_THROUGH_CN?.alreadyUsedLimit?.DAILY)
          } / ${Number(limitsInfo?.CRYPTO_THROUGH_CN?.limit?.DAILY)}`,
      },
      {
        id: 9,
        title: 'Monthly',
        value:
          limitsInfo &&
          `${
            Number(limitsInfo?.CRYPTO_THROUGH_CN?.limit?.MONTHLY) -
            Number(limitsInfo?.CRYPTO_THROUGH_CN?.alreadyUsedLimit?.MONTHLY)
          } / ${Number(limitsInfo?.CRYPTO_THROUGH_CN?.limit?.MONTHLY)}`,
      },
    ];
  }, [limitsInfo]);

  const router = useRouter();
  const dispatch = useDispatch();

  const getCustomerInfo = async () => {
    try {
      const limits = await apiClientExchangesInfo.getCustomerLimits();
      const account = await apiClientExchangesInfo.getCustomerInfo();

      if (limits.data && account.data) {
        setLimitsInfo(limits.data);
        setCustomerInfo(account.data);
        dispatch(setIsAuth(true));

        return;
      }
    } catch (e) {
      dispatch(setIsAuth(false));
      deleteToken();
      router.push('/');
    }
  };

  useEffect(() => {
    getCustomerInfo();
  }, []);

  return (
    <>
      {isAuth && (
        <>
          <Header theme='none' />
          <div className='container'>
            <ContainerWithSidebar>
              <div className={css.container}>
                <div className={css.infoContainer}>
                  <AccountInfo data={customerInfoData} title='Account info' />
                  <AccountInfo data={limitsInfoData} title='My limits' hint='Remaining limit / total limit' />
                </div>
                <CalculatorWidget
                  containerClass={css.calculatorContainer}
                  calculatorClass={css.calculator}
                  widgetDataProp={{
                    theme: 'darkblue',
                    type: 'wide',
                    partnerApiToken: 'c14d927f-cb01-4561-9520-28ec22c92710',
                  }}
                />
              </div>
            </ContainerWithSidebar>
          </div>
          <Footer />
          <CustomPopup popupBgClass={styles.popup} title='Add email' visible={showPopup} onClose={handlePopupClose}>
            <EmailVerification addEmailPopup setNewEmail={setNewEmail} closePopup={handlePopupClose} />
          </CustomPopup>
        </>
      )}
    </>
  );
}

export { ProSettings };
