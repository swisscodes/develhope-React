import React, { useState } from 'react';

function TodoList() {
  const [items, setItem] = useState([]);
  const [typedValue, setTypeValue] = useState();
  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li key={item + i}>{item}</li>
        ))}
      </ul>
      <input type='text' onChange={(el) => onType(el)} />
      <button type='button' onClick={() => onAdd()}>
        Add
      </button>
    </div>
  );

  function onAdd(el) {
    setItem(() => [...items, typedValue]);
  }
  function onType(el) {
    setTypeValue(() => el.target.value);
  }
}

export default TodoList;
