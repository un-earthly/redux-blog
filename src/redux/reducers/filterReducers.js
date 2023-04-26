import { ALL_TIME_POPULAR, FIRST_UPLOAD, LAST_UPLOAD, NAME_A_TO_Z, TRENDING_BANDS } from "../actionTypes/actionTypes";

const initalState = {
    filteredBy:[],
    keywords: "",
}
const filterReducer = (state = initalState, action) => {
    switch (action.type) {
        case (LAST_UPLOAD):
            return state
        case (FIRST_UPLOAD):
            return state
        default:
            return state
    }
}
export default filterReducer;