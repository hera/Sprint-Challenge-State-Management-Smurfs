import {
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILURE,
    TOGGLE_ADD_FORM
} from '../actions/actionTypes';

export function smurfsReducer (state = [], action) {
    switch (action.type) {
        case GET_SMURFS_SUCCESS:
            return action.payload;

        case GET_SMURFS_FAILURE:
            console.log(action.payload);
            return state;

        default:
            return state;
    }
}

export function addFormExpandedReducer (state = false, action) {
    switch (action.type) {
        case TOGGLE_ADD_FORM:
            return !state;
        default:
            return state;
    }
}