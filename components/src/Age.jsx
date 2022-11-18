import React from 'react';

class Age extends React.Component {
  render() {
    const { age } = this.props;
    return (
      <>
        <p>Your age is {age}</p>
      </>
    );
  }
}
export default Age;
