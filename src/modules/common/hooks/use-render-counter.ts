import React, { useCallback } from 'react';

export default function useRenderCounter() {
  const refs = React.useRef(0);
  refs.current += 1;

  const resetCount = useCallback(() => {
    refs.current = 0;
  }, []);

  return { count: refs.current, resetCount };
}
