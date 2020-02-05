import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './style_sheets/App.css'
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
import Profile from './components/Profile'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
