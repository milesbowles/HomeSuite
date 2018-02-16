import React, { Component } from "react";
import API from "../../utils/stocksAPI";
import Search from "./stockForm";
import {Table} from "./stockTable";
import {Row} from "./stockRow";
import "./Stocks.css";

export class Stocks extends Component {
    state = {
        companies: ["AAPL", "FB", "SBUX", "NKE", "VZ"],
        stockInfo: [],
        search: "",
        stockPrice: ""
    };
    /** When the page loads */
    componentDidMount() {
        
    };
    /** This function calls on the API folder to perform a get request */
    /** It takes in a company to search as a parameter */
    getStockInfo(company) {
        API.getStocks(company).then(data => {
            this.setState({ stockInfo: this.state.stockInfo.concat({ name: this.state.search, price: data.data.dataset_data.data[0][4] }) });
        });
    };
    /** This function goes to work when a user types info into input box */
    handleInputChange = event => {
        /** Refer to the name of the element */
        const name = event.target.name;
        /** Refer to the value of the target */
        const value = event.target.value;
        /** Change the state to the value provided by the user */
        this.setState({
            /** Name of the element gets the value */
            /** Without the [] then name is undefined because name is not a state variable */
            /** With the [] then if name is "search", the search variable gets the value */
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.getStockInfo(this.state.search);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Search
                        handleInputChange={this.handleInputChange}
                        value={this.state.search}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                    <Table>
                        {this.state.stockInfo.map(stock => {
                            return (
                                <Row key={stock.name} name={stock.name} price={stock.price}/>
                            )
                        })}
                    </Table>
                </div>
            </div>
        );
    }
};