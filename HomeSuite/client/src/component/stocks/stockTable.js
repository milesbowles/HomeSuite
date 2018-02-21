import React, { Component } from "react";
// import { Row } from "./stockRow";
import API from "../../utils/stocksAPI";
/** Table will display stocks in an orderly fashion */
export class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
          stocks: []
        };
      }
    componentDidMount(){
        API.getDefaultStocksInfo(data =>{
            this.setState({stocks: this.state.stocks.concat(data)})
        })
    }
    render() {
        return (
            <table style={{ width: "75%" }}>
                <tbody>
                    <tr>
                        <th className="col-md-6">Company Ticker Symbol</th>
                        <th className="col-md-6">Current Selling Price</th>
                    </tr>
                    {/* {this.props.stocks.reverse().map((stock, index) => (
                        <Row key={index} ticker={stock.ticker} price={stock.price} />
                    ))} */}
                    {/* {this.state.stocks.map((stock, index) => (
                        <Row key={index} ticker={stock.name} price={stock.price}/>
                    ))} */}
                    {this.props.children}
                </tbody>
            </table>
        )
    }
}
Table.defaultProps = {
    stocks: []
}