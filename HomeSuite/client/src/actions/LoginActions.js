import axios from "axios";

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