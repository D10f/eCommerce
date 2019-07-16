import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component.jsx'
import HomePage from './pages/homepage/homepage.component.jsx'
import HatsPage from './pages/hats/hats.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App;
