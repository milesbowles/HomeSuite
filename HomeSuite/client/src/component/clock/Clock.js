import React, { Component } from "react";

export class Clock extends Component {
    state = {
        time: "",
        hours: "",
        minutes: "",
        seconds: ""
    };
    componentDidMount() {
        setInterval(() => {
            this.setState({ time: new Date() }, () => this.getTime());
        }, 1000);
    };
    getTime() {
        let hours = (this.state.time.getHours() % 12).toString();
        let minutes = this.state.time.getMinutes().toString();
        let seconds = this.state.time.getSeconds().toString();

        /** If hours are a single digit */
        if (hours.length < 2) {
            /** If hours are zero */
            if (hours === "0") {
                /** Redefine hours to display 12*/
                hours = "12";
            }
            /** If hours aren't zero, tag a zero befor the single-digit hour */
            else {
                hours = "0" + hours;
            }
        }
        /** If minutes are single digit, add a zero before the minute */
        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }
        /** If seconds are single digit, add a zero before the second */
        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }
        this.setTime(hours, minutes, seconds);
        // this.setTime(hours, minutes, seconds);
    };
    setTime(hours, minutes, seconds) {
        this.setState({ hours: hours }, () => console.log(this.state.hours));
        this.setState({ minutes: minutes }, () => console.log(this.state.minutes));
        this.setState({ seconds: seconds }, () => console.log(this.state.seconds));
    };
    render() {
        return (
            <h1 id="clock">
                {`${this.state.hours} : ${this.state.minutes} : ${this.state.seconds}`}
            </h1>
        );
    };
};