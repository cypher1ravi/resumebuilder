// actions/workDetailsActions.js
export const ADD_WORK_EXPERIENCE = 'ADD_WORK_EXPERIENCE';
export const DELETE_WORK_EXPERIENCE = 'DELETE_WORK_EXPERIENCE';

export const addWorkExperience = (workExperience) => ({
    type: ADD_WORK_EXPERIENCE,
    payload: workExperience,
});

export const deleteWorkExperience = (workExperience) => ({
    type: DELETE_WORK_EXPERIENCE,
    payload: workExperience,
});
