import React, { Component } from 'react';

class Counter extends Component {
	constructor(props){
		super(props);
		this.state={
			counter:this.props.initialValue
		}
	}

	increment = () => {
		this.setState({counter:this.state.counter + this.props.step})
	}
	decrement = () => {
		if(this.state.counter>0)
			this.setState({counter:this.state.counter - this.props.step})
	}

	render(){
		return(
			<div>
				<button onClick={this.decrement}>-</button>
				<span>{this.state.counter}</span>
				<button onClick={this.increment}>+</button>
			</div>
		);
	}
}

export default Counter;
