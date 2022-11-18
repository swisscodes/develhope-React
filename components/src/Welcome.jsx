import React from 'react';

class Welcome extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <p>Welcome {name}</p>
      </>
    );
  }
}
export default Welcome;
