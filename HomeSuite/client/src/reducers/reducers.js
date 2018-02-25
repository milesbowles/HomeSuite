import {combineReducers} from "redux";
import {LOGIN, CREATE_USER} from "../actions/actions";
import {REQUEST_LOGIN, RECEIVE_LOGIN, REQUEST_CREATE_USER, RECEIVE_CREATE_USER, REQUEST_PERSIST, RECEIVE_PERSIST, REQUEST_STOCKS, RECEIVE_STOCKS} from "../actions/actions";

/** REQRES FOR ALL ACTIONS *//////////////////////////////////////////////////////////////////////////////////////////////////
function loginReqRes(state = {isFetching: false}, action){
    
    switch(action.type){


        /** LOGIN REQRES *///////////////////////////////////////////
        case REQUEST_LOGIN:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {
                isFetching: false
            });
        default: return state;    
    }
}
function createUserReqRes(state ={isFetching: false}, action){
    switch(action.type){
        /** CREATE USER REQRES *//////////////////////////////////////
        case REQUEST_CREATE_USER:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_CREATE_USER:
            return Object.assign({}, state, {
                isFetching: false
            });
        default: return state;
    }
}

function persistReqRes(state = {isFetching: false}, action){
    switch(action.type){
        /** CREATE PERSISTENCE REQRES */
        case REQUEST_PERSIST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_PERSIST:
            return Object.assign({}, state, {
                isFetching: false
            });
        default: return state;
    }
}

function stockReqRes(state = {isFetching: false}, action){
    switch(action.type){
        /** STOCKS REQRES */////////////////////////////////////////////
        case REQUEST_STOCKS:
            /** Translate the booleans into the state */
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_STOCKS: 
            /** Translate the booleans into the state */
            return Object.assign({}, state, {
                isFetching: false
            })

        /** Return the empty false state by default */
        default: return state;
    }
}


/** ACTUAL REDUCERS */////////////////////////////////////////////////////////////////////////////////


function login(state = {}, action){
    switch(action.type){
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {
                loggedIn: action.loggedIn,
                username: action.username
            });
        default: return state;
    }
}


function createUser(state = {}, action){
    switch(action.type){
        case RECEIVE_CREATE_USER:
            return Object.assign({}, state, {
                loggedIn: action.loggedIn
            });
        default: return state;
    }
}


function persist(state = {}, action){
    switch(action.type){
        case RECEIVE_PERSIST:
            return Object.assign({}, state, {
                persist: true
            });
        default: return state;
    }
}




/** STOCKS REDUCERS *////////////////////////////////////////////////////////////////

function stocks(state = [], action){
    console.log(state);
    switch(action.type){
        case RECEIVE_STOCKS:
            return [...state, {tickerSymbol: action.tickerSymbol, price: action.price}];
        /** If no action is provided, return default state */
        default: return state;
    }
}

const suiteApp = combineReducers({
    login,
    createUser,
    persist,
    stocks
});

export default suiteApp;