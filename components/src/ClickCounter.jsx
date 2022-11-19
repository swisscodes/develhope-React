import React from 'react';

class ClickCounter extends React.Component {
  state = {
    count: this.props.initValue,
    incrementBy: this.props.incrementBy,
  };

  render() {
    return (
      <>
        <p>Current Value: {this.state.count}</p>
        <button onClick={() => this.increaseCount()}>Increase +</button>
      </>
    );
  }

  //
  increaseCount() {
    this.setState((state) => (state.count += state.incrementBy));
  }
}

export default ClickCounter;
