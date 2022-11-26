import React, { Children } from 'react';

function Container({ children, title }) {
  return (
    <div className='container-div'>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Container;
