import React from 'react';
import CounterDisplay from './CounterDisplay';

class Counter extends React.Component {
  state = {
    count: this.props.initValue,
    incrementBy: this.props.incrementBy,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => (state.count += state.incrementBy));
    }, 1000);
  }

  render() {
    return (
      <>
        <CounterDisplay count={this.state.count} />
      </>
    );
  }
}

export default Counter;

/* 
STATE 01
    componentDidMount() {
    setInterval(() => {
      this.setState((state) => (state.count += 1));
    }, 1000);
  }
    return (
        <>
            <h1>{this.state.count} </h1>
        </>
        );


  STATE 03
    componentDidMount() {
        const { initValue, incrementBy } = this.props;
        this.setState((state) => (state.count = initValue));
        setInterval(() => {
        this.setState((state) => (state.count += incrementBy));
        }, 1000);
    }

    return (
      <>
        <h1>{this.state.count} </h1>
      </>
    );
*/
