import { todoConstants } from "../constants";

const {
    ADD_TODO,
    TOGGLE_TODO,
    SELECT_FILTER
} = todoConstants;

let counter = 0;

const addTodo = () => (dispatch, getState) => {
    dispatch({
        type: ADD_TODO,
        payload: {
            id: counter++,
            text: getState().inputReducer.inputValue,
            completed: false
        }
    });
};

const toggleTodo = (id) => (dispatch, getState) => {
    const todos = getState().todoReducer.todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        };

        return todo;
    });

    dispatch({
        type: TOGGLE_TODO,
        payload: todos
    });
};

const selectFilter = (event) => {
    return {
        type: SELECT_FILTER,
        payload: event.target.value
    };
};

export const todoActions = {
    addTodo,
    toggleTodo,
    selectFilter
};