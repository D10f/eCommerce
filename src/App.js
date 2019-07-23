import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component.jsx'
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import UserAuthPage from './pages/userauth/userauth.component.jsx'
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount(){

    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={UserAuthPage} />
        </Switch>
      </div>
    )
  }
}

/*
  connect takes two arguments, both functions: mapStateToProps and mapDispatchToProps
  First one used to extract the state from the Redux "store", but in this case App.js does not need it so we set it to null.
  We do need to update the state however, which means dispatching actions to their respective reducers, so we use the second argument.
*/

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
