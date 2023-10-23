import { UPDATE_PERSONAL_INFO } from '../actions/personalInfoActions'
const initialState = {
    firstName: 'jone',
    lastName: 'Doe',
    title: 'Web dev',
    email: 'jonedoe@gmail.com',
    mobileNumber: '123456',
    address: 'london',
    objective: 'nothing',
};

const personalInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PERSONAL_INFO:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default personalInfoReducer;
