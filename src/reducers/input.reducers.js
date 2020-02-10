import { inputConstants } from "../constants";

const { GET_INPUT_VALUE } = inputConstants;

const initialState = {
    inputValue: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_INPUT_VALUE:
            return { ...state, inputValue: action.payload };
        default:
            return state;
    };
};