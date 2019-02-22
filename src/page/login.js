
import React from 'react'
import { connect } from 'react-redux';

import { userActions } from '../_action/user.actions';

class Login extends React.Component {

    constructor(props) {
        super(props);

        // reset login status
        // this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const username = "asd";
        const password = "asd";
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render(){

        // const { loggingIn } = this.props;
        // const { username, password, submitted } = this.state;

        return(
            <div>
                <button onClick={this.handleSubmit}>Login</button>
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
  }
  
  const app = connect(mapStateToProps)(Login);
  export { app as Login};