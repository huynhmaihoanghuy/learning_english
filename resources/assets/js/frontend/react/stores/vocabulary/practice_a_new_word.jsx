import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import practiceANewWord from '../../reducers/vocabulary/practice/aNewWord';

const reducers = combineReducers({
    practiceANewWord
});

const practiceANewWordStore = createStore(reducers, {}, applyMiddleware(logger, thunk));
export default practiceANewWordStore;