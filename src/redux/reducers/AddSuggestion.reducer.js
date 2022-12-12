import {
    ADD_SUGGESTIONS,
} from '../actions/addSuggestion.action';

const initialState = {};

export default function addSuggestion(state = initialState, action) {
    switch (action.type) {

        case ADD_SUGGESTIONS:
            return action.payload;

        default:
            return state;
    }
}
