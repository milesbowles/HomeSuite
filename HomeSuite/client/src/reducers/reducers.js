import { combineReducers } from 'redux'
/** Import actions */
import { ADD_STOCK, REQUEST_STOCKS, RECEIVE_STOCKS } from '../actions/actions'

/** Create reducers */

/** These reducers will handle the asynchronous calls made through the API */



function reqResStocks(state = { isFetching: false, items: [] }, action) {
    switch (action.type) {
        case REQUEST_STOCKS:
            /** Translate true isFetching and false didInvalidate into the state object */
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_STOCKS:
            /** Translate the following variables onto the state object */
            return Object.assign({}, state, {
                isFetching: false,
                items: action.stocks,
                lastUpdated: action.receivedAt
            })
        /** If no action provided return the default state */
        default:
            return state
    }
}

function stocks(state = [], action) {
    switch (action.type) {
        case ADD_STOCK: 
            return [
                ...state,
                {
                /** Info associated with each call */
                ticker: action.ticker,
                price: action.price
                }
            ]; 
        case RECEIVE_STOCKS:
        return [
            ...state,
            {
            /** Info associated with each call */
              ticker: action.ticker,
              price: action.price
            }
          ]
        default:
            return state
    }
}

/** Combine and export the reducers */
const rootReducer = combineReducers({
    stocks
})

export default rootReducer