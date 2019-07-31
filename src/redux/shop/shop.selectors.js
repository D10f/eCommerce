import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

const selectShop = state => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

// this one is needed after we updated the data set to an object. What we are doing here is:
// get an array with the keys, loop through them and return an array (map) with the value of that particlar key
// that we just obtained from Object.keys
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collection => Object.keys(collection).map(key => collection[key])
)

/* OLD WAY
  export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  )
*/

/*
  Data Normalization: store sets of data in an object instead of an array to optimize the speed of search.
  By using the .find() method we loop through every single item in the array until a match is found, not really optimal in
  larger data sets. So below and after adjusting the shop.data file to be an object, we simply look for the collection with
  the particular key passed as the url parameter.
*/
export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections[collectionUrlParam]
)
