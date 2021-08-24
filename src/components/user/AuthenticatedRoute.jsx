import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from 'src/service/AuthenticationService.js'
// import TestService from 'src/service/TestService.js'

class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn() === true) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/home" />
        }

    }
}

export default AuthenticatedRoute