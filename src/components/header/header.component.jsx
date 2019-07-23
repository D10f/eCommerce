import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils.js'
import { connect } from 'react-redux'
import './header.styles.scss'

const Header = ({ currentUser }) => (
  <header className="header">
    <div className="container-logo">
      <Link to="/"><Logo /></Link>
    </div>
    <div className="container-links">
      <Link className="nav-link" to="/shop">Shop</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
      {currentUser ?
        <div className="nav-link" onClick={() => auth.signOut()}>Sign Out</div>
        :
        <Link className="nav-link" to="/signin">Sign In</Link>
      }

    </div>
  </header>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
