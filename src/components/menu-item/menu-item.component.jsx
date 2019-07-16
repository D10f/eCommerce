import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`menu-item ${size}`}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className="background-image"></div>
    <div className="content">
      <p className="title">{title.toUpperCase()}</p>
      <p className="subtitle">Shop Now</p>
    </div>
  </div>
)

export default MenuItem
