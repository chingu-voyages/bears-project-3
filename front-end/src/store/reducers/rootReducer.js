import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
// Reducers
import eventsReducer from './eventsReducer';
import { reducer as formReducer } from 'redux-form';

export default history =>
	combineReducers({
		form: formReducer,
		events: eventsReducer,
		router: connectRouter(history)
	});
