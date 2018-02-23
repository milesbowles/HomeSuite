import React from "react";
import PropTypes from "prop-types";

/** A custom Row will be added to the table */
export const Row = props =>
    /** Allow addition of other properties */
    /** Add column with name and one with price */
    <tr {...props}>
        <th className="col-md-6">{props.ticker}</th>
        <th className="col-md-6">{props.price}</th>
    </tr>

/** Assure proper input of props */

