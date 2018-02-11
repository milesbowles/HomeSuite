import React, { Component } from "react";
import "../App.css";

export class All extends Component {
    /** The current x and y coordintes for the pages */
    state = {
        x: "0",
        y: "0",
        animate: "",
        styles: ""
    };
    componentDidMount() {

    };
    moveUp() {
        this.setState({ y: (parseInt(this.state.y, 10) + 1).toString() }, () => this.setState({styles: `translateX(${this.state.x}00%) translateY(${this.state.y}00%)`}));
        /** Increment the pos_y variable by one */
    };
    moveDown() {
        /** Decrement the y positioning */
        this.setState({ y: (parseInt(this.state.y, 10) - 1).toString() }, () => this.setState({styles: `translateX(${this.state.x}00%) translateY(${this.state.y}00%)`}));
        
    };
    moveLeft() {
        /** Increment the pos_x variable by one */
        this.setState({ x: (parseInt(this.state.x, 10) + 1).toString() }, () => this.setState({styles: `translateX(${this.state.x}00%) translateY(${this.state.y}00%)`}));
    };
    moveRight() {
        /** Decrement the x position */
        this.setState({x: (parseInt(this.state.x, 10) - 1).toString() }, () => this.setState({styles: `translateX(${this.state.x}00%) translateY(${this.state.y}00%)`}));
    };
    moveUpRight(){
        this.moveUp();
        this.moveRight();
    };
    moveUpLeft(){
        this.moveUp();
        this.moveLeft();
    }; 
    moveDownRight(){
        this.moveDown();
        this.moveRight();
    };
    moveDownLeft(){
        this.moveDown();
        this.moveRight();
    };
    setPanelAndZoom(e) {
        /** To the pos_x variable, decrement the position by the target's current x position */
        this.setState({ x: e.target.getAttribute('data-x-pos') });
        /** To the pos_y variable, increment the position by the target's current y position */
        this.setState({ y: e.target.getAttribute('data-y-pos') });
        /** Call the zoomIn function below */
        this.zoomIn();
    };
    zoomOut(e, site, panel) {
        /** stopPropatation detaches this event from the parent elements so it's not applied to them */
        e.stopPropagation();
        /** To the site element, add the show-all class */
        this.addClass(site, 'show-all');
        /** Traverse the length of the panel element */
        for (var x = 0; x < panel.length; x++) {
            (function (_x) {
                /** For each panel element, add a click listener witht the setPanelAndZoom function below */
                panel[_x].addEventListener('click', this.setPanelAndZoom);
            })(x);
        }
    };
    ZoomIn(panel, site) {
        /** Traverse the the length of the panel element */
        for (var x = 0; x < panel.length; x++) {
            /** For each panel element, remove the click listener with the setPanelAndZoom function */
            panel[x].removeEventListener('click', this.setPanelAndZoom);
        }
        /** From the site element, remove the show-all function */
        this.removeClass(site, 'show-all');
    };
    render() {
        return (
            <div className="site-wrap">
                <div className={`panel-wrap animate--none ${this.state.animate}`} style={{transform: this.state.styles}}>
                    <div className="panel" data-x-pos="0" data-y-pos="0">
                        <span className="panel__nav panel__nav--up js-up" onClick={this.moveUp.bind(this)}>up</span>
                        <span className="panel__nav panel__nav--right-top js-up js-right" onClick={this.moveUpRight.bind(this)}>up/right</span>
                        <span className="panel__nav panel__nav--left-top js-up js-left" onClick={this.moveUpLeft.bind(this)}>up/left</span>
                        <span className="panel__nav panel__nav--left js-left" onClick={this.moveLeft.bind(this)}>left</span>
                        <span className="panel__nav panel__nav--right js-right" onClick={this.moveRight.bind(this)}>right</span>
                        <span className="panel__nav panel__nav--right-down js-down js-right"onClick={this.moveDownRight.bind(this)}>down/right</span>
                        <span className="panel__nav panel__nav--left-down js-down js-left" onClick={this.moveDownLeft.bind(this)}>down/left</span>
                        <span className="panel__nav panel__nav--down js-down" onClick={this.moveDown.bind(this)}>down</span>
                        <span className="panel__zoom js-zoom">View All</span>
                        <h1>Main</h1>

                        <div className="panel__animation-list">
                            <h2>Good Evening, Miles.</h2>
                        </div>
                    </div>
                    <div className="panel" data-x-pos="0" data-y-pos="1">
                        <span className="panel__nav panel__nav--left js-left" onClick={this.moveLeft.bind(this)}>left</span>
                        <span className="panel__nav panel__nav--right js-right" onClick={this.moveRight.bind(this)}>right</span>
                        <span className="panel__nav panel__nav--right-down js-down js-right" onClick={this.moveDownRight.bind(this)}>down/right</span>
                        <span className="panel__nav panel__nav--left-down js-down js-left" onClick={this.moveDownLeft.bind(this)}>down/left</span>
                        <span className="panel__nav panel__nav--down js-down" onClick={this.moveDown.bind(this)}>down</span>
                        <h1>Up</h1>
                    </div>
                    <div className="panel" data-x-pos="-1" data-y-pos="1">
                        <span className="panel__nav panel__nav--right-down js-down js-right" onClick={this.moveDownRight.bind(this)}>down/right</span>
                        <span className="panel__nav panel__nav--right js-right" onClick={this.moveRight.bind(this)}>right</span>
                        <span className="panel__nav panel__nav--down js-down" onClick={this.moveDown.bind(this)}>down</span>
                        <h1>Up Left</h1>
                    </div>
                    <div className="panel" data-x-pos="1" data-y-pos="1">
                        <span className="panel__nav panel__nav--left-down js-down js-left" onClick={this.moveDownLeft.bind(this)}>down/left</span>
                        <span className="panel__nav panel__nav--left js-left" onClick={this.moveLeft.bind(this)}>left</span>
                        <span className="panel__nav panel__nav--down js-down" onClick={this.moveDown.bind(this)}>down</span>
                        <h1>Up Right</h1>
                    </div>
                    <div className="panel" data-x-pos="-1" data-y-pos="0">
                        <span className="panel__nav panel__nav--up js-up" onClick={this.moveUp.bind(this)}>up</span>
                        <span className="panel__nav panel__nav--right-top js-up js-right" onClick={this.moveUpRight.bind(this)}>up/right</span>
                        <span className="panel__nav panel__nav--right js-right" onClick={this.moveRight.bind(this)}>right</span>
                        <span className="panel__nav panel__nav--right-down js-down js-right" onClick={this.moveDownRight.bind(this)}>down/right</span>
                        <span className="panel__nav panel__nav--down js-down" onClick={this.moveDown.bind(this)}>down</span>
                        <h1>Left</h1>
                    </div>
                    <div className="panel" data-x-pos="-1" data-y-pos="-1">
                        <span className="panel__nav panel__nav--up js-up" onClick={this.moveUp.bind(this)}>up</span>
                        <span className="panel__nav panel__nav--right-top js-up js-right" onClick={this.moveUpRight.bind(this)}>up/right</span>
                        <span className="panel__nav panel__nav--right js-right" onClick={this.moveRight.bind(this)}>right</span>
                        <h1>Down Left</h1>
                    </div>
                    <div className="panel" data-x-pos="1" data-y-pos="-1">
                        <span className="panel__nav panel__nav--up js-up" onClick={this.moveUp.bind(this)}>up</span>
                        <span className="panel__nav panel__nav--left-top js-up js-left" onClick={this.moveUpLeft.bind(this)}>up/left</span>
                        <span className="panel__nav panel__nav--left js-left" onClick={this.moveLeft.bind(this)}>left</span>
                        <h1>Down Right</h1>
                    </div>
                    <div className="panel" data-x-pos="1" data-y-pos="0">
                        <span className="panel__nav panel__nav--up js-up" onClick={this.moveUp.bind(this)}>up</span>
                        <span className="panel__nav panel__nav--left-top js-up js-left" onClick={this.moveUpLeft.bind(this)}>up/left</span>
                        <span className="panel__nav panel__nav--left js-left" onClick={this.moveLeft.bind(this)}>left</span>
                        <span className="panel__nav panel__nav--left-down js-down js-left" onClick={this.moveDownLeft.bind(this)}>down/left</span>
                        <span className="panel__nav panel__nav--down js-down" onClick={this.moveDown.bind(this)}>down</span>
                        <h1>Right</h1>
                    </div>
                    <div className="panel" data-x-pos="0" data-y-pos="-1">
                        <span className="panel__nav panel__nav--up js-up" onClick={this.moveUp}>up</span>
                        <span className="panel__nav panel__nav--left-top js-up js-left" onClick={this.moveUpLeft.bind(this)}>up/left</span>
                        <span className="panel__nav panel__nav--right-top js-up js-right" onClick={this.moveUpRight.bind(this)}>up/right</span>
                        <span className="panel__nav panel__nav--left js-left" onClick={this.moveLeft.bind(this)}>left</span>
                        <span className="panel__nav panel__nav--right js-right" onClick={this.moveRight.bind(this)}>right</span>
                        <span className="panel__nav panel__nav--down js-down" onClick={this.moveDown.bind(this)}>down</span>
                        <h1>Down</h1>
                    </div>
                    <div className="panel" data-x-pos="0" data-y-pos="-2">
                        <span className="panel__nav panel__nav--up js-up" onClick={this.moveUp.bind(this)}>up</span>
                        <h1>Down 2</h1>
                    </div>
                </div>
            </div>
        );
    };
};