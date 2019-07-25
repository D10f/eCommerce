import { createSelector } from 'reselect'

// This is the 'input' selector. Notice we pass in 'state', that is because we call this function within the component
const selectCart = state => state.cart

// Using the input, call createSelector() to return an 'output' selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems || []
)

// We can add more createSelector() calls as required. Is good to memoize small pieces of state, so that it is reusable
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.quantity * currentItem.price, 0)
)

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden)
