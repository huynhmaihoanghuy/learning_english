import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import addedWordReducer from '../../reducers/vocabulary/addedWordReducer';
import addNewWordReducer from '../../reducers/vocabulary/addNewWordReducer';
import isFetching from '../../reducers/vocabulary/isFetching';

const reducers = combineReducers({
    addedWordReducer,
    addNewWordReducer,
    isFetching
});

const addWordStore = createStore(reducers, {}, applyMiddleware(logger, thunk));
export default addWordStore;