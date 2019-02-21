import React, { Component } from 'react';
import NavBar from './NavBar'
import Home from './Home'
import { Route, Redirect, Switch } from 'react-router-dom'
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
<React.Fragment>
        <NavBar />
          <Switch>
            <Route path='/home' component={Home} />
            <Redirect from='/' exact to='/home' />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
