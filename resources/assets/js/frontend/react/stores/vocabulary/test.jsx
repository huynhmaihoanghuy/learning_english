import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import testReducer from '../../reducers/vocabulary/testReducer';

const reducers = combineReducers({
    testReducer
});

const testStore = createStore(reducers, {}, applyMiddleware(logger, thunk));
export default testStore;