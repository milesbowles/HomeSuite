/** import Component */
import React, {Component} from "react";
/** This import is made possible by the index file in component/panel because it exports everything together */
import {PanelWrapper, Direction} from "../component/panel";

/** UpRight will be the center part of the app */
export class UpRight extends Component {
    /** An UpRight component renders the following */
    render() {
        return (
            <PanelWrapper x="1" y="1">
                 <Direction direction="left js-left">left</Direction>
                 <Direction direction="left-down js-down js-left">down/left</Direction>
                 <Direction direction="down js-down">down</Direction>
                 <h1>UpRight</h1>
             </PanelWrapper>
     );
    }
};