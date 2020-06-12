import { smurfsReducer } from './reducers';
import { combineReducers } from 'redux';


export default combineReducers({
    smurfs: smurfsReducer
});
