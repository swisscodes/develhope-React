import React from 'react';

function Sum({ numbers = [1, 2, 4, 5] }) {
  return (
    <div>
      <h1>{numbers.reduce((acc, val) => acc + val, 0)}</h1>
    </div>
  );
}

export default Sum;
