import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
	applyMiddleware(logger(), thunk)
)(createStore)

export default function configureStore (initialState = { todos: [], user: {} }) {
	return finalCreateStore(rootReducer, initialState);
}