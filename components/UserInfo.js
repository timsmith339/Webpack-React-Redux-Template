import React, { Component } from 'react'

class UserInfo extends Component {
	handleNewId () {
		this.props.actions.createNewUserId();
	}

	handleNewIdIfOdd () {
		this.props.actions.createNewUseridIfOdd();
	}

	handleNewIdAsync () {
		this.props.actions.createNewUserAsync();
	}

	render () {
		return (
			<li>
				<div>username: {this.props.user.username}</div>
				<div>id: {this.props.user.id}</div>
				<button onClick={this.handleNewId.bind(this)}>Update with random id</button>
				<button onClick={this.handleNewIdIfOdd.bind(this)}>Update only if odd</button>
				<button onClick={this.handleNewIdAsync.bind(this)}>Update async</button>
			</li>
		)
	}
}

export default UserInfo