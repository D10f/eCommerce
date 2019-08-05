import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../../pages/collection-page/collection-page.component'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'

/*
  Created CollectionOverview component that holds the logic of displaying the collection categories, so far nothing changes.
  This was done to implement nested routing which will route to the individual category pages that we'll create next.

  Converting to class component since we have to load the shop data from firestore server.
  This is the nearest ancestor 'node' of the components that actually need the data (CollectionOverview and CollectionPage)
*/

class ShopPage extends React.Component {

  state = {
    isLoading: true
  }

  unsubscribeFromSnapshot = null

  // So we reach to firestore for the 'collections' collection, but we want to add routeName and id.
  // We do this client-side to make our DB queries more efficient.
  componentDidMount(){
    const { updateCollections } = this.props

    const collectionRef = firestore.collection('collections')
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = await convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({ isLoading: false })
    })
  }

  render(){
    const { match } = this.props
    const { isLoading } = this.state
    return (
      <div>
        <Route exact path={`${match.path}`} render={(props) => isLoading ? <h1>Loading...</h1> : <CollectionOverview {...props} /> }
        />
        <Route path={`${match.path}/:collectionId`} render={(props) => isLoading ? <h1>Loading...</h1> : <CollectionPage {...props} /> }
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
