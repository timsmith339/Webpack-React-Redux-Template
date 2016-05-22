import React, { Component } from 'react'

class TodoInput extends Component {

	constructor (props, context) {
		super(props, context)
		this.state = {
			inputText: ''
		}
	}
	
	deleteLetter () {
		this.setState({
			inputText: this.state.inputText.substring(0, this.state.inputText.length-1)
		})
	}
	
	handleChange (event ) {
		this.setState({
			inputText: event.target.value
		})
	}

	handleSubmit (event) {
		event.preventDefault();
		if (!this.state.inputText)
			return;

		this.props.addTodo(this.state.inputText)
		this.setState({
			inputText: ''
		})
	}
	
	render () {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)} >
					<input
						type="text"
						placeholder="Next Todo...."
						onChange={this.handleChange.bind(this)}
						value={this.state.inputText}
					/>
					<input type="submit" text="Submit" />
				</form>
			</div>
		)	
	}
	
}

export default TodoInput