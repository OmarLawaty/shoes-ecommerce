import { useState } from 'react';

export const useCounter = (initialValue: number, maxValue?: number) => {
  const [count, setCount] = useState(initialValue);

  return {
    count,
    setCount: (value: number) => setCount(value),
    increment: () => {
      if (maxValue) {
        count === maxValue ? setCount(0) : setCount(count + 1);
      } else {
        setCount(count + 1);
      }
    },
    decrement: () => {
      if (maxValue) {
        count === 0 ? setCount(maxValue) : setCount(count - 1);
      } else {
        return;
      }
    },
  };
};
