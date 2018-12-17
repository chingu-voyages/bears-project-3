import { signupUserSuccess } from './signupUserSuccess';
import { signupUserFailed } from './signupUserFailed';

export { selectDay } from './selectDay';
export { setFilter } from './setFilter';

/**
 * Aysnc thunk action to signup user
 * @param {*} values 
 */
export const signupUser = values => async dispatch => {
	// Signup user
	try {
		dispatch(signupUserSuccess(values));
	} catch (error) {
		dispatch(signupUserFailed(error));
	}
};
