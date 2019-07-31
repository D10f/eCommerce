import React from 'react'
import { Route } from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../../pages/collection-page/collection-page.component'

/*
  Created CollectionOverview component that holds the logic of displaying the collection categories, so far nothing changes.
  This was done to implement nested routing which will route to the individual category pages that we'll create next.
*/
const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
)

export default ShopPage
