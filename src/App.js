import React, {Component} from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'
import './App.css';
import Animation from './Components/BackgroundAnimation/BackgroundAnimation'
import Homepage from './Pages/Homepage.jsx'
import NotFoundPage from './Pages/404.jsx'
import Services from './Pages/Services.js'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route className="ml-0 pl-0" exact path='/' component={Homepage} />
            <Route className="ml-0 pl-0" exact path='/404' component={NotFoundPage} />
            <Route className="ml-0 pl-0" exact path='/services' component={Services} />
            <Redirect to='/404'/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
