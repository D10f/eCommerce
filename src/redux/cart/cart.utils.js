export const addCartToItem = (cartItems, newItem) => {
  const existingItem = cartItems.find(item => item.id === newItem.id)

  if(existingItem){
    return cartItems.map(item => {
      return item.id === newItem.id ? {...item, quantity: item.quantity + 1} : item
    })
  }

  return [...cartItems, {...newItem, quantity: 1}]
}

export const removeCartItem = (cartItems, itemToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
}

export const removeOneCartItem = (cartItems, itemToRemove) => {

  return cartItems.map(cartItem => {
    return cartItem.id === itemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
  })
}
