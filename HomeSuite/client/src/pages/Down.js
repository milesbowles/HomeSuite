
/** import Component */
import React, {Component} from "react";
/** This import is made possible by the index file in component/panel because it exports everything together */
import {PanelWrapper, Direction} from "../component/panel";
/** Down is the Bottom part of the application */
export class Down extends Component {
    render(){
        return (
            <PanelWrapper x="0" y="-1">
                <Direction direction="up js-up">up</Direction>
                <Direction direction="right-top js-up js-right">up/right</Direction>
                <Direction direction="left-top js-up js-left">up/left</Direction>
                <Direction direction="left js-left">left</Direction>
                <Direction direction="right js-right">right</Direction>
                <h1>Down</h1>
            </PanelWrapper>
        );
    }
};