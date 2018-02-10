/** Import react */
import React from "react";
import "../../css/directionality.css";
/** Direction elements will allow navigation to directions such as up, left, right/down etc. */
/** This type of export will allow to export multiple components in the index file */
export const Direction = props => {
    /** A direction component holds the following */
    return (
        /** A span element that will take in a variable direction to finish the class string */
        /** Any extra tags will be added by the cascading props such as id's or hrefs etc. if applicable */
        /** The text or any other elements passed on as children will be displayed between the span */
        <span className={`panel__nav panel__nav--${props.direction}`} {...props}>
            {props.children}
        </span>
    );
};