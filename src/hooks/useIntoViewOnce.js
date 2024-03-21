import { useState, useEffect } from 'react';

export function useIntoViewOnce(ref) {
  const [wasSeen, setWasSeen] = useState(typeof IntersectionObserver !== 'function');

  useEffect(() => {
    if (ref.current && !wasSeen) {
      const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setWasSeen(true));
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
    return null;
  }, [wasSeen]);

  return wasSeen;
}
