import {
    DELETE_SUGGESTIONS,
} from '../actions/DeleteSuggestion.action';

const initialState = {};

export default function getItemsReducer(state = initialState, action) {
    switch (action.type) {

        case DELETE_SUGGESTIONS:
            return action.payload;

        default:
            return state;
    }
}
