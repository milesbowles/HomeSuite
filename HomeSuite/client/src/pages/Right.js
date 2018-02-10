/** import Component */
import React, {Component} from "react";
/** This import is made possible by the index file in component/panel because it exports everything together */
import {PanelWrapper, Direction} from "../component/panel";

/** Rigth will be the center part of the app */
export class Right extends Component {
    /** A Right component renders the following */
    render() {
        return (
            <PanelWrapper x="0" y="1">
                <Direction direction="up js-up">up</Direction>
                 <Direction direction="left-top js-up js-left">up/left</Direction>
                 <Direction direction="left js-left">left</Direction>
                 <Direction direction="left-down js-down js-left">down/left</Direction>
                 <Direction direction="down js-down">down</Direction>
                 <h1>Right</h1>
             </PanelWrapper>
     );
    }
};