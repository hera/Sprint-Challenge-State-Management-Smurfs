import {
    smurfsReducer,
    isAddFormExpandedReducer,
    editingSmurfReducer
} from './reducers';
import { combineReducers } from 'redux';


export default combineReducers({
    smurfs: smurfsReducer,
    isAddFormExpanded: isAddFormExpandedReducer,
    editingSmurf: editingSmurfReducer
});
