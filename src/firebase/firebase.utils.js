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

  // Firebase specific methods to query DB and retrieve (get) specific data from a document
  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  // Always receive an object but user may not exists, indicating is a new user, so we create it.
  // Again following the specific methods for Firebase (.set)
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

firebase.initializeApp(config)

export const auth = firebase.auth() // thanks to that import above
export const firestore = firebase.firestore() // thanks to that import above

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

// this is just in case we later need the entire firebase functionality elsewhere
export default firebase
