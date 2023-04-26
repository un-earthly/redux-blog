import {
    ADD_CONTENT,
    DELETE_CONTENT,
    GET_CONTENT,
    UPDATE_CONTENT
} from "../actionTypes/actionTypes";

const initalState = {}
const blogReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_CONTENT:
            return {
                ...state,
                talks: action.payload,
            };
        case ADD_CONTENT:
            return state
        case (UPDATE_CONTENT):
            return state
        case (DELETE_CONTENT):
            return state
        default:
            return state
    }
}
export default blogReducer;