import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
// Reducers
import testReducer from './testReducer';

<<<<<<< Updated upstream
export default history =>
	combineReducers({
		test: testReducer,
		router: connectRouter(history)
	});
=======
export default combineReducers({
  test: testReducer,
});
>>>>>>> Stashed changes
