import { SET_FILTER } from './actionTypes';
export function setFilter(filter) {
	return {
		type: SET_FILTER,
		payload: filter
	};
}
