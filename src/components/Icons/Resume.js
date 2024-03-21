import React from 'react';

const Resume = ({ width = '12', height = '12', className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
  className={className}
  width={width}
  height={height}
    viewBox='0 0 9 10'
    fill='none'
  >
    <path d='M0.0834961 0V10L8.41683 5L0.0834961 0Z' fill='#4C9DE8' />
  </svg>
  // <svg
  //   xmlns='http://www.w3.org/2000/svg'
  //   className={className}
  //   width={width}
  //   height={height}
  //   viewBox='0 0 21 20'
  //   fill='none'
  // >
  //   <path d='M6.0835 5V15L14.4168 10L6.0835 5Z' fill='#4C9DE8' />
  // </svg>
);

export { Resume };
