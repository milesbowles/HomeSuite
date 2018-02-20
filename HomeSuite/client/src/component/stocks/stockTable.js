import React from "react";
import {Row} from "./stockRow";
/** Table will display stocks in an orderly fashion */
export const Table = props =>
    <table style={{ width: "75%" }}>
    <tbody>
        <tr>
            <th className="col-md-6">Company Ticker Symbol</th>
            <th className="col-md-6">Current Selling Price</th>
        </tr>
        {props.children}
    </tbody>
    </table>