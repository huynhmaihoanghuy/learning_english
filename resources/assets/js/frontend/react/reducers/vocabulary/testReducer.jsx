import * as types from '../../action_types/vocabulary';

const testReducer = (state = {}, action) => {
    switch (action.type) {
        case types.ADD_WORD_BY_TEST:
            state = action.payload;
            break;

        case types.TEST_WORD:
            console.log('TEST_WORD',action.payload);
            break;

        default:
            break;
    }
    return state;
};

export default testReducer;