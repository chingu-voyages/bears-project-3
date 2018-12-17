import { SELECT_DAY } from './actionTypes';
export function selectDay(day) {
	return {
		type: SELECT_DAY,
		payload: day
	};
}
