const Exchanges = ({ isActive }) => (
  <svg width='20' height='20' viewBox='0 0 15 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12.3746 2.7L15 0V7.29H7.91132L10.5893 4.536C9.69078 3.792 8.66394 3.42 7.50875 3.42C6.21354 3.42 5.0846 3.876 4.12194 4.788C3.15928 5.7 2.62544 6.816 2.52042 8.136H0.0175029C0.12252 6.096 0.898483 4.374 2.34539 2.97C3.7923 1.566 5.51342 0.864 7.50875 0.864C9.34072 0.864 10.9627 1.476 12.3746 2.7ZM7.50875 14.58C8.80397 14.58 9.92999 14.124 10.8868 13.212C11.8436 12.3 12.3746 11.184 12.4796 9.864H14.9825C14.8775 11.904 14.1015 13.626 12.6546 15.03C11.2077 16.434 9.49242 17.136 7.50875 17.136C5.66511 17.136 4.03734 16.524 2.62544 15.3L0 18V10.71H7.08868L4.41074 13.464C5.32089 14.208 6.35356 14.58 7.50875 14.58Z'
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

export default Exchanges;
