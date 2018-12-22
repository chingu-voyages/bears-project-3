import { combineReducers } from 'redux';

// Reducers
import eventsReducer from './eventsReducer';
import { reducer as formReducer } from 'redux-form';

export default (history) =>
  combineReducers({
    form: formReducer,
    events: eventsReducer,
  });
