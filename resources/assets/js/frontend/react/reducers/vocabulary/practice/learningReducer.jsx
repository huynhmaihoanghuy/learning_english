import * as types from '../../../action_types/vocabulary';

const learning = (state = [], action) => {
    switch (action.type) {
        case types.GET_WORDS_BY_DATE:
            state = action.payload;
            break;

        default:
            break;
    }
    return state;
};

export default learning;