/** import Component */
import React, {Component} from "react";
/** This import is made possible by the index file in component/panel because it exports everything together */
import {PanelWrapper, Direction} from "../component/panel";

/** Main page will be the center part of the app */
export class Left extends Component {
    /** A Left component renders the following */
    render() {
        return (
            <PanelWrapper x="-1" y="0">
                <Direction direction="up js-up">up</Direction>
                 <Direction direction="right-top js-up js-right">up/right</Direction>
                 <Direction direction="right js-right">right</Direction>
                 <Direction direction="right-down js-down js-right">down/right</Direction>
                 <Direction direction="down js-down">down</Direction>
                 <h1>Left</h1>
             </PanelWrapper>
     );
    }
};