import React from 'react';

const ArrowRight = ({ onClick, name, ...rest }) => (
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
      d='M23.293 29.793L24.707 31.207L31.414 24.5L24.707 17.793L23.293 19.207L27.586 23.5H18V25.5H27.586L23.293 29.793Z'
      fill='#5583FF'
    />
  </svg>
);

const ArrowRightNew = ({ onClick, name, ...rest }) => (
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
      d='M23.293 29.793L24.707 31.207L31.414 24.5L24.707 17.793L23.293 19.207L27.586 23.5H18V25.5H27.586L23.293 29.793Z'
      fill='#F3F9FF'
    />
  </svg>
);

const NewArrowRight = ({ color, width, height, onClick, name, ...rest }) => (
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
      d='M0.499942 14.6666L24.8099 14.6666L15.9883 23.4883L18.3449 25.845L31.1899 13L18.3449 0.154969L15.9883 2.51164L24.8099 11.3333L0.499942 11.3333L0.499942 14.6666Z'
      fill={color ?? 'url(#paint0_linear_181_3502)'}
    />
    <defs>
      <linearGradient
        id='paint0_linear_181_3502'
        x1='0.49994'
        y1='25.845'
        x2='35.8498'
        y2='12.4831'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#000756' />
        <stop offset='1' stopColor='#0042B8' />
      </linearGradient>
    </defs>
  </svg>
);

export { ArrowRight, NewArrowRight, ArrowRightNew };
