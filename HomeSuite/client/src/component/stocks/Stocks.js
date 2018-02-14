import React, {Component} from "react";
import API from "../../utils/stocksAPI";

class Stocks extends Component{
    state = {
        companies: ["AAPL", "FB", "SBUX", "NKE", "VZ"],
        amounts: []
    };
    /** When the page loads */
    componentDidMount(){
        /** Find stock info for each company above */
        for (var i = 0; i < this.state.companies.length; i++){
            this.getStockInfo(this.state.companies[i], this.state.amounts);
        }
    };
    /** This function calls on the API folder to perform a get request */
    /** It takes in a company to search as a parameter */
    getStockInfo(company){
        API.getStocks(company);
    };
    render(){
        return (
            
            <h1>Hello</h1>
        );
    }
};
export default Stocks;