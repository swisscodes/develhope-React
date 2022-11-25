import React, { useState } from 'react';

function TodoList() {
  const [items, setItem] = useState([]);
  const [typedValue, setTypeValue] = useState('');
  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li key={item + i}>{item}</li>
        ))}
      </ul>
      <input type='text' value={typedValue} onChange={(el) => onType(el)} />
      <button type='button' onClick={(el) => onAddOrReset(el)}>
        Add
      </button>
      <button type='reset' onClick={(el) => onAddOrReset(el)}>
        Rest
      </button>
    </div>
  );

  function onAddOrReset(el) {
    if (el.target.type === 'reset') {
      setItem(() => []);
      return;
    }
    setItem(() => [...items, typedValue]);
    setTypeValue(() => '');
  }
  function onType(el) {
    setTypeValue(() => el.target.value);
  }
}

export default TodoList;
