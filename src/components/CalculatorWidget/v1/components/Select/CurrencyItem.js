import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export const CurrencyItem = ({ item, isActive, isListItem, title }) => {
  const getImageURL = (ticker, network) => {
    switch (`${ticker.toLowerCase()}-${network.toLowerCase()}`) {
      case 'twd-twd':
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
      
      <div className={title === "Buy Iotex (IOTX)" ? "ticker2" : "ticker"}>
        {`${item.id.length < 6 || isListItem ? item.id : item.id.substring(0, 5)}${
          item.id.length >= 6 && !isListItem ? '.' : ''
        }`}
        {item.network && item.network !== item.id && <sup>{item.network}</sup>}
      </div>

      <div className='currency-name'>{item.title}</div>
    </div>
  );
};
