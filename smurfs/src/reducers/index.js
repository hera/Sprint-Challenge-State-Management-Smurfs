import {
    smurfsReducer,
    isAddFormExpandedReducer,
    editingSmurfReducer,
    smurfCandidateReducer
} from './reducers';
import { combineReducers } from 'redux';


export default combineReducers({
    smurfs: smurfsReducer,
    isAddFormExpanded: isAddFormExpandedReducer,
    editingSmurf: editingSmurfReducer,
    smurfCandidate: smurfCandidateReducer
});
