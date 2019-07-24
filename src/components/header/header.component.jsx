import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils.js'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'

const Header = ({ currentUser, hidden }) => (
  <header className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="container-links">
      <Link className="nav-link" to="/shop">Shop</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
      {currentUser ?
        <div className="nav-link" onClick={() => auth.signOut()}>Sign Out</div>
        :
        <Link className="nav-link" to="/signin">Sign In</Link>
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </header>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
})

export default connect(mapStateToProps)(Header)
