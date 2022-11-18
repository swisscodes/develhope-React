import React from 'react';

class Welcome extends React.Component {
  render() {
    const { name = 'swiss bobo', age } = this.props;
    return (
      <>
        <p>Welcome {name}</p>
        <p>Your age is {age}</p>
      </>
    );
  }
}
export default Welcome;
