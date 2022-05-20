import logo from './logo.svg';
import './App.css';

function App() {
  let name = 'Vaibhav';
  return (
    <div className="App">
      <h3>hello {name}</h3>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React practice1.1
        </a>
      </header>
    </div>
  );
}

export default App;
