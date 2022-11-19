import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    const { initValue, incrementBy } = this.props;
    this.setState((state) => (state.count = initValue));
    setInterval(() => {
      this.setState((state) => (state.count += incrementBy));
    }, 1000);
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
      </>
    );
  }
}

export default Counter;
