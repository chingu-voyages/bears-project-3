import { SET_FILTER, SELECT_DAY } from '../actions/actionTypes';

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

const generateFutureDate = date => date.setDate(date.getDate() + Math.floor(Math.random() * 14));
const generateEventsArray = Array.from({ length: 30 }, (v, i) => ({
	id: i,
	title: `Game Session ${i}`,
	category: eventCategories[Math.floor(Math.random() * eventCategories.length)],
	description: 'Event Description',
	color: colors[Math.floor(Math.random() * colors.length)],
	dateStarting: generateFutureDate(new Date()),
	timeStarting: new Date(),
	attendees: [],
	creator: {
		name: 'Someone Else'
	}
}));

export const initialState = {
	list: generateEventsArray,
	eventCategories,
	selectedCategory: '',
	selectedDay: null
};

const getFilteredEvents = state => {
	const { selectedCategory, list, selectedDay } = state;
	let resultList = list.map(event => event);

	if (selectedDay !== null) {
		resultList = resultList.filter(event => {
			return (
				new Date(event.dateStarting).getDate() === selectedDay.getDate() &&
				new Date(event.dateStarting).getMonth() === selectedDay.getMonth() &&
				new Date(event.dateStarting).getYear() === selectedDay.getYear()
			);
		});
	}

	return selectedCategory === ''
		? resultList
		: resultList.filter(event => event.category === selectedCategory);
};

const getCategories = state => state.eventCategories;

export const selectors = {
	getFilteredEvents,
	getCategories
};

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
