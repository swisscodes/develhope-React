import React from 'react';

function Todos({ onRemove = (f) => f, item, index }) {
  return (
    <li key={item + index}>
      {item}
      <button key={'btn' + index} type='button' onClick={() => onRemove(index)}>
        Remove
      </button>
    </li>
  );
}

export default Todos;
