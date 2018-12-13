import { SET_FILTER } from '../actions/actionTypes';

// export const key = 'events';
// export const SET_FILTER = `${key}/SET_FILTER`;

const eventCategories = [
	'Roleplaying',
	'Humor',
	'Adventure',
	'Action',
	'Strategy',
	'Mind'
];

const colors = [
	'red',
	'orange',
	'yellow',
	'olive',
	'green',
	'teal',
	'blue',
	'violet',
	'purple',
	'pink',
	'brown',
	'grey',
	'black'
];

const generateEventsArray = Array.from({ length: 30 }, (v, i) => ({
	id: i,
	title: `Game Session ${i}`,
	category: eventCategories[Math.floor(Math.random() * eventCategories.length)],
	description: 'Event Description',
	color: colors[Math.floor(Math.random() * colors.length)],
	dateStarting: new Date(),
	timeStarting: new Date(),
	attendees: [],
	creator: {
		name: 'Someone Else'
	}
}));

export const initialState = {
	list: generateEventsArray,
	eventCategories,
	selectedCategory: ''
};

const getFilteredEvents = state => {
	const { selectedCategory, list } = state;
	return selectedCategory === ''
		? list
		: list.filter(event => event.category === selectedCategory);
};

const getCategories = state => state.eventCategories;

export const selectors = {
	getFilteredEvents,
	getCategories
};

export default function eventsReducer(state = initialState, action) {
	switch (action.type) {
		case SET_FILTER:
			return { ...state, selectedCategory: action.payload };
		default:
			return state;
	}
}
