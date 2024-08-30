import { useState } from 'react';

interface CounterProps {
  initialCount?: number;
  maxCount?: number;
  loop?: boolean;
}

export const useCounter = ({ initialCount = 1, maxCount, loop = false }: CounterProps) => {
  const [count, setCount] = useState(initialCount);

  return {
    count,
    setCount: (value: number) => setCount(value),
    increment: () => {
      if (!maxCount || maxCount !== count) return setCount(count + 1);

      if (loop) setCount(0);
    },
    decrement: () => {
      if (count > 0) return setCount(count - 1);

      if (loop && maxCount) setCount(maxCount);
    },
  };
};
