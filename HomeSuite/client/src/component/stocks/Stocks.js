import React, { Component } from "react";
import API from "../../utils/stocksAPI";
import VisibleStocks from "../../containers/VisibleStocks";
import "./Stocks.css";
import AddStock from "../../containers/AddStock";

/** Stocks component returns AddStock and VisibleStocks */
/** Which are both controlled by the redux store */
export const Stocks = () => (
    <div className="container">
        <div className="row">
            <AddStock />
            <VisibleStocks />
        </div>
    </div>
) 