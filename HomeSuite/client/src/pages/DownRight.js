/** import Component */
import React, {Component} from "react";
/** This import is made possible by the index file in component/panel because it exports everything together */
import {PanelWrapper, Direction} from "../component/panel";

/** DownRight will be the center part of the app */
export class DownRight extends Component {
    /** A DownRight component renders the following */
    render() {
        return (
            <PanelWrapper x="1" y="1">
                <Direction direction="up js-up">up</Direction>
                 <Direction direction="left-top js-up js-left">up/left</Direction>
                 <Direction direction="left js-left">left</Direction>
                 <h1>DownRight</h1>
             </PanelWrapper>
     );
    }
};