import { useState } from 'react';

function useCounter(initValue = 1, incrementBy = 1) {
  const [counterState, setCounterState] = useState(initValue);

  function increment() {
    setCounterState((prevState) => (prevState += incrementBy));
  }

  function decrement() {
    setCounterState((prevState) => (prevState -= incrementBy));
  }

  function reset() {
    setCounterState((prevState) => (prevState = initValue));
  }

  return {
    increment: increment,
    decrement: decrement,
    reset: reset,
    counterState: counterState,
  };
}

export default useCounter;
