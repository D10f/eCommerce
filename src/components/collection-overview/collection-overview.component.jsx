import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import CollectionPreview from '../collection-preview/collection-preview.component'

import './collection-overview.styles.scss'

const CollectionOverview = ({ collections, match }) => (
  <div className="collections-overview">
    {collections.map(({ id, title, items }) => (
      <CollectionPreview key={id} title={title} items={items}/>
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)
