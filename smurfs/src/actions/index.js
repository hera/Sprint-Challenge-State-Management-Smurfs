import {
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILURE,
    TOGGLE_ADD_FORM,
    SET_EDITING_SMURF,
    SET_SMURF_CANDIDATE,
    RESET_SMURF_CANDIDATE,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE
} from './actionTypes';

import axios from 'axios';

export const getSmurfs = () => (dispatch) => {
    axios.get('http://localhost:3333/smurfs')
        .then((response) => {
            dispatch({
                type: GET_SMURFS_SUCCESS,
                payload: response.data
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_SMURFS_FAILURE,
                payload: error
            });
        });
}


export const toggleAddForm = () => (dispatch) => {
    dispatch({
        type: TOGGLE_ADD_FORM
    });
}


export const setEditingSmurf = (smurfId) => (dispatch) => {
    dispatch({
        type: SET_EDITING_SMURF,
        payload: smurfId
    });
}

export const setSmurfCandidate = (smurf) => (dispatch) => {
    dispatch({
        type: SET_SMURF_CANDIDATE,
        payload: smurf
    });
}

export const addSmurf = (smurf) => (dispatch) => {
    axios.post('http://localhost:3333/smurfs', smurf)
        .then((response) => {
            dispatch({
                type: ADD_SMURF_SUCCESS,
                payload: {
                    ...smurf,
                    id: Date.now()
                }
            });
            dispatch({
                type: RESET_SMURF_CANDIDATE
            });
            dispatch({
                type: TOGGLE_ADD_FORM
            });
        })
        .catch((error) => {
            dispatch({
                type: ADD_SMURF_FAILURE,
                payload: error
            });
        })
}