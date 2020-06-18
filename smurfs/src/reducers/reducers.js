import {
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILURE,
    TOGGLE_ADD_FORM,
    SET_EDITING_SMURF,
    SET_SMURF_CANDIDATE,
    RESET_SMURF_CANDIDATE,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE
} from '../actions/actionTypes';

export function smurfsReducer (state = [], action) {
    switch (action.type) {
        case GET_SMURFS_SUCCESS:
            return action.payload;

        case GET_SMURFS_FAILURE:
            console.log(action.payload);
            return state;
        case ADD_SMURF_SUCCESS:
            return [
                ...state,
                action.payload
            ];
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

const initialSmurfCandidate = {
    name: '',
    age: 1,
    height: 1
}

export function smurfCandidateReducer (state = initialSmurfCandidate, action) {
    switch (action.type) {
        case SET_SMURF_CANDIDATE:
            return action.payload;
        case RESET_SMURF_CANDIDATE:
            return initialSmurfCandidate;
        default:
            return state;
    }
}