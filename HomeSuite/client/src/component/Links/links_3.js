import React, { Component } from "react";
import "./links.css";
import {pictures} from "./assets";

export class Links3 extends Component {
    render() {
        return (
            <div className="container-thumbs">
                <ul className="gallery">
                    <li className="gallery-item">
                        <a href="https://www.youtube.com/" className="gallery_link">
                            <img src={pictures.sound} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://github.com/milesbowles" className="gallery_link">
                            <img src={pictures.evernote} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://bootcampspot-v2.com/" className="gallery_link">
                            <img src={pictures.skype} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://www.youtube.com/" className="gallery_link">
                            <img src={pictures.craiglist} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://video.vice.com/en_us?utm_source=googlead" className="gallery_link">
                            <img src={pictures.zomato} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://smile.amazon.com/" className="gallery_link">
                            <img src={pictures.tumblr} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://google.com/" className="gallery_link">
                            <img src={pictures.venmo} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://www.udemy.com/" className="gallery_link">
                            <img src={pictures.meetup} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://www.youtube.com/" className="gallery_link">
                            <img src={pictures.wells} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://www.youtube.com/" className="gallery_link">
                            <img src={pictures.cnet} alt="" className="thumbnail"/>
                        </a>
                    </li>
                </ul>
            </div>
        );
    };
};