import { useState, useEffect } from 'react';

export const breakpoints = {
  md: 'laptop',
  sm: 'tablet',
  xs: 'mobile',
};

function getWindowSizeName(windowWidth) {
  if (windowWidth > 1023) {
    return breakpoints.md;
  }

  if (windowWidth <= 1023 && windowWidth > 767) {
    return breakpoints.sm;
  }

  return breakpoints.xs;
}

export function useBreakPoint() {
  const [breakpoint, setWindowSize] = useState('');

  useEffect(() => {
    function handleResize() {
      const currentPoint = getWindowSizeName(window.innerWidth);

      if (currentPoint !== breakpoint) {
        setWindowSize(currentPoint);
      }
    }

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return breakpoint;
}
