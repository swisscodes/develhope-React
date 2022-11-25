import React, { useState } from 'react';

function TodoList() {
  const [items, setItem] = useState([]);
  const [typedValue, setTypeValue] = useState('');
  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li key={item + i}>
            {item}
            <button key={'btn' + i} type='button' onClick={() => onRemove(i)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <input type='text' value={typedValue} onChange={(el) => onType(el)} />
      <button type='button' onClick={(el) => onAddOrReset(el)}>
        Add
      </button>
      <button type='reset' onClick={(el) => onAddOrReset(el)}>
        Reset
      </button>
    </div>
  );

  function onAddOrReset(el) {
    if (el.target.type === 'reset') {
      setItem(() => []);
      return;
    }
    if (typedValue) {
      setItem(() => [...items, typedValue]);
      setTypeValue(() => '');
    }
  }

  function onRemove(index) {
    items.splice(index, 1);
    setItem(() => [...items]);
  }

  function onType(el) {
    setTypeValue(() => el.target.value);
  }
}

export default TodoList;
