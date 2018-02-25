import axios from "axios";
import bcrypt from "bcrypt-nodejs";

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