import { SELECT_CARD } from '../actions/selectCardAction'
const initialState = {
    cardIndex: ''
}
const selectCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CARD:
            return { ...state, cardIndex: action.payload };

        default:
            return state;
    }
};
export default selectCardReducer;