import { useState, useEffect } from 'react';

function useIsScreenWidthLessThan(maxWidth) {
  const [isLessThan, setIsLessThan] = useState(false);

  useEffect(() => {
    if (window.innerWidth < maxWidth) {
      setIsLessThan(true)
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    const handleChange = () => {
      setIsLessThan(mediaQuery.matches);
    };

    // Set the initial state and add the listener
    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [maxWidth]);

  return isLessThan;
}

export default useIsScreenWidthLessThan;
