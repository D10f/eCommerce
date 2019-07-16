import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, match }) => (
  <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${title}`)}>
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

export default withRouter(MenuItem)
