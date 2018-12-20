import { SIGNUP_USER_FAILED } from './actionTypes';
export function signupUserFailed(error) {
	return {
		type: SIGNUP_USER_FAILED,
		payload: error
	};
}
