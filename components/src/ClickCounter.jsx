import React from 'react';
import CounterButton from './CounterButton';

class ClickCounter extends React.Component {
  state = {
    count: this.props.initValue,
    incrementBy: this.props.incrementBy,
  };

  render() {
    return (
      <>
        <p>Current Value: {this.state.count}</p>
        <CounterButton
          counterBtnClick={() => this.increaseCount()}
        ></CounterButton>
      </>
    );
  }

  //
  increaseCount() {
    this.setState((state) => (state.count += state.incrementBy));
  }
}

export default ClickCounter;
