import { GET_CONTENT } from "../actionTypes/actionTypes";

export default function loadTalksAction(data) {
    return {
        type: GET_CONTENT,
        payload: data
    }
}