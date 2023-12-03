import React from 'react';
import { useHomeStore } from './home.store';

export const Home = () => {
  const [count, incCount] = useHomeStore((v) => [v.count, v.incrementCount]);
  return (
    <div>
      Home {count}
      <button onClick={incCount}>Increment</button>
    </div>
  );
};
