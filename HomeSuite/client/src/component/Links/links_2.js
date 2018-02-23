import React, { Component } from "react";
import "./links.css";
import {pictures} from "./assets";

export class Links2 extends Component {
    render() {
        return (
            <div className="container-thumbs">
                <ul className="gallery">
                    <li className="gallery-item">
                        <a href="https://www.youtube.com/" className="gallery_link">
                            <img src={pictures.snap} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://github.com/milesbowles" className="gallery_link">
                            <img src={pictures.bbc} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://bootcampspot-v2.com/" className="gallery_link">
                            <img src={pictures.curiosity} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://www.youtube.com/" className="gallery_link">
                            <img src={pictures.instgram} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://video.vice.com/en_us?utm_source=googlead" className="gallery_link">
                            <img src={pictures.twitter} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://smile.amazon.com/" className="gallery_link">
                            <img src={pictures.netflix} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://google.com/" className="gallery_link">
                            <img src={pictures.gmaps} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://www.udemy.com/" className="gallery_link">
                            <img src={pictures.wiki} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://www.youtube.com/" className="gallery_link">
                            <img src={pictures.spotify} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://www.youtube.com/" className="gallery_link">
                            <img src={pictures.linkedin} alt="" className="thumbnail"/>
                        </a>
                    </li>
                </ul>
            </div>
        );
    };
};