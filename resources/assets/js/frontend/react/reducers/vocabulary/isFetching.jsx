import * as types from '../../action_types/vocabulary';

const isFetching = (state = false, action) => {
    switch (action.type) {
        case types.REQUEST_ADD_NEW_WORD:
            state = true;
            break;

        case types.RECEIVE_ADD_NEW_WORD:
            state = false;
            break;

        default:
            break;
    }
    return state;
};

export default isFetching;