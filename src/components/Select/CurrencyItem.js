import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export const CurrencyItem = ({ item, isActive }) => {
  const getImageURL = (ticker, network) => {
    switch (`${ticker.toLowerCase()}-${network.toLowerCase()}`) {
      case 'twd-twd':
        return `/currencies/${ticker.toLowerCase()}-${network.toLowerCase()}.webp`;
      case 'clp-clp':
        return `/currencies/${ticker.toLowerCase()}-${network.toLowerCase()}.png`;
      case 'ars-ars':
        return `/currencies/${ticker.toLowerCase()}-${network.toLowerCase()}.png`;
      case 'bhd-bhd':
        return `/currencies/${ticker.toLowerCase()}-${network.toLowerCase()}.webp`;
      default:
        return `/currencies/${ticker.toLowerCase()}-${network.toLowerCase()}.svg`;
    }
  };

  return (
    <div title={item.title} className={cn(styles.item, 'currency-item', { [styles.isActiveItem]: isActive })}>
      <img
        src={getImageURL(item.id, item.network)}
        width={20}
        height={20}
        className={cn('img', { [styles.rounded]: `${item.id}-${item.network}` === 'TWD-TWD' })}
        alt='ticker'
      />

      <div className='ticker'>
        {item.id}
        {item.network && item.network !== item.id && <sup>{item.network}</sup>}
      </div>
      <div className='currency-name'>{item.title}</div>
    </div>
  );
};
