import {
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILURE
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
