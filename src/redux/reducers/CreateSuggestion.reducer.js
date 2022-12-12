import {
    CREATE_SUGGESTIONS,
} from '../actions/CreateSuggestion.action';

const initialState = {};

export default function createSuggestionReducer(state = initialState, action) {
    switch (action.type) {

        case CREATE_SUGGESTIONS:
            return action.payload;

        default:
            return state;
    }
}
