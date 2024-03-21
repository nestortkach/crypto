import React from 'react';

const AvailableForExchange = ({ buy = false, sell = false }) => {
  const enabledColor = '#03B481';
  const disabledColor = '#C9C9C9';

  return (
    <svg
      style={{ cursor: 'pointer' }}
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.752 9.65017L12.5562 7.84732L7.14633 2.4375L1.73651 7.84732L3.54063 9.65017L5.87133 7.31947L5.87133 19.1875L8.42133 19.1875L8.42133 7.32075L10.752 9.65145L10.752 9.65017Z'
        fill={buy ? enabledColor : disabledColor}
        fillOpacity={buy ? 1 : 0.5}
      >
        <title>Buy</title>
      </path>
      <path
        d='M19.1704 4.81256L16.6204 4.81256L16.6204 16.6819L14.2897 14.3499L12.4855 16.1527L17.8954 21.5626L23.3052 16.1527L21.5011 14.3499L19.1704 16.6819L19.1704 4.81256Z'
        fill={sell ? enabledColor : disabledColor}
        fillOpacity={sell ? 1 : 0.5}
      >
        <title>Buy</title>
      </path>
    </svg>
  );
};
export { AvailableForExchange };
