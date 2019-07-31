/*
  Middleware is code that sits in between the actions and the reducers, and there are many use cases.
  Logger allows to log the state before and after it goes through the reducer, and is useful for debugging.
*/

import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

// redux expects an array for each middleware, see docs.
const middlewares = [logger]

// now there's only one middleware but we could add more in the future, which is why we use the spread operator
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

/*
  We are now adding this to store locally in the browser the cartItems. Previously we had to wrap our components
  with the store, now we'll do this again with our 'improved' or persistant version of the store
*/
export const persistor = persistStore(store)
