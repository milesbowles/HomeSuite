import {combineReducers} from "redux";
import {ADD_STOCK, REQUEST_STOCKS, RECEIVE_STOCKS} from "../actions/actions";
import API from "../utils/stocksAPI";

// const dat = [];
// API.getDefaultStocksInfo(data => {
//     dat.push(data.map(res => {return res}));
// });

function stockReqRes(state = {isFetching: false, items: []}, action){
    switch(action.type){
        case REQUEST_STOCKS:
            /** Translate the booleans into the state */
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_STOCKS: 
            /** Translate the booleans into the state */
            return Object.assign({}, state, {
                isFetching: false,
                items: action.stocks
            })
        default: return state
    }
}

function stocks(state = [], action){
    console.log(state);
    switch(action.type){
        case RECEIVE_STOCKS:
            // return Object.assign({}, state, {
            //     [action.tickerSymbol]: stockReqRes(state[action.tickerSymbol], action)
                
            // });
            return [...state, {tickerSymbol: action.tickerSymbol, price: action.price}];
        /** If no action is provided, return default state */
        default: return state;
    }
}

const suiteApp = combineReducers({stocks});

export default suiteApp;