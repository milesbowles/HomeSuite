/** import Component */
import React, {Component} from "react";
/** This import is made possible by the index file in component/panel because it exports everything together */
import {PanelWrapper, Direction} from "../component/panel";
/** Up is the top part of the application */
export class Up extends Component {
    state = {
        x: "0",
        y: "1",
        animate: "",
        styles: ""
    };
    moveDown(){
        console.log(this.state.x + " " + this.state.y);
        this.setState({y: (parseInt(this.state.y, 10) - 1).toString()}, () => {this.setState({styles: `translateX(${this.state.x}00%) translateY(${this.state.y}00%)`}); console.log(this.state.x + " " + this.state.y)});
    };
    render(){
        return (
            <PanelWrapper x="0" y="1">
                <Direction direction="left js-left">left</Direction>
                <Direction direction="right js-right">right</Direction>
                <Direction direction="right-down js-down js-right">down/right</Direction>
                <Direction direction="left-down js-down js-left">down/left</Direction>
                <Direction direction="down js-down" onClick={this.moveDown.bind(this)}>down</Direction>
                <h1>Up</h1>
            </PanelWrapper>
        );
    }
};

