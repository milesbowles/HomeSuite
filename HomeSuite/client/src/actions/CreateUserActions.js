import axios from "axios";
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