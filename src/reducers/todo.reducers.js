import { todoConstants } from "../constants";

const {
    ADD_TODO,
    TOGGLE_TODO,
    SELECT_FILTER
} = todoConstants;

const initialState = {
    todos: [],
    filter: "all"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] };
        case TOGGLE_TODO:
            return { ...state, todos: action.payload };
        case SELECT_FILTER:
            return { ...state, filter: action.payload };
        default:
            return state;
    };
};