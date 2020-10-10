import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import App from './App'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()
const defaultState = {}
const store = createStore(
                rootReducer,
                defaultState,
                applyMiddleware(
                  thunkMiddleware,
                  loggerMiddleware
                )
              )
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
export default store