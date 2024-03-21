import React from 'react';

const AdditionalInfo = ({ width = '12', height = '12', className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox='0 0 24 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M4 6.5H20V8.5H4V6.5ZM4 11.5H20V13.5H4V11.5ZM4 16.5H20V18.5H4V16.5Z' fill='#4C9DE8' />
  </svg>
);

export { AdditionalInfo };
