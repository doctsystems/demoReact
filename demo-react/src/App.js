import logo from './logo.svg';
import './App.css';

const Person = props => {
  return (
    <div>
      <span>Nombre: {props.nombre}, </span>
      <span>Apellido: {props.apellido}, </span>
      <span>Edad: {props.edad},</span>
    </div>
  )
}

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
