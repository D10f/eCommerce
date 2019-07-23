/*
  Middleware is code that sits in between the actions and the reducers, and there are many use cases.
  Logger allows to log the state before and after it goes through the reducer, and is useful for debugging.
*/

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

// redux expects an array for each middleware, see docs.
const middlewares = [logger]

// now there's only one middleware but we could add more in the future, which is why we use the spread operator
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
