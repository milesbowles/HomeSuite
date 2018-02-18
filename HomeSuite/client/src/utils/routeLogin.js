import React, { Component } from "react";
import { All } from "../pages"
import { Login } from "../component/Login"
import axios from "axios"

export class RouteLogin extends Component {
	state = {
		loggedIn: false
	};
    checkAuth(event, email, password) {
        event.preventDefault()
        axios.post('/api/users', {email:email, password:password}).then((res)=> {
        	this.setState({loggedIn:res.data})
        })
    };
    routeApp(bool) {
    	if (bool) {
    		return (<All />)
    	} else {
    		return (<Login checkAuth={this.checkAuth.bind(this)} />)
    	}
    };
	render() {
		return this.routeApp(this.state.loggedIn)
	}

}