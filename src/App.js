import React, {Component} from 'react';
import Animation from './Components/BackgroundAnimation/BackgroundAnimation.js'
import Navigation from './Components/Navigation/Navigation'
import './App.css';
class App extends Component {
  render() {
    return (
      <div>
      {
        // <Navigation />
      }
      	<Animation className='dt vh-100 w-100'/>
      </div>
    );
  }
}

export default App;
