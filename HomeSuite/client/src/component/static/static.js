import React, { Component } from "react";
import "./weather.css";
import {pictures} from "./assets";

export class Weather extends Component {
    render() {
        return (
            <div className="container-weather">
                <img src={pictures.weather} alt="" className="thumbnail2"/>
            </div>
        );
    };
};