/* eslint-disable react/display-name */
import { TableLink } from '../components/tableLink';
import { guardarianPaymentsPageUrl } from '../../../../config';
import { datePrettifier } from '../utils';

export const columns = [
  {
    id: 1,
    key: 'id',
    title: 'Tx. id',
    render: (_, { id, status }) => (
      <TableLink status={status} url={`${guardarianPaymentsPageUrl}/checkout?tid=${id}`} id={id} />
    ),
  },
  {
    id: 2,
    key: 'status',
    title: 'Status',
  },
  {
    id: 3,
    key: 'createdAt',
    title: 'Creation Time',
    render: (_, { createdAt }) => datePrettifier(createdAt),
  },
  {
    id: 4,
    key: 'from',
    title: 'From',
  },
  {
    id: 5,
    key: 'to',
    title: 'To',
  },
];
