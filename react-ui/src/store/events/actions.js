import { actionTypes as types } from './index';

export const setFilter = filter => ({
	type: types.SET_FILTER,
	filter
});

export const actions = {
	setFilter
};
