import {
  READ_ALL_SUGGESTIONS,
  GET_ALL_SUGGESTIONS,
} from '../actions/getAllSuggestion.action';

const initialState = {};

export default function getSuggestionReducer(state = initialState, action) {
  switch (action.type) {
    case READ_ALL_SUGGESTIONS:
      return action.payload;

    case GET_ALL_SUGGESTIONS:
      return action.payload;

    default:
      return state;
  }
}
