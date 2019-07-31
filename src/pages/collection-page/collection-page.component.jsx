import React from 'react'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selectors'

import CollectionItem from '../../components/collection-item/collection-item.component'
import './collection-page.styles.scss'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection

  return (
    <div className="collection-page">
      <h2 className="title">Collection Page</h2>
      <div className="items">
      {
        items.map(item => (<CollectionItem key={item.id} item={item} />))
      }
      </div>
    </div>
  )
}


const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)


/*
  The second parameter of mapStateToProps is the current props that the component already has, before
  going through the connect HOC. In this case is the match object from Route.
  Also since we are not using createStructuredSelector, we need to pass the state manually. In this case we're doing something more complex (currying),
  so we pass that at the end becase selectCollection returns a function, that we execute using the value of state.
  Basically, with all this we ensure that we return the component with the correct category as per the URL "/shop/somecategory"
*/
