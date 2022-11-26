import React from 'react';
import Hello from './Hello';
import Welcome from './Welcome';
import Counter from './Counter';
import ClickCounter from './ClickCounter';
import ClickTracker from './ClickTracker';
import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';
import UncontrolledLogin from './UncontrolledLogin';
import TodoList from './TodoList';
import Wrapped1 from './Wrapped1';

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name=<strong>{'Obafemi'}</strong> age={35} />
        <Counter initValue={1} incrementBy={1} />
        <ClickCounter initValue={1} incrementBy={1} />
        <ClickTracker />
        <InteractiveWelcome />
        <Login />
        <UncontrolledLogin />
        <TodoList />
        <Wrapped1 />
      </div>
    );
  }
}

export default App;
