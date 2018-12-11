import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
// Reducers
import eventsReducer from '../events/reducer';
import testReducer from './testReducer';

export default history =>
	combineReducers({
		events: eventsReducer,
		test: testReducer,
		router: connectRouter(history)
	});
