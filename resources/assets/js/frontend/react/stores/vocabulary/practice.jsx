import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import learningReducer from '../../reducers/vocabulary/practice/learningReducer';

const reducers = combineReducers({
    learningReducer
});

const practiceStore = createStore(reducers, {}, applyMiddleware(logger, thunk));
export default practiceStore;