import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
// Reducers
import testReducer from './testReducer';

export default history =>
	combineReducers({
		test: testReducer,
		router: connectRouter(history)
	});
