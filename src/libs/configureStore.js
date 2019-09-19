import { createBrowserHistory } from 'history'
import { createStore } from 'redux'
import rootReducer from './configureReducers'

export const history = createBrowserHistory()

export const store = createStore(rootReducer)
