import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './style_sheets/App.css'
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          
        </Switch>
      </div>
    </Router>
  )
}

export default App;
