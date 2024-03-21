import { memo } from 'react';
import Link from 'next/link';
import { statusesForSingleSubPage } from 'layout/GuardarianPro/utils';
import css from './styles.module.scss';

const TableLink = memo(({ id, url, status }) => {
  if (statusesForSingleSubPage[status]) {
    return (
      <Link href={`/pro/subscriptions/${id}`}>
        <span className={css.cellLink}>{id}</span>
      </Link>
    );
  }

  return (
    <a target='_blank' rel='noreferrer' key={id} href={url} className={css.cellLink}>
      {id}
    </a>
  );
});

TableLink.displayName = 'TableLink';

export { TableLink };
