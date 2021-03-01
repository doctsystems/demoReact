import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav/Navbar';
import './components/Sidebar.css'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App" id="outer-container">
      <Navbar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <h1>Click to show menu</h1>
      </div>
    </div>
  );
}

export default App;
