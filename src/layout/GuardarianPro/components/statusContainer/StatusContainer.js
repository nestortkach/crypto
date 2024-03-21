import { memo } from 'react';
import cn from 'classnames';

import css from './styles.module.scss';

const StatusContainer = memo(({ id, status }) => {
  const containerClassName = cn({
    [css.active]: ['Active', 'Finished'].includes(status),
    [css.failed]: ['Failed', 'Cancelled'].includes(status),
    [css.paused]: ['Paused', 'Processing', 'Scheduled'].includes(status),
  });

  return (
    <div key={id} className={containerClassName}>
      {status}
    </div>
  );
});

StatusContainer.displayName = 'StatusContainer';

export { StatusContainer };
