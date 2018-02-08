/** import Component */
import React, {Component} from "react";
/** This import is made possible by the index file in component/panel because it exports everything together */
import {PanelWrapper, Direction} from "../component/panel";

/** Main UpLeft will be the center part of the app */
export class UpLeft extends Component {
    /** A UpLeft component renders the following */
    render() {
        return (
            <PanelWrapper x="-1" y="-1">
                 <Direction direction="right js-right">right</Direction>
                 <Direction direction="right-down js-down js-right">down/right</Direction>
                 <Direction direction="down js-down">down</Direction>
                 <h1>UpLeft</h1>
             </PanelWrapper>
     );
    }
};