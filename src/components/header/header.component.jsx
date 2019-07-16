import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'

const Header = () => (
  <header class="header">
    <div className="container-logo">
      <Link to="/"><Logo /></Link>
    </div>
    <div className="container-links">
      <Link className="nav-link" to="/shop">Shop</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
    </div>
  </header>
)

export default Header
