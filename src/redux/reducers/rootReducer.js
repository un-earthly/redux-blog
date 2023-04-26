import { combineReducers } from "@reduxjs/toolkit";
import blogReducer from "./blogReducer";
import filterReducer from "./filterReducers";

const rootReducer = combineReducers({
    blogReducer,
    filterReducer
})
export default rootReducer;