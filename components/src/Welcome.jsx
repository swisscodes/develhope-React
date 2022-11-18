import React from 'react';

class Welcome extends React.Component {
  render() {
    const { name = 'swiss bobo' } = this.props;
    return (
      <>
        <p>Welcome {name}</p>
      </>
    );
  }
}
export default Welcome;
