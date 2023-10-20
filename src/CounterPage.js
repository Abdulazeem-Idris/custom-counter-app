import React from 'react';
import useCounter from './useCounter';

function CounterPage() {
  const { count, increment, decrement, reset, setValue } = useCounter();

  return (
    <div className='container'>
      <h1>Custom Counter</h1>
      <p className='counter'>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button className='reset' onClick={reset}>Reset</button>
      <button className='setset' onClick={() => setValue(10)}>Set to 10</button>
    </div>
  );
}

export default CounterPage;
