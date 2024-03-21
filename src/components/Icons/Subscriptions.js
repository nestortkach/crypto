const Subscriptions = ({ isActive }) => (
  <svg width='20' height='20' viewBox='0 0 21 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6 7C7.995 7 9.5 5.495 9.5 3.5C9.5 1.505 7.995 0 6 0C4.005 0 2.5 1.505 2.5 3.5C2.5 5.495 4.005 7 6 7ZM7 7.948H5C2.243 7.948 0 10.191 0 12.948V13.948H1H2H10H11H12V12.948C12 10.191 9.757 7.948 7 7.948Z'
      fill={isActive ? 'url(#paint0_linear_9929_1935)' : 'url(#paint0_linear_9929_1382)'}
    />
    <path
      d='M14.793 7.465L12.914 5.586L11.5 7L14.793 10.293L20.914 4.172L19.5 2.758L14.793 7.465Z'
      fill={isActive ? 'url(#paint0_linear_9929_1935)' : 'url(#paint0_linear_9929_1382)'}
    />
    <defs>
      <linearGradient
        id='paint0_linear_9929_1382'
        x1='19.7912'
        y1='-0.000476264'
        x2='0.209273'
        y2='-0.000476264'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0.12' stopColor='#56A1FF' />
        <stop offset='1' stopColor='#5187DC' />
      </linearGradient>
      <linearGradient
        id='paint0_linear_9929_1935'
        x1='15'
        y1='8.47711e-07'
        x2='-3.46253'
        y2='4.86805'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#000756' />
        <stop offset='1' stopColor='#0042B8' />
      </linearGradient>
    </defs>
  </svg>
);

export default Subscriptions;
