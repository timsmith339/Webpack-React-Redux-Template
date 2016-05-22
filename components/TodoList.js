import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
	constructor (props, context) {
		super(props, context)
	}

	render () {
		return (
			<ul>
				{
					this.props.todos.map((todo) => {
						return <TodoItem
							completeTodo={this.props.completeTodo}
						 	deleteTodo={this.props.deleteTodo}
							key={todo.id} todo={todo} />
					})
				}
			</ul>
		)
	}
}

export default TodoList