/** import Component */
import React, {Component} from "react";
/** This import is made possible by the index file in component/panel because it exports everything together */
import {PanelWrapper, Direction} from "../component/panel";
/** Up is the top part of the application */
export class Up extends Component {
    render(){
        return (
            <PanelWrapper x="0" y="1">
                <Direction direction="left js-left">left</Direction>
                <Direction direction="right js-right">right</Direction>
                <Direction direction="right-down js-down js-right">down/right</Direction>
                <Direction direction="left-down js-down js-left">down/left</Direction>
                <Direction direction="down js-down">down</Direction>
                <h1>Up</h1>
            </PanelWrapper>
        );
    }
};

