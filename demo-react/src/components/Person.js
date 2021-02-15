import React from 'react';

// Componente de clase
// class Person extends React.Component{
// 	constructor(props){
// 		super(props);
// 	}

// 	render(){
// 		return(
// 			<div>
// 				<span>Nombre: {this.props.nombre}, </span>
// 				<span>Apellido: {this.props.apellido}, </span>
// 				<span>Edad: {this.props.edad},</span>
// 			</div>
// 		)
// 	}
// }

// Componente funcional
// const Person = props => {
// 	console.log(props)
// 	return (
// 		<div>
// 			<span>Nombre: {props.nombre}, </span>
// 			<span>Apellido: {props.apellido}, </span>
// 			<span>Edad: {props.edad},</span>
// 		</div>
// 	);
// }

// Componente funcional
function Person(props) {
	return (
		<div>
			<span>Nombre: {props.nombre}, </span>
			<span>Apellido: {props.apellido}, </span>
			<span>Edad: {props.edad},</span>
		</div>
	);
}

export default Person;
