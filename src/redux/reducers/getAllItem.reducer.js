import {
    READ_ALL_ITEMS,
} from '../actions/getAllItem.action';

const initialState = {};

export default function getItemsReducer(state = initialState, action) {
    switch (action.type) {

        case READ_ALL_ITEMS:
            return action.payload;

        default:
            return state;
    }
}
