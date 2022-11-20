import React, { useState } from 'react';
import Welcome from './Welcome';

function InteractiveWelcome() {
  const [inputValue, setInputValue] = useState();

  return (
    <div>
      <input type='text' onChange={getInputValue} />
      <Welcome name={inputValue} />
    </div>
  );

  //
  function getInputValue(e) {
    setInputValue(() => e.target.value);
  }
}

export default InteractiveWelcome;
