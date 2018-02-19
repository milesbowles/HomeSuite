import React, { Component } from "react";

export class Greeting extends Component {
    state = {
        time: "",
        greeting: "",
        hours: ""
    };
    componentDidMount() {
        // Sets state as soon as component mounts 
        this.setState({ time: new Date() }, () => this.updateGreeting());
        /** Every second that passes, update the greeting*/
        setInterval(() => {
            this.setState({ time: new Date() }, () => this.updateGreeting());
        }, 1000);
    };
    updateGreeting() {

        var greeting = "";
        // TODO: make this dynamic
        let username = 'Miles'; 

        let hours = (this.state.time.getHours());

        /** Updates greeting based on time of day */
        if (hours < 12) {
            greeting = 'Good Morning, ' + username + '.';
        } else if (hours => 12 && hours < 18) {
            greeting = 'Good Afternoon, ' + username + '.';
        } else if (hours > 17) {
            greeting = 'Good Evening, ' + username + '.';
        }

        // Call updateGreeting function
        this.setGreeting(greeting);
    };
    setGreeting(greeting) {
        /** Assign greeting message */
        this.setState({ greeting: greeting });
    };
    render() {
        return (
            <h2 className="greeting">
                {`${this.state.greeting}`}
            </h2>
        );
    };
};