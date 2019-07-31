import { combineReducers } from 'redux'

// NEW! Importing these 2 files to store in localStorage
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

/* NEW!
  This object defines the rules for the persistor, in this case we want localStorage, and only our cart reducer.
*/
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart']
}

// UPDATED! We used to export defaul this directly, now we have it in separate variable that we include in
// the persistReducer function below
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)
