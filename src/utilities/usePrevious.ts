import { useEffect, useRef } from 'react';

// Hook
const usePrevious = <T>(value: T): T | undefined => {
  // mutable
  const ref = useRef<T>();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
};

export default usePrevious;
