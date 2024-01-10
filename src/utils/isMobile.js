import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const [windowSize, setWindowSize] = useState({
    isMobile: window.innerWidth <= 768,
  });

  const handleWindowSizeChange = () => {
    setWindowSize({
      isMobile: window.innerWidth <= 768,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return windowSize;
};

