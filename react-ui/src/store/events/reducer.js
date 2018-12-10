export const key = 'events';
export const FETCH_EVENTS = `${key}/FETCH_EVENTS`;
export const FETCH_EVENTS_COMPLETE = `${key}/FETCH_EVENTS_COMPLETE`;
export const SET_FILTER = `${key}/SET_FILTER`;

export const actionTypes = {
	FETCH_EVENTS,
	FETCH_EVENTS_COMPLETE,
	SET_FILTER
};

const categories = [
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

const eventsArr = Array.from({ length: 30 }, (v, i) => ({
	id: i,
	title: `Board Game ${i}`,
	category: categories[Math.floor(Math.random() * categories.length)],
	description: 'Event Description',
	color: colors[Math.floor(Math.random() * colors.length)],
	creator: {
		name: 'Someone'
	}
}));

const initialState = {
	list: eventsArr,
	categories,
	selectedCategory: ''
};

const getEventsByFilter = state => {
	const { selectedCategory } = state;
	return state.list.filter(event => event.cateogry === selectedCategory);
};

export const selectors = {
	getEventsByFilter
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FILTER:
			return { ...state, selectedCategory: action.filter };
		default:
			return state;
	}
};

export default reducer;
