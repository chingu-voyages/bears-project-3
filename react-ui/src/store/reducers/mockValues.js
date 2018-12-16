/**
 * Mock functions and objects to be replaced with api generated content
 */
/**
 * Event categories
 */
export const eventCategories = [
	'Roleplaying',
	'Humor',
	'Adventure',
	'Action',
	'Strategy',
	'Mind'
];

/**
 * List of colors
 */
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

/**
 * Creates a date within the next 14 days from today
 * @param {*} date 
 */
export const generateFutureDate = date =>
	date.setDate(date.getDate() + Math.floor(Math.random() * 14));

/**
 * Generates a list of events
 */
export const generatedEventsArray = Array.from({ length: 30 }, (v, i) => ({
	id: i,
	title: `Game Session ${i}`,
	category: eventCategories[Math.floor(Math.random() * eventCategories.length)],
	description: 'Event Description',
	details: [],
	photos: [
		'https://react.semantic-ui.com/images/avatar/large/matthew.png',
		'https://react.semantic-ui.com/images/avatar/large/matthew.png'
	],
	location: {
		address: '123 Somekindofway',
		city: 'Los Angeles',
		state: 'CA',
		country: 'USA'
	},
	color: colors[Math.floor(Math.random() * colors.length)],
	dateStarting: generateFutureDate(new Date()),
	timeStarting: new Date(),
	timeEnding: new Date(),
	inviteCode: 'EVENTCODE123',
	isPublic: true,
	attendees: [],
	mainImage: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
	creator: {
		name: 'Someone Else',
		avatar: 'https://react.semantic-ui.com/images/avatar/large/matthew.png'
	}
}));
