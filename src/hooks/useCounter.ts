import { useState } from 'react';

export const useCounter = (initialValue: number, maxValue?: number, loop: boolean = false) => {
  const [count, setCount] = useState(initialValue);

  return {
    count,
    setCount: (value: number) => setCount(value),
    increment: () => {
      if (!maxValue || maxValue !== count) return setCount(count + 1);

      if (loop) setCount(0);
    },
    decrement: () => {
      if (count > 0) return setCount(count - 1);

      if (loop && maxValue) setCount(maxValue);
    },
  };
};
