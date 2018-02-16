import React, {Component} from "react";
import API from "../../utils/stocksAPI";
import Search from "./stockForm";

class Stocks extends Component{
    state = {
        companies: ["AAPL", "FB", "SBUX", "NKE", "VZ"],
        amounts: [],
        search: ""
    };
    /** When the page loads */
    componentDidMount(){
        
    };
    /** This function calls on the API folder to perform a get request */
    /** It takes in a company to search as a parameter */
    getStockInfo(company){
        var temp = this.state.amounts;
        API.getStocks(company).then(data => {temp.push(data.data.dataset_data.data[0][4]); this.setState({amounts: temp})});
    };
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
    render(){
        return (
            <div>
            <Search
                handleInputChange={this.handleInputChange}
                value={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
            />
                <h1>{this.state.amounts.map(amount => {return amount})}</h1>
            </div>
        );
    }
};
export default Stocks;