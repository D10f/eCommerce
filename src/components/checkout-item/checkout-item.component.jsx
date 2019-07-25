import React from 'react'
import { connect } from 'react-redux'

import { addCartItem, removeOneCartItem, removeCartItem } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, addCartItem, removeOneCartItem, removeCartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className={quantity === 1 ? 'grayed arrow' : 'arrow'} onClick={() => {
          if(quantity === 1)return
          removeOneCartItem(cartItem)
          }}>
          &#10092;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(cartItem)}>&#10093;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeCartItem(cartItem)}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addCartItem: cartItem => dispatch(addCartItem(cartItem)),
  removeOneCartItem: cartItem => dispatch(removeOneCartItem(cartItem)),
  removeCartItem: cartItem => dispatch(removeCartItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
