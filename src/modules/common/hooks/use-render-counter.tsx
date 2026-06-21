import React, { useCallback } from 'react';

export function useRenderCounter() {
  const refs = React.useRef(0);
  refs.current += 1;

  const resetCount = useCallback(() => {
    refs.current = 0;
  }, []);

  return { count: refs.current, resetCount };
}
