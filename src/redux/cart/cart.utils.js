export const addCartToItem = (cartItems, newItem) => {
  const existingItem = cartItems.find(item => item.id === newItem.id)

  if(existingItem){
    return cartItems.map(item => {
      return item.id === newItem.id ? {...item, quantity: item.quantity + 1} : item
    })
  }

  return [...cartItems, {...newItem, quantity: 1}]
}
