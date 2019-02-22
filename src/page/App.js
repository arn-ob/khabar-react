import React, { Component } from 'react';
import NavBar from './NavBar'
import Home from './Home'
import { Login } from './login'
import Admin from './admin'
import PrivateRoute from './../Components/privateRoute'
import history from './../_helper/history';
import { Router, Route } from 'react-router-dom';

export default class App extends Component {

  constructor(props) {
    super(props);

    // const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
    });
  }

  render() {

    return (
      <React.Fragment>
        <NavBar/>
        <Router history={history}>
            <div>
              <Route path='/home' component={Home} />
              <Route path="/login"  component={Login}/>
              <PrivateRoute exact path='/admin' component={Admin} />
            </div>
          </Router>
      </React.Fragment>
    );
  }
}
