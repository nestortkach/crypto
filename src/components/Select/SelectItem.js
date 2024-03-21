import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export default function SelectItem({ item, isActive }) {
  return (
    <div className={cn(styles.item, { [styles.isActiveItem]: isActive })}>
      <div className={styles.itemInfo}>
        <div className={cn(styles.itemTitle, 'select_item-text')}>{item.title}</div>
      </div>
    </div>
  );
}
