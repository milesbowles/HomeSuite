/** Fetch is used as the API middleware */
/** Is called in a fashion similar to axios and cheerio */
import fetch from "cross-fetch";

const companies = ["AAPL", "FB", "SBUX", "NKE", "VZ"]

/** API Key to access the api */
const APIKEY = "hkv27C8yymw8ekmbFQas";

/** Export action types */
export const ADD_STOCK = "ADD_STOCK";
export const REQUEST_STOCKS = "REQUEST_STOCKS";
export const RECEIVE_STOCKS = "RECEIVE_STOCKS";
export const GET_DEFAULT_STOCK_INFO = "GET_DEFAULT_STOCK_INFO";

/** Export action creators */
/** These actions will be called by the thunk middleware */

/** It returns type for reducers to read along with the stock ticker */
export function requestStockInfo(tickerSymbol){
    return {type: REQUEST_STOCKS, tickerSymbol}
}

/** Returns type for reducers to evaluate */
export function receiveStockInfo(tickerSymbol, json){
    return {type: RECEIVE_STOCKS, tickerSymbol, price: json.dataset_data.data[0][4]};
}

/** Using what's known as thunk middleware: below */
/** Export an action that triggers another action */
/** This handles asynchronous data calls */
export function fetchStocks(tickerSymbol){
    /** Returns a dispatch function just like the store would do */
    return function(dispatch){
        /** Perform the dispatch function */
        /** In other words, perform the action in the arguments */

        /** Note that requestStocks returns a type REQUEST_STOCKS and the ticker for reducers to read */
        dispatch(requestStockInfo(tickerSymbol));

        /** Return the fetch, in other words the API call */
        return fetch(`https://www.quandl.com/api/v3/datasets/WIKI/${tickerSymbol}/data.json?api_key=${APIKEY}`)
            .then(response => response.json(), error => console.log("error"))
            .then(data => dispatch(receiveStockInfo(tickerSymbol, data)));
    }
}