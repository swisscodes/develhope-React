import React from 'react';

class Age extends React.Component {
  render() {
    const { age } = this.props;
    return (
      <>{age > 18 ? <p>Your age is {age}</p> : <p>You are very young!</p>}</>
    );
  }
}
export default Age;

// asignment edits
/* 

    <>
        <p>Your age is {age}</p>
    </>


    Conditional Rendering - 05
    <>
        {age > 18 ? <p>Your age is {age}</p> : <p>You are very young!</p>}
    </>
*/
