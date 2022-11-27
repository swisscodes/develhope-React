import React, { useEffect, useState } from 'react';

function CounterFunc({ countVal = 0, incrementBy = 1 }) {
  const [count, setCount] = useState(countVal);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((prevCount) => (prevCount += incrementBy));
    }, 1000);
    return () => {
      clearInterval(countInterval);
    };
  });
  return <h1>{count}</h1>;
}

export default CounterFunc;
