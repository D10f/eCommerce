import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

// Publishable key obtained from stripe API

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_1jYQIuHL8APkxZYdCnBRhx9e00qQC8QanD'

  // As this is a demo, we won't be actually using this, but this is the after payment processed
  const onToken = token => {
    console.log(token)
    alert('Test payment confirmed!')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
