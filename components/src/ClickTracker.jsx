import './style.scss';
import React, { useState, useRef } from 'react';
import image1 from './assets/images/1.jpg';
import image2 from './assets/images/2.jpg';
import image3 from './assets/images/3.png';

function ClickTracker() {
  const [pressedBtn, setPressedBtn] = useState();
  const btnImgRef = useRef({});
  return (
    <div>
      {pressedBtn && <h1>{pressedBtn}</h1>}
      <button name='Button 1' onClick={(el) => clickHandler(el)}>
        <img
          src={image1}
          alt='sunset item 1 clicked'
          ref={(el) => giveRef(el, 'Button 1')}
        />
      </button>
      <button name='Button 2' onClick={(el) => clickHandler(el)}>
        <img
          src={image2}
          alt='panda item 3 clicked'
          ref={(el) => giveRef(el, 'Button 2')}
        />
      </button>
      <button name='Button 3' onClick={(el) => clickHandler(el)}>
        <img
          src={image3}
          alt='child item 3 clicked'
          ref={(el) => giveRef(el, 'Button 3')}
        />
      </button>
    </div>
  );

  //
  function clickHandler(el) {
    setPressedBtn(() => btnImgRef.current[el.target.name].alt);
  }

  function giveRef(el, name) {
    btnImgRef.current = { ...btnImgRef.current, [name]: el };
  }
}

export default ClickTracker;

// exercises clicktracker before editing
/*
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
*/
