/* eslint-disable react/display-name */
import { TableLink } from '../components/tableLink';
import { mappedStatuses, dateWithTimeFormatter } from '../utils';
import { guardarianPaymentsPageUrl } from '../../../../config';
import { StatusContainer } from '../components/statusContainer';
import { ActionsContainer } from '../components/actionsContainer';

export const columns = [
  {
    id: 1,
    key: 'id',
    title: 'ID',
    render: (_, { id, status }) => (
      <TableLink status={status} url={`${guardarianPaymentsPageUrl}/subscription?id=${id}`} id={id} />
    ),
  },
  {
    id: 2,
    key: 'fromToAmount',
    title: 'From → To',
    render: (_, el) => `${el?.fromAmount?.substring(0, 5)} ${el?.fromCurrency} → ${el?.toCurrency}`,
  },
  {
    id: 3,
    key: 'startsAt',
    title: 'Created At',
    render: (_, { createdAt }) => dateWithTimeFormatter(createdAt),
  },
  {
    id: 4,
    key: 'nextExchangeDate',
    title: 'Next exchange',
    render: (_, { nextExchangeDate }) => (nextExchangeDate ? dateWithTimeFormatter(nextExchangeDate) : '-'),
  },
  {
    id: 5,
    key: 'period',
    title: 'Frequency',
  },
  {
    id: 6,
    key: 'status',
    title: 'Status',
    render: (_, { id, status }) => <StatusContainer id={id} status={mappedStatuses[status]} />,
  },
  {
    id: 7,
    key: 'actions',
    title: 'Actions',
    render: (_, { id, status }) => <ActionsContainer id={id} status={status} />,
  },
];
