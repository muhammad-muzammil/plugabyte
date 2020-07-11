import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'
import './App.css';
import Homepage from './Pages/Homepage.jsx'
import NotFoundPage from './Pages/404.jsx'
import Services from './Pages/Services.js'
class App extends Component {
  
  render() { 
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/404' component={NotFoundPage} />
          <Route exact path='/services' component={Services} />
          <Redirect to='/404'/>
        </Switch>
      </Router>
    );
  }
}

export default App;
