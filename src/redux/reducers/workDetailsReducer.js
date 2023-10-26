// reducers/workDetailsReducer.js
import { ADD_WORK_EXPERIENCE, DELETE_WORK_EXPERIENCE, } from '../actions/workDetailsAction';

const initialState = {
    workList: []
};

const workDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORK_EXPERIENCE:
            return {
                ...state,
                workList: [...state.workList, action.payload],
            };
        case DELETE_WORK_EXPERIENCE:
            const updatedExperiences = [...state.workList]
            updatedExperiences.splice(action.payload, 1);
            return {
                ...state,
                workList: updatedExperiences
            }
        default:
            return state;
    }
};

export default workDetailsReducer;
