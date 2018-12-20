import { SET_FILTER, SELECT_DAY } from '../actions/actionTypes';
import { generatedEventsArray, eventCategories } from './mockValues';

/**
 * Initial state for events
 * TODO: Make Immutable
 */
export const initialState = {
	list: generatedEventsArray,
	eventCategories,
	selectedCategory: '',
	selectedDay: null
};

/**
 * Return events filtered by category/selectedDay
 * @param {*} state 
 */
const getFilteredEvents = state => {
	const { selectedCategory, list, selectedDay } = state;
	let resultList = list.map(event => event);

	if (selectedDay !== null) {
		const dateSelected = new Date(selectedDay);
		resultList = resultList.filter(event => {
			return (
				new Date(event.dateStarting).getDate() === dateSelected.getDate() &&
				new Date(event.dateStarting).getMonth() === dateSelected.getMonth() &&
				new Date(event.dateStarting).getYear() === dateSelected.getYear()
			);
		});
	}

	return selectedCategory === ''
		? resultList
		: resultList.filter(event => event.category === selectedCategory);
};

/**
 * Return all categories in state
 * @param {*} state 
 */
const getCategories = state => state.eventCategories;

/**
 * Selectors
 */
export const selectors = {
	getFilteredEvents,
	getCategories
};

/**
 * Events reducer (default export)
 * @param {*} state 
 * @param {*} action 
 */
export default function eventsReducer(state = initialState, action) {
	switch (action.type) {
		case SELECT_DAY:
			return { ...state, selectedDay: action.payload };
		case SET_FILTER:
			return { ...state, selectedCategory: action.payload };
		default:
			return state;
	}
}
