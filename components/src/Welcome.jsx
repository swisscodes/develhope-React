import React from 'react';
import { Link } from 'react-router-dom';
import Age from './Age';

class Welcome extends React.Component {
  render() {
    const { name = 'swiss bobo', age } = this.props;
    return (
      <>
        <Link to='/counter'>Counter</Link>
        <Link to='/user/swissbobo'>github user</Link>
        <Link to='/lang'>Language selected</Link>
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
      </>
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
