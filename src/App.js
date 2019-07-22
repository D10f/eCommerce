import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component.jsx'
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import UserAuthPage from './pages/userauth/userauth.component.jsx'
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }

  // At this point Google authentication is integrated via Firebase
  unsubscribeFromAuth = null

  componentDidMount(){
    /*
      Note the returned value from onAuthStateChanged is a function we use to unsubscribe from listening to changes in firebase, but there's more code executing.
      For instance we also receive an user object (named below as 'userAuth') we pass in as an argument, which will then be used by the createUserProfileDocument()
      to determine if we already have that user in our databse or a new one has to be created
    */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        /*
          Another option using userRef.get() here is possible, but the below also works. Just two ways of doing the same thing.
          Also note that at this point we already checked if the user exists,and created a profile if it doesnt
        */

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })
      } else {
        // this will set currentUser to null
        this.setState({ currentUser: userAuth })
      }

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={UserAuthPage} />
      </Switch>
    </div>
  )
}
}

export default App;
