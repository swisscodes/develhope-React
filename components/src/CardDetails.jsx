import React, { useRef, useEffect } from 'react';

function CardDetails() {
  const formRef = useRef();

  useEffect(() => {
    const { model, year, color } = formRef.current.elements;
    model.value = 'Accord';
    year.value = 2022;
    color.value = 'black';
    return () => {};
  });

  return (
    <div>
      <form action='' ref={formRef}>
        <label htmlFor='model'>Model: </label>
        <input
          type='text'
          name='model'
          id='model'
          onChange={(e) => changeFormVal(e)}
        />
        <label htmlFor='year'>Year: </label>
        <input
          type='text'
          name='year'
          id='year'
          onChange={(e) => changeFormVal(e)}
        />
        <label htmlFor='color'>Color: </label>
        <input
          type='text'
          name='color'
          id='color'
          onChange={(e) => changeFormVal(e)}
        />
      </form>
    </div>
  );

  function changeFormVal(e) {}
}

export default CardDetails;
