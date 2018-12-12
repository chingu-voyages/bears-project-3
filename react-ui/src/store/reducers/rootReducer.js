import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
// Reducers
import eventsReducer from './eventsReducer';

export default history =>
	combineReducers({
		events: eventsReducer,
		router: connectRouter(history)
	});
