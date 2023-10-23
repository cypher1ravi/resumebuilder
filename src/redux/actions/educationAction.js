
export const ADD_EDUCATION = 'ADD_EDUCATION';
export const UPDATE_EDUCATION = 'UPDATE_EDUCATION';

export const addEducation = (education) => ({
    type: ADD_EDUCATION,
    payload: education,
});

export const updateEducation = (education) => ({
    type: UPDATE_EDUCATION,
    payload: education,
});
