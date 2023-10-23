
export const ADD_SKILL = 'ADD_SKILL';
export const REMOVE_SKILL = 'REMOVE_SKILL';

export const addSkill = (skill) => ({
    type: ADD_SKILL,
    payload: skill,
});

export const removeSkill = (index) => ({
    type: REMOVE_SKILL,
    payload: index,
});
