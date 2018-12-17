import { SIGNUP_USER_SUCCESS } from './actionTypes';
export function signupUserSuccess(values) {
	return {
		type: SIGNUP_USER_SUCCESS,
		payload: values
	};
}
