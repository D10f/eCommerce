import firebase from 'firebase/app' // the bulk of the firebase application installed through npm
import 'firebase/firestore' // the database functionality from the first import
import 'firebase/auth' // the authentication functionality from the first import

const config = {
  apiKey: "AIzaSyAkr6meYBFMc9dgg_7Y3lbq5JtGGpF5mxY",
  authDomain: "react-ecommerce-db29c.firebaseapp.com",
  databaseURL: "https://react-ecommerce-db29c.firebaseio.com",
  projectId: "react-ecommerce-db29c",
  storageBucket: "",
  messagingSenderId: "944358439049",
  appId: "1:944358439049:web:6e4926bde8012795"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // we get null when user logs out, so first check if not null to make sure is a login action
  if (!userAuth) return

  // Firestore methods to query DB and retrieve (get) data about a document
  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  // Same thing but with collections
  const collectionRef = firestore.collection('users')
  const collectionSnapshot = await collectionRef.get()

  /*
    firestore.doc() returns an object with information about the document we are querying, with properties such as:
      .exists a boolean, self-explanatory
      .data() a method that returns a JSON object with the actual data of the document.

    firestore.collection() returns also an object about the collection. Useful properties are:
      .docs() an array of all the items within the collection.
      .empty() a boolean, self-explanatory
      .size() number of documents.
  */

  if(!snapShot.exists){
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (e) {
      console.log('error creating user', e.message)
    }
  }

  // We return the userRef which is the data for that user, just in case we need it later on
  return userRef
}

// Writing code to automate writing data to firestore. We pass in the name of the collection (users, items, etc) and an array of the data to pass
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  // First get a reference to the collection, which if it does not exists will still return an object (but it wont actually create it in the DB)
  const collectionRef = firestore.collection(collectionKey)

  /* Then we write the data, but we do this one file at the time which due to potential internet connection issues can become unpredictible.
  We then use the batch() method provided by firestore to group all the data we intend to write into one single call. This way it will either succeed completely,
  or fail completely, making our code more manageable (we don't want only half our data saved) */
  const batch = firestore.batch()

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc() // .doc() if empty creates a new unique key
    // newDocRef.set(obj) >> this would be normal to set one single object, but as mentioned above we want many so:
    batch.set(newDocRef, obj)
  })

  // dispatch the batch, which will return a promise for us to handle it in our code.
  return await batch.commit()
}

// When data is loaded from Shop Page, we take a snapshot and add to each document the routeName and id, which are not stored in the DB.
export const convertCollectionsSnapshotToMap = (snapshot) => {
  const transformedCollection = snapshot.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator, currentCollection) => {
    accumulator[currentCollection.title.toLowerCase()] = currentCollection
    return accumulator
  }, {})
}

firebase.initializeApp(config)

export const auth = firebase.auth() // thanks to that import above
export const firestore = firebase.firestore() // thanks to that import above

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

// this is just in case we later need the entire firebase functionality elsewhere
export default firebase
