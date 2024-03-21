import React from 'react';

function Info({ width, height }) {
  return (
    <svg
      width={width ?? '16'}
      height={height ?? '15'}
      viewBox='0 0 16 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.625 7.5C0.625 3.3645 3.9895 0 8.125 0C12.2605 0 15.625 3.3645 15.625 7.5C15.625 11.6355 12.2605 15 8.125 15C3.9895 15 0.625 11.6355 0.625 7.5ZM2.125 7.5C2.125 10.8082 4.81675 13.5 8.125 13.5C11.4332 13.5 14.125 10.8082 14.125 7.5C14.125 4.19175 11.4332 1.5 8.125 1.5C4.81675 1.5 2.125 4.19175 2.125 7.5ZM8.875 11.25V6.75H7.375V11.25H8.875ZM8.875 5.25V3.75H7.375V5.25H8.875Z'
        fill='currentColor'
      />
    </svg>
  );
}

export { Info };
