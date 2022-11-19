import React from 'react';
import Hello from './Hello';
import Welcome from './Welcome';
import Counter from './Counter';
import ClickCounter from './ClickCounter';

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name=<strong>{'Obafemi'}</strong> age={35} />
        <Counter initValue={1} incrementBy={1} />
        <ClickCounter initValue={1} incrementBy={1} />
      </div>
    );
  }
}

export default App;
