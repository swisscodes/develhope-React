import React, { useState } from 'react';
import CounterButton from './CounterButton';

function ClickCounterFunc({ initValue = 1, incrementBy }) {
  const [count, setCount] = useState(initValue);

  return (
    <>
      <p>Current Value: {count}</p>
      <CounterButton
        counterBtnClick={() => increaseCount(count)}
      ></CounterButton>
    </>
  );
  function increaseCount(prevCount) {
    setCount(() => (prevCount += incrementBy));
  }
}

export default ClickCounterFunc;
