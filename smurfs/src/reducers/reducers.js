import {
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILURE,
    TOGGLE_ADD_FORM,
    SET_EDITING_SMURF
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

export function isAddFormExpandedReducer (state = false, action) {
    switch (action.type) {
        case TOGGLE_ADD_FORM:
            return !state;
        default:
            return state;
    }
}

export function editingSmurfReducer (state = null, action) {
    switch (action.type) {
        case SET_EDITING_SMURF:
            if (action.payload === state) {
                return null;
            } else {
                return action.payload;
            }
        default:
            return state;
    }
}