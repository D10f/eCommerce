import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h3 className="title">{title.toUpperCase()}</h3>
    <div className="preview">
      {items.filter((item, index) => index < 4).map((item) => (
        <CollectionItem key={item.id} item={item}/>
        ))}
    </div>
  </div>
)

export default CollectionPreview
