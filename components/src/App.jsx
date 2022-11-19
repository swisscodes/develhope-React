import React from 'react';
import Hello from './Hello';
import Welcome from './Welcome';
import Counter from './Counter';

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name=<strong>{'Obafemi'}</strong> age={12} />
        <Counter initValue={1} incrementBy={1} />
      </div>
    );
  }
}

export default App;
