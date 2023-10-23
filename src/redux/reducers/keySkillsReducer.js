
import { ADD_SKILL, REMOVE_SKILL } from '../actions/keySkillsAction';

const initialState = {
    skillList: ['html', 'react'],
};

const keySkillsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SKILL:
            return {
                ...state,
                skillList: [...state.skillList, action.payload],
            };
        case REMOVE_SKILL:
            const updatedSkillList = [...state.skillList];
            updatedSkillList.splice(action.payload, 1);
            return {
                ...state,
                skillList: updatedSkillList,
            };
        default:
            return state;
    }
};

export default keySkillsReducer;
