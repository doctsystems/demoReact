import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Person from './components/Person';
import Counter from './components/Counter';
import Terminos from './components/Terminos';
import Politicas from './components/Politicas';

function Home(){
	return <div>
		<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Person nombre="Diego" apellido="Osvaldo" edad={36} />
				<Counter initialValue={1} step={2} />
				<Counter initialValue={2} step={3} />
		</header>
	</div>;
}

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<nav>
						<Link to="/terminos">Terminos y Condiciones</Link><br/>
						<Link to="/politicas">Politicas de Privacidad</Link>
					</nav>

					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/terminos" component={Terminos} />
						<Route exact path="/politicas" component={Politicas} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
