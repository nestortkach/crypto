import { useState, useEffect } from 'react';
import { useBreakPoint } from 'hooks/useResponsive';

const useResponsiveData = ({ init, mobileData, desktopData }) => {
  const [data, setData] = useState(init);
  const breakpint = useBreakPoint();
  useEffect(() => {
    if (breakpint === 'mobile') setData(mobileData);
    else setData(desktopData);
  }, [breakpint, mobileData, desktopData]);
  return data;
};

export { useResponsiveData };
