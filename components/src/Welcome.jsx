import React from 'react';
import Age from './Age';

class Welcome extends React.Component {
  render() {
    const { name = 'swiss bobo', age } = this.props;
    return (
      <div className='welcome'>
        <p>Welcome {name}</p>

        {/*Conditional Rendering - 01 */}
        {age > 18 && <Age age={age} />}

        {/*Conditional Rendering - 02 */}
        {age && <Age age={age} />}

        {/*Conditional Rendering - 03 */}
        {age > 18 && age < 65 && <Age age={age} />}

        {/*Conditional Rendering - 03 */}
        {age > 18 && age < 65 && name === 'john' && <Age age={age} />}
      </div>
    );
  }
}
export default Welcome;

// exercises
/* 
Conditional Rendering - 01 {age > 18 && <Age age={age} />}
Conditional Rendering - 02 {age && <Age age={age} />}
Conditional Rendering - 03 {age > 18 && age < 65 && <Age age={age} />}
Conditional Rendering - 04 {age > 18 && age < 65 && name === 'john' && <Age age={age} />}
*/
