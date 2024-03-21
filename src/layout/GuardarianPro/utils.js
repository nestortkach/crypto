export const mappedStatuses = {
  WAITING_KYC: 'Processing',
  WAITING_BILLING_ADDRESS: 'Processing',
  WAITING_ATTACHING_CARD: 'Processing',
  WAITING_RECEIVE_CARD: 'Processing',
  WAITING_RISK_CONTROL: 'Processing',
  WAITING_CUSTOMER_EXTRA_VERIFICATION: 'Processing',
  WAITING_CUSTOMER_EXTRA_VERIFICATION_APPROVE: 'Processing',
  WAITING_CONFIRMATION: 'Processing',
  ACTIVE: 'Active',
  PAUSED: 'Paused',
  CANCELLED: 'Cancelled',
  EXPIRED: 'Expired',
  FAILED: 'Failed',
  MANUAL_CHECK: 'Processing',
  SCHEDULED: 'Scheduled',
  PROCESSING: 'Processing',
  FINISHED: 'Finished',
};

export const statusesForSingleSubPage = {
  ACTIVE: 'Active',
  PAUSED: 'Paused',
  CANCELLED: 'Cancelled',
  EXPIRED: 'Expired',
};

export const statusesForCancel = [
  'INIT',
  'WAITING_CURRENCY_SELECTION',
  'WAITING_PAYMENT_PERIOD',
  'WAITING_WALLET_ADDRESS',
  'WAITING_CUSTOMER',
  'WAITING_KYC',
  'WAITING_ATTACHING_CARD',
  'WAITING_BILLING_ADDRESS',
  'WAITING_CUSTOMER_EXTRA_VERIFICATION',
  'WAITING_CONFIRMATION',
  'ACTIVE',
  'PAUSED',
];

export const activeStatus = 'ACTIVE';
export const pausedStatus = 'PAUSED';

export const datePrettifier = (date) => {
  if (!date) {
    return '-';
  }

  return date?.substring(0, 10)?.split('-')?.reverse()?.join('/');
};

export const dateWithTimeFormatter = (datestring) => {
  if (!datestring) {
    return '';
  }

  const date = new Date(datestring);
  const time = new Date(date).toLocaleTimeString('en', { timeStyle: 'short', hour12: false });

  return `${datePrettifier(datestring)} ${time}`;
};

export const cutString = (string, firstShownSymbols, lastShownSymbols) =>
  `${string?.slice(0, firstShownSymbols)}...${string?.slice(-lastShownSymbols)}`;
