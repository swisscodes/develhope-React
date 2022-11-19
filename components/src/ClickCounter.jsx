import React from 'react';

class ClickCounter extends React.Component {
  state = {
    count: 0,
    incrementBy: 1,
  };

  initValue = this.props.initValue;
  incrementBy = this.props.incrementBy;

  componentDidMount() {
    this.setState((state) => (state.count = this.initValue));
  }

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
    this.setState((state) => (state.count += this.incrementBy));
  }
}

export default ClickCounter;
