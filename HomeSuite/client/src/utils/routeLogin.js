import React, { Component } from "react";
import { All } from "../pages"
import { Login } from "../component/Login"
import axios from "axios"

export class RouteLogin extends Component {
    state = {}
    /** Takes in existing user info */
    /** This function is called by the Login Component */
    checkAuth (event, email, password, toRemember) {
        event.preventDefault()
        console.log(email)
        /** Send post request along with user info */
        axios.post('/api/auth', {email: email, password: password})
        .then((res) => {
            /** Set user state to data returned by res */
            /** In this case, res returns true only if the password is in the database already */
        	this.setState({loggedIn: res.data})
        })
    };
    /** Takes in new user info */
    newUser (event, email, username, password) {
        event.preventDefault()
        /** Send post request along with new user info */
        axios.post('/api/create', {email: email, username: username, password: password})
        .then((res) => {
            /** Change state accordingly */
            this.setState({loggedIn: res.data})
        })
    };

    routeApp(bool) {
        /** If localStorage has persist key */
        /** And User is not signed In, as stated by !bool */
    	if (localStorage.getItem('persist') === "true" && !bool) {
            /** Send post request along with a persistentToken from localStorage */
            axios.post('/api/auth/persist', {persistToken: localStorage.getItem('token')})
            /** Upon promise */
            .then((res) => {
                console.log(res.data)
                /** If there is data in the response sent by the routes */
                /** That means there's an existing user with this persistToken */
                if (res.data) {
                    /** Log the user in */
                    this.setState({loggedIn: true})
                }
            })
            /** For all else return nothing */
            return null
        /** If already logged in, as stated by the state variable bool */
    	} else if (bool) {
            /** Return the main application */
            return (<All />)
        }
        /** If not logged in, and localStorage doesn't have a slot for this user */
        else {
            /** Send the login component */
    		return (
                <Login 
                    /** Define props in Login */
                    checkAuth={this.checkAuth.bind(this)}
                    newUser={this.newUser.bind(this)}
                />
            )
    	}
    };
	render() {
        /** Call routeApp function with the loggedIn state */
        /** This call either returns main app, or the login page based on state loggedIn */
		return this.routeApp(this.state.loggedIn)
	}

}