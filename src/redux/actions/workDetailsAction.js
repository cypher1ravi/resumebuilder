// actions/workDetailsActions.js
export const ADD_WORK_EXPERIENCE = 'ADD_WORK_EXPERIENCE';
export const UPDATE_WORK_EXPERIENCE = 'UPDATE_WORK_EXPERIENCE';

export const addWorkExperience = (workExperience) => ({
    type: ADD_WORK_EXPERIENCE,
    payload: workExperience,
});

export const updateWorkExperience = (workExperience) => ({
    type: UPDATE_WORK_EXPERIENCE,
    payload: workExperience,
});
