import { useState, useMemo, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import cn from 'classnames';

import apiClientSubscriptionsInfo from 'api/api-recurring-payments';

import { Button } from 'components/Button/Button';
import { Close } from 'components/Icons/Close';
import { Pause } from 'components/Icons/Pause';
import { AdditionalInfo } from 'components/Icons/AdditionalInfo';
import { Resume } from 'components/Icons/Resume';

import { CustomPopup } from 'layout/Login/CustomPopup';

import { updateSubscriptionInList } from 'utils/store/features/proSlice';

import css from './ActionsContainer.module.scss';
import { statusesForSingleSubPage, activeStatus, statusesForCancel, pausedStatus } from '../../utils';

const ActionsContainer = memo(({ id, status, singleSubPage }) => {
  const [showPausePopup, setShowPausePopup] = useState(false);
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [showContinuePopup, setShowContinuePopup] = useState(false);

  const dispatch = useDispatch();

  const actionCancel = async () => {
    const response = await apiClientSubscriptionsInfo.cancelSubscription(id);
    await dispatch(updateSubscriptionInList(response.data));

    setShowCancelPopup(false);
  };

  const actionPause = async () => {
    const response = await apiClientSubscriptionsInfo.pauseSubscription(id);
    await dispatch(updateSubscriptionInList(response.data));

    setShowPausePopup(false);
  };

  const actionContinue = async () => {
    const response = await apiClientSubscriptionsInfo.continueSubscription(id);
    await dispatch(updateSubscriptionInList(response.data));

    setShowContinuePopup(false);
  };

  const closePausePopup = () => {
    setShowPausePopup(false);
  };

  const closeCancelPopup = () => {
    setShowCancelPopup(false);
  };

  const closeContinuePopup = () => {
    setShowContinuePopup(false);
  };

  const router = useRouter();
  const data = useMemo(() => {
    if (singleSubPage) {
      return [
        {
          id: 1,
          title: 'Continue',
          image: Resume,
          onClick: () => setShowContinuePopup(true),
        },
        {
          id: 2,
          title: 'Pause',
          image: Pause,
          onClick: () => setShowPausePopup(true),
        },
        {
          id: 3,
          title: 'Cancel',
          image: Close,
          onClick: () => setShowCancelPopup(true),
        },
      ];
    }
    return [
      {
        id: 1,
        title: 'AdditionalInfo',
        image: AdditionalInfo,
        onClick: (subId) => router.push(`/pro/subscriptions/${subId}`),
      },
      {
        id: 2,
        title: status === pausedStatus ? 'Continue' : 'Pause',
        image: status === pausedStatus ? Resume : Pause,
        onClick: status === pausedStatus ? () => setShowContinuePopup(true) : () => setShowPausePopup(true),
      },
      {
        id: 3,
        title: 'Cancel',
        image: Close,
        onClick: () => setShowCancelPopup(true),
      },
    ];
  }, [router, singleSubPage, status]);

  return (
    <>
      {(singleSubPage || status === pausedStatus) && (
        <CustomPopup
          popupBgClass={css.popup}
          title='Confirm action'
          visible={showContinuePopup}
          onClose={closeContinuePopup}
        >
          <div>Do you really want to continue the subscription?</div>
          <div className={css.actionButtonsContainer}>
            <Button onClick={closeContinuePopup} lightGray className={css.actionButton}>
              Cancel
            </Button>
            <Button onClick={actionContinue} primary className={css.actionButton}>
              Confirm
            </Button>
          </div>
        </CustomPopup>
      )}
      <CustomPopup popupBgClass={css.popup} title='Confirm action' visible={showPausePopup} onClose={closePausePopup}>
        <div>Do you really want to pause the subscription?</div>
        <div className={css.actionButtonsContainer}>
          <Button onClick={closePausePopup} lightGray className={css.actionButton}>
            Cancel
          </Button>
          <Button onClick={actionPause} primary className={css.actionButton}>
            Confirm
          </Button>
        </div>
      </CustomPopup>
      <CustomPopup popupBgClass={css.popup} title='Confirm action' visible={showCancelPopup} onClose={closeCancelPopup}>
        <div>Do you really want to cancel the subscription?</div>
        <div className={css.actionButtonsContainer}>
          <Button onClick={closeCancelPopup} lightGray className={css.actionButton}>
            Cancel
          </Button>
          <Button onClick={actionCancel} primary className={css.actionButton}>
            Confirm
          </Button>
        </div>
      </CustomPopup>

      <div className={css.container}>
        {data.map((el) => {
          const ElementImage = el.image;
          const disabled =
            (!statusesForSingleSubPage[status] && el?.title === 'AdditionalInfo') ||
            (el.title === 'Pause' && status !== activeStatus) ||
            (el.title === 'Continue' && status !== pausedStatus) ||
            (el.title === 'Cancel' && !statusesForCancel.includes(status));

          return (
            <button disabled={disabled} type='button' onClick={() => el.onClick(id)} className={css.btn} key={el.id}>
              <ElementImage
                className={cn(css.image, { [css.disabled]: disabled })}
                fill='#4C9DE8'
                width='20px'
                height={['Cancel', 'Continue'].includes(el.title) ? '14px' : '20px'}
              />
            </button>
          );
        })}
      </div>
    </>
  );
});

ActionsContainer.displayName = 'ActionsContainer';

export { ActionsContainer };
