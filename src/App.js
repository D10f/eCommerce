import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component.jsx'
import HatsPage from './pages/hats/hats.component.jsx'

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
    </div>
  )
}

export default App;
