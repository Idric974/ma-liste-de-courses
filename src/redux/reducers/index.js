import { combineReducers } from 'redux';
import clicOnMenuCombineReducers from './clicOnMenu.reducer';
import addItemsCombineReducers from './getAllItem.reducer';
import getAllSuggestionReducers from './getAllSuggestion.reducer';
// import CreateSuggestionsCombineReducers from './CreateSuggestion.reducer';
import DeleteSuggestionsCombineReducers from './DeleteSuggestion.reducer';

export default combineReducers({
    clicOnMenuCombineReducers,
    addItemsCombineReducers,
    getAllSuggestionReducers,
    // CreateSuggestionsCombineReducers,
    DeleteSuggestionsCombineReducers
});