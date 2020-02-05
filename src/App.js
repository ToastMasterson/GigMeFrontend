import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './style_sheets/App.css'
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/" component={Landing}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
