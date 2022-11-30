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
import DisplayLanguage from './DisplayLanguage';
import Sum from './Sum';
import ClickCounterFunc from './ClickCounterFunc';
import CounterFunc from './CounterFunc';
import Github from './Github';
import GithubUsers from './GithubUsers';
import Githubuser1 from './Githubuser1';
import CardDetails from './CardDetails';
import FilteredList from './FilteredList';

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
        <DisplayLanguage />
        <Sum numbers={[1, 2, 3, 4, 5]} />
        <ClickCounterFunc initValue={1} incrementBy={1} />
        <CounterFunc />
        <Github />
        <GithubUsers />
        <Githubuser1 />
        <CardDetails />
        <FilteredList
          todosList={[
            { name: 'Obafemi', age: 35, id: 1 },
            { name: 'guy', age: 16, id: 2 },
            { name: 'babe', age: 25, id: 3 },
            { name: 'andy', age: 56, id: 4 },
          ]}
        />
      </div>
    );
  }
}

export default App;
