/** Fetch is used as the API middleware */
/** Is called in a fashion similar to axios and cheerio */
import fetch from "cross-fetch";
import axios from "axios";
import bcrypt from "bcrypt-nodejs";

/** API Key to access the api */
const APIKEY = "hkv27C8yymw8ekmbFQas";



/** LOGIN ACTIONS *//////////////////////////////////////////////////////////////

/** LOGIN ACTION TYPES */
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const RECEIVE_LOGIN = "RECEIVE_LOGIN";

/** Export action creators */
/** These actions will be called by the thunk middleware */

/** Send LOGIN TYPE along with username and password */
export function requestLogin() {
    return { type: REQUEST_LOGIN};
}

export function receiveLogin(data) {
    return { type: RECEIVE_LOGIN, loggedIn: data.loggedIn, username: data.username };
}

export function fetchLogin(email, password) {
    return function (dispatch) {
        dispatch(requestLogin());
        /** Send post request with the data input by user */
        return axios.post('/api/auth', { email: email, password: password })
            /** After evaluation by apiRoutes.js in routing */
            .then((res) => {
                localStorage.setItem("username", res.data.username);
                localStorage.setItem("persist", true);
                window.location.reload();
                /** Logged in will be either true or false */
                dispatch(receiveLogin(res.data));
            })
    }
}




/** CREATE USER ACTIONS *////////////////////////////////////////////////////////////////////////////////////////////

/** Export create actions action types */

export const REQUEST_CREATE_USER = "CREATE_USER";
export const RECEIVE_CREATE_USER = "RECEIVE_CREATE_USER";

/** Send CREATE_USER action along with an emmail, username and password */
export function requestCreateUser() {
    return { type: REQUEST_CREATE_USER};
}

export function receiveCreateUser(res) {
    return { type: RECEIVE_CREATE_USER, loggedIn: res.data };
}

export function fetchCreateUser(username, email, password) {
    return function (dispatch) {
        dispatch(requestCreateUser());
        /** Send post request with the data input by user */
        return axios.post('/api/create', { email: email, username: username, password: password })
            .then((res) => {
                localStorage.setItem("persist", true);
                window.location.reload();
                dispatch(receiveCreateUser(res));
            })
    }
}




export const REQUEST_PERSIST = "REQUEST_PERSIST";
export const RECEIVE_PERSIST = "RECEIVE_PERSIST";

export function requestPersist(email, password) {
    return { type: REQUEST_PERSIST, email, password };
}

export function receivePersist() {
    return { type: RECEIVE_PERSIST };
}

export function fetchPersist(email, password) {
    return function (dispatch) {
        dispatch(requestPersist(email, password));
        let salt = bcrypt.genSaltSync(5)
        let hash = bcrypt.hashSync(password, salt)
        localStorage.setItem("email", email);
        localStorage.setItem('token', hash)
        return axios.post('/api/persist', { email: email, persistToken: hash }).then(data => {
            dispatch(receivePersist());
        })
    }
}






/** STOCKS ACTIONS *////////////////////////////////////////////////////////////////////////

export const REQUEST_STOCKS = "REQUEST_STOCKS";
export const RECEIVE_STOCKS = "RECEIVE_STOCKS";

/** It returns type for reducers to read along with the stock ticker */
export function requestStockInfo(tickerSymbol) {
    return { type: REQUEST_STOCKS, tickerSymbol }
}

/** Returns type for reducers to evaluate */
export function receiveStockInfo(tickerSymbol, json) {
    return { type: RECEIVE_STOCKS, tickerSymbol, price: json.dataset_data.data[0][4] };
}

/** Using what's known as thunk middleware: below */
/** Export an action that triggers another action */
/** This handles asynchronous data calls */
export function fetchStocks(tickerSymbol) {
    /** Returns a dispatch function just like the store would do */
    return function (dispatch) {
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