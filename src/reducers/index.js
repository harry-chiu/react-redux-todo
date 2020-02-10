import { combineReducers } from "redux";

import inputReducer from "./input.reducers";
import todoReducer from "./todo.reducers";

export default combineReducers({
    inputReducer,
    todoReducer
});