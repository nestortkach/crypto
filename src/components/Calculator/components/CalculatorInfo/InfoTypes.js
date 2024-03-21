import React from 'react';

const Division = ({ color = 'white' }) => (
  <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9.87451 5.906H0.125488V4.09424H9.87451V5.906Z' fill={color} />
    <circle cx='5.04311' cy='1.4197' r='1.38039' fill={color} />
    <circle cx='5.04311' cy='8.58059' r='1.38039' fill={color} />
  </svg>
);

const Equal = ({ color = 'white' }) => (
  <svg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.84003 2.21986H0.160034V0.800049H9.84003V2.21986ZM9.84003 5.20005H0.160034V3.78727H9.84003V5.20005Z'
      fill={color}
    />
  </svg>
);

const Minus = ({ color = 'white' }) => (
  <svg width='10' height='4' viewBox='0 0 10 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M0.160034 3.32005H9.84003V0.680054H0.160034V3.32005Z' fill={color} />
  </svg>
);

export { Division, Equal, Minus };
