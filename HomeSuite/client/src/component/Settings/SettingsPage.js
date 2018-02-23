import React, {Component} from "react";
import {LogoutButton} from "./LogoutButton";

export class SettingsPage extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    logout(event){
        console.log("Working");
        localStorage.setItem("persist", false);
        window.location.reload();
    }
    render(){
        return(
            <LogoutButton onClick={this.logout.bind(this)}/>
        )
    }
}