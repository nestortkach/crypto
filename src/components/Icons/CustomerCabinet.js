const CustomerCabinet = ({ className, isDark }) => (
  <svg className={className} xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
    <path
      d='M10 0C4.579 0 0 4.579 0 10C0 15.421 4.579 20 10 20C15.421 20 20 15.421 20 10C20 4.579 15.421 0 10 0ZM10 5C11.727 5 13 6.272 13 8C13 9.728 11.727 11 10 11C8.274 11 7 9.728 7 8C7 6.272 8.274 5 10 5ZM4.894 14.772C5.791 13.452 7.287 12.572 9 12.572H11C12.714 12.572 14.209 13.452 15.106 14.772C13.828 16.14 12.015 17 10 17C7.985 17 6.172 16.14 4.894 14.772Z'
      fill={isDark ? 'url(#paint0_linear_9743_122109)' : '#fff'}
    />
    <defs>
      <linearGradient
        id='paint0_linear_9743_122109'
        x1='0.132813'
        y1='-0.000128159'
        x2='20.0707'
        y2='0.0706304'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#000756' />
        <stop offset='1' stopColor='#003CA7' />
      </linearGradient>
    </defs>
  </svg>
);

export default CustomerCabinet;
