/** Import react */
import React from "react";
/** SiteWrapper component will include everything in the app */
const SiteWrapper = props =>{
    /** A SiteWrapper component renders the following */
    return (
        /** Div with a site-wrap identifier */
        /** Inner div where every element will be passed on as children */
        <div class="site-wrap">
            <div class="panel-wrap animate--none">
                {props.children}
            </div>
        </div>
    );
};
/** This type of export is normally to export only one component at a time from index file */
export default SiteWrapper;