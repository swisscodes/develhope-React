import React from 'react';
import Age from './Age';

class Welcome extends React.Component {
  render() {
    const { name = 'swiss bobo', age } = this.props;
    return (
      <>
        <p>Welcome {name}</p>
        {age && <Age age={age} />}
      </>
    );
  }
}
export default Welcome;

// exercises
/* 
Conditional Rendering - 01 {age > 18 && <Age age={age} />}
Conditional Rendering - 02 {age && <Age age={age} />}
*/
