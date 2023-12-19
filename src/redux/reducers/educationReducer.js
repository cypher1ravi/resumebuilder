// reducers/educationReducer.js

import { ADD_EDUCATION, DELETE_EDUCATION } from '../actions/educationAction';


const initialState = {
    educationList: []
};

const educationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EDUCATION:
            return {
                ...state,
                educationList: [...state.educationList, action.payload],

            };
        case DELETE_EDUCATION:
            const updatedEducation = [...state.educationList]
            updatedEducation.splice(action.payload, 1);
            return {
                ...state,
                workList: updatedEducation
            }
        default:
            return state;
    }
};

export default educationReducer;
