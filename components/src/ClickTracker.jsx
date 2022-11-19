import React, { useState } from 'react';

function ClickTracker() {
  const [pressedBtn, setPressedBtn] = useState();
  return (
    <div>
      {pressedBtn && <h1>{pressedBtn}</h1>}
      <button onClick={(e) => clickHandler(e)}>Button 1</button>
      <button onClick={(e) => clickHandler(e)}>Button 2</button>
      <button onClick={(e) => clickHandler(e)}>Button 3</button>
    </div>
  );

  //
  function clickHandler(e) {
    setPressedBtn(() => e.target.innerText);
  }
}

export default ClickTracker;
