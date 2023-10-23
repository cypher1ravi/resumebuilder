// reducers/workDetailsReducer.js
import { ADD_WORK_EXPERIENCE, } from '../actions/workDetailsAction';

const initialState = {
    workList: [{
        company: 'xyz',
        position: 'web-dev',
        startDate: '00/00/0000',
        endDate: '00/00/0000'
    }]
};

const workDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORK_EXPERIENCE:
            return {
                ...state,
                workList: [...state.workList, action.payload],
            };

        default:
            return state;
    }
};

export default workDetailsReducer;
