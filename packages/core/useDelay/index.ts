import {useEffect, useRef} from 'react';

export const useDelay = () => {
  const timeoutRef = useRef<number | null>(null);

  const delayAction = (callback: () => void, delay: number) => {
    clearTimeout(timeoutRef.current!);
    timeoutRef.current = setTimeout(callback, delay) as unknown as number;
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current!);
    };
  }, []);

  return delayAction;
};
