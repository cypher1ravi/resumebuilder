// reducers/educationReducer.js

import { ADD_EDUCATION, UPDATE_EDUCATION } from '../actions/educationAction';


const initialState = {
    educationList: [{
        institution: 'IIT bomby',
        degree: 'ug',
        year: '2023'
    }]
};

const educationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EDUCATION:
            return {
                ...state,
                educationList: [...state.educationList, action.payload],

            };
        // case UPDATE_EDUCATION:
        //     // Implement logic to update an existing education entry
        //     return state;
        default:
            return state;
    }
};

export default educationReducer;
