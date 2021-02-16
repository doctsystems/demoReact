import logo from './logo.svg';
import './App.css';

import Person from './components/Person';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person nombre="Diego" apellido="Osvaldo" edad={36} />
        <Counter initialValue={1} step={2} />
        <Counter initialValue={2} step={3} />
      </header>
    </div>
  );
}

export default App;

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }