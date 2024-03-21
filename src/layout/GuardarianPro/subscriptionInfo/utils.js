/* eslint-disable react/display-name */
import { mappedStatuses, dateWithTimeFormatter } from '../utils';
import { StatusContainer } from '../components/statusContainer';

export const columns = [
  {
    id: 1,
    key: 'id',
    title: 'ID',
  },
  {
    id: 2,
    key: 'amount',
    title: 'From',
  },
  {
    id: 3,
    key: 'executeIn',
    title: 'Payed out',
    render: (_, { executeIn }) => (executeIn ? dateWithTimeFormatter(executeIn) : '-'),
  },
  {
    id: 4,
    key: 'hash',
    title: 'Hash',
    render: (_, { hash }) => (hash ? `${hash?.slice(0, 8)}...` : '-'),
  },
  {
    id: 5,
    key: 'status',
    title: 'Status',
    render: (_, { id, status }) => <StatusContainer id={id} status={mappedStatuses[status]} />,
  },
];
