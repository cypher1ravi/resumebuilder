
export const ADD_EDUCATION = 'ADD_EDUCATION';
export const DELETE_EDUCATION = 'DELETE_EDUCATION';

export const addEducation = (education) => ({
    type: ADD_EDUCATION,
    payload: education,
});

export const deleteEducation = (education) => ({
    type: DELETE_EDUCATION,
    payload: education,
});
