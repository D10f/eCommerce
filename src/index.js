import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// NEW!
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'
import App from './App'

// UPDATED! To bring in persistor as well as store
import {store, persistor} from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor} >
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'))
