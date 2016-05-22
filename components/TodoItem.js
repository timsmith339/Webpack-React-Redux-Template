import React, { Component } from 'react'

class TodoItem extends Component {

	constructor (props, context) {
		super(props, context)
	}

	handleComplete (todo) {
		this.props.completeTodo(todo.id)
	}

	handleDelete (todo) {
		this.props.deleteTodo(todo.id)
	}

	render () {
		return (
			<li>
				<div onClick={this.handleComplete.bind(this, this.props.todo)}>
					{this.props.todo.text}
				</div>
				<button onClick={this.handleDelete.bind(this, this.props.todo)}>Delete</button>
			</li>
		)
	}

}

export default TodoItem