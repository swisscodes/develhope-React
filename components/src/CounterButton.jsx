import React from 'react';

function CounterButton({ counterBtnClick = (f) => f }) {
  return <button onClick={(e) => counterBtnClick(e)}>Increase +</button>;
}

export default CounterButton;
