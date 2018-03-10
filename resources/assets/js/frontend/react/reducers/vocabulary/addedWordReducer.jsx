import * as types from '../../action_types/vocabulary';
const initialAddedWord = [];

const addedWordReducer = (state = initialAddedWord, action) => {
    switch (action.type) {
        case types.GET_ADDED_WORD_LIST:
            state = action.payload;
            break;

        case types.ADD_NEW_WORD:
            state = [
                ...state,
                action.payload
            ];
            break;

        case types.REMOVE_WORD:
            state = state.filter(value => {
                return value.id != action.payload
            });
            break;
    }
    return state;
};

export default addedWordReducer;