/** import Component */
import React, {Component} from "react";
/** This import is made possible by the index file in component/panel because it exports everything together */
import {PanelWrapper, Direction} from "../component/panel";

/** DownLeft will be the center part of the app */
export class DownLeft extends Component {
    /** A DownLeft component renders the following */
    render() {
        return (
            <PanelWrapper x="-1" y="-1">
                <Direction direction="up js-up">up</Direction>
                 <Direction direction="right-top js-up js-right">up/right</Direction>
                 <Direction direction="right js-right">right</Direction>
                 <h1>DownLeft</h1>
             </PanelWrapper>
     );
    }
};