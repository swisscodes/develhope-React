import logo from './logo.svg';
import './App.css';

function App() {
  var hello = <h1>Hello</h1>;
  return (
    <div className='App'>
      <div>{hello}</div>
      {returnsH1('Obafemi')}
      {aAndB(5, 10)}
    </div>
  );
}

//functions

/* JSX - 02 */
function returnsH1(name) {
  return <h1>Hello {name}</h1>;
}

function aAndB(a, b) {
  return <h2>{a + b}</h2>;
}

export default App;
