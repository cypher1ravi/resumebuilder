import { createStore, combineReducers } from 'redux';
import personalInfoReducer from './reducers/personalInfoReducer';
import educationReducer from './reducers/educationReducer';
import workDetailsReducer from './reducers/workDetailsReducer';
import keySkillsReducer from './reducers/keySkillsReducer';

const rootReducer = combineReducers({
    personalInformation: personalInfoReducer,
    education: educationReducer,
    workDetails: workDetailsReducer,
    keySkills: keySkillsReducer,
});

const store = createStore(rootReducer);

export default store;
