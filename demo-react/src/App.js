import logo from './logo.svg';
import './App.css';

import Person from './components/Person'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person nombre="Diego" apellido="Osvaldo" edad={36} />
      </header>
    </div>
  );
}

export default App;
