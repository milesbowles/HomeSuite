import fetch from 'cross-fetch'
import API from "../utils/stocksAPI";
import Axios from "axios";

/** Export actions */
export const ADD_STOCK = "ADD_STOCK";
export const REQUEST_STOCKS = 'REQUEST_STOCKS'
export const RECEIVE_STOCKS = 'RECEIVE_STOCKS'

/** Export action creators */

export function addStock(ticker, price){
  return {
    type: ADD_STOCK,
    price: price
  }
}

function requestStocks(ticker) {
  return {
    type: REQUEST_STOCKS,
    ticker
  }
}

function receiveStocks(ticker, json) {
  return {
    type: RECEIVE_STOCKS,
    ticker,
    price: json.dataset_data.data[0][4],
    receivedAt: Date.now()
  }
}


/** Define default stocks to display */
const companies = ["AAPL", "FB", "SBUX", "NKE", "VZ"]
/** API Key to access the api */
const APIKEY = "hkv27C8yymw8ekmbFQas";

/** This is a thunk action creator */
/** These action creators send out actions for reducers to handle */
export function fetchStocks(ticker) {
  /** Thunk allows rendering of functions with a dispatch function to return  */
  return function (dispatch) {

    /** Let reducers know the request has been made */
    dispatch(requestStocks(ticker));

    /** Return a promise from the api call */
    return fetch(`https://www.quandl.com/api/v3/datasets/WIKI/${ticker}/data.json?api_key=${APIKEY}`)
      .then(
        response => response.json(), error => console.log('An error occurred.', error)
      )
      .then(json =>
        /** Signal reducers to receive data from the stocks */
        /** This will send ticker symbol and price as defined above, for reducers to make use of */
        dispatch(receiveStocks(ticker, json))
      )
  }
}
