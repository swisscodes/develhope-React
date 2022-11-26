import React, { useState } from 'react';
import Todos from './Todos';

function TodoList() {
  const [items, setItem] = useState([]);
  const [typedValue, setTypeValue] = useState('');
  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <Todos onRemove={onRemove} item={item} index={i} />
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
