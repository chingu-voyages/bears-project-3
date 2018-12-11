export const key = 'events';
export const SET_FILTER = `${key}/SET_FILTER`;

export const actionTypes = {
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

export const initialState = {
	list: eventsArr,
	categories,
	selectedCategory: ''
};

const getFilteredEvents = state => {
	console.log('State: ', state);
	const { selectedCategory, list } = state;
	return selectedCategory === ''
		? list
		: list.filter(event => event.category === selectedCategory);
};


const getCategories = state => state.categories;

export const selectors = {
	getFilteredEvents,
	getCategories
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FILTER:
			return { ...state, selectedCategory: action.filter };
		default:
			return state;
	}
};

export default reducer;
