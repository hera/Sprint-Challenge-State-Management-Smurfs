import { smurfsReducer, addFormExpandedReducer } from './reducers';
import { combineReducers } from 'redux';


export default combineReducers({
    smurfs: smurfsReducer,
    addFormExpanded: addFormExpandedReducer
});
