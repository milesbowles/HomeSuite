import React, { Component } from "react";
import { All } from "../pages"
import { Login } from "../component/Login"
import axios from "axios"

export class RouteLogin extends Component {
    state = {}
    checkAuth (event, email, password, toRemember) {
        event.preventDefault()
        console.log(email)
        axios.post('/api/auth', {email: email, password: password})
        .then((res) => {
            console.log(res.data, '!!!!!!!!!!!!!!!!!!!!!!!!!!')
        	this.setState({loggedIn: res.data})
        })
    };

    newUser (event, email, username, password) {
        event.preventDefault()
        axios.post('/api/create', {email: email, username: username, password: password})
        .then((res) => {
            this.setState({loggedIn: res.data})
        })
    };

    routeApp(bool) {
    	if (localStorage.getItem('persist') === "true" && !bool) {
            axios.post('/api/auth/persist', {persistToken: localStorage.getItem('token')})
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    this.setState({loggedIn: true})
                }
            })
            return null
    	} else if (bool) {
            console.log(bool)
            return (<All />)
        }
        else {
    		return (
                <Login 
                    checkAuth={this.checkAuth.bind(this)}
                    newUser={this.newUser.bind(this)}
                />
            )
    	}
    };
	render() {
		return this.routeApp(this.state.loggedIn)
	}

}