/** Import react */
import React from "react";
/** PanelWrapper will wrap up all the direction elements */
/** Which allow the user to navigate up, down, left/right etc. */
/** This type of export will allow to export multiple components in the index file */
export const PanelWrapper = props => {
    /** PanelWrapper element will render the following */
    return (
        /** Div with a panel identifier */
        /** X- and Y-coordinate attributes that will change based on the user's position on screen */
        /** Elements will be passed in as children */
        <div class="panel" data-x-pos={props.x} data-y-pos={props.y}>
                {props.children}
        </div>
    );
};