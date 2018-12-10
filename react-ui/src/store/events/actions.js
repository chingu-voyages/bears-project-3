import { actionTypes as types } from './index';

export const fetchEvents = () => ({
	type: types.FETCH_EVENTS
});

export const fetchEventsComplete = () => ({
	type: types.FETCH_EVENTS_COMPLETE
});

export const setFilter = filter => ({
	type: types.SET_FILTER,
	filter
});

export const actions = {
	fetchEvents,
	fetchEventsComplete,
	setFilter
};
