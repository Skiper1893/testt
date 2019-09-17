import { createBrowserHistory } from 'history'
import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from './configureReducers'

export const history = createBrowserHistory()



export const store = createStore(rootReducer)
