/** import Component */
import React, {Component} from "react";
/** This import is made possible by the index file in component/panel because it exports everything together */
import {PanelWrapper, Direction} from "../component/panel";
/** Main page will be the center part of the app */
export class MainPage extends Component {
    /** A SiteWrapper component renders the following */
    render() {
        return (
            <PanelWrapper x="0" y="0">
                <Direction direction="up js-up">up</Direction>
                 <Direction direction="right-top js-up js-right">up/right</Direction>
                 <Direction direction="left-top js-up js-left">up/left</Direction>
                 <Direction direction="left js-left">left</Direction>
                 <Direction direction="right js-right">right</Direction>
                 <Direction direction="right-down js-down js-right">down/right</Direction>
                 <Direction direction="left-down js-down js-left">down/left</Direction>
                 <Direction direction="down js-down">down</Direction>
                 <span className="panel__zoom js-zoom">View All</span>
                <h1 id="clock">Clock</h1>
                <div className="panel__animation-list">
                    <h2>Good Evening, Miles.</h2>
                </div>
             </PanelWrapper>
     );
    }
};