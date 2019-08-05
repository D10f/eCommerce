// import SHOP_DATA from './shop.data'
import ShopActionTypes from './shop.types'

// Important state, we need to handle objects and SHOP_DATA is already an array.
// Otherwise while creating the selector file we wont be able to select this properly.
const INITIAL_STATE = {
  collections: {}
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state
  }
}

export default shopReducer
