import { inputConstants } from "../constants";

const { GET_INPUT_VALUE } = inputConstants;

const getInputValue = (event) => {
    return {
        type: GET_INPUT_VALUE,
        payload: event.target.value
    };
};

export const inputActions = {
    getInputValue
};