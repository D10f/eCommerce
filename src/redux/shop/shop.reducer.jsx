import SHOP_DATA from './shop.data'

// Important state, we need to handle objects and SHOP_DATA is already an array.
// Otherwise while creating the selector file we wont be able to select this properly.
const INITIAL_STATE = {
  collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default shopReducer
