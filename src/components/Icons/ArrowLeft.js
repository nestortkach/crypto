import React from 'react';

const ArrowLeft = ({ onClick, name, ...rest }) => (
  <svg
    onClick={onClick}
    name={name}
    {...rest}
    style={{ cursor: 'pointer !important' }}
    width='48'
    height='49'
    viewBox='0 0 48 49'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect y='0.5' width='48' height='48' rx='24' fill='#F3F9FF' />
    <path
      d='M24.707 19.207L23.293 17.793L16.586 24.5L23.293 31.207L24.707 29.793L20.414 25.5L30 25.5L30 23.5L20.414 23.5L24.707 19.207Z'
      fill='#5583FF'
    />
  </svg>
);
const ArrowLeftNew = ({ onClick, name, ...rest }) => (
  <svg
    onClick={onClick}
    name={name}
    {...rest}
    style={{ cursor: 'pointer !important' }}
    width='60'
    height='57'
    viewBox='0 0 65 49'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M24.707 19.207L23.293 17.793L16.586 24.5L23.293 31.207L24.707 29.793L20.414 25.5L30 25.5L30 23.5L20.414 23.5L24.707 19.207Z'
      fill='#F3F9FF'
    />
  </svg>
);

const NewArrowLeft = ({ width, height, onClick, name, ...rest }) => (
  <svg
    onClick={onClick}
    name={name}
    {...rest}
    style={{ cursor: 'pointer !important' }}
    width={width ?? '31'}
    height={height ?? '26'}
    viewBox='0 0 31 26'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M31.5001 11.3334H7.19006L16.0117 2.5117L13.6551 0.155029L0.810059 13L13.6551 25.845L16.0117 23.4884L7.19006 14.6667H31.5001V11.3334Z'
      fill='url(#paint0_linear_181_3500)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_181_3500'
        x1='31.5001'
        y1='0.155031'
        x2='-3.84984'
        y2='13.5169'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#000756' />
        <stop offset='1' stopColor='#0042B8' />
      </linearGradient>
    </defs>
  </svg>
);

export { ArrowLeft, NewArrowLeft, ArrowLeftNew };
