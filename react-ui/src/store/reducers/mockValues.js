/**
 * Mock functions and objects to be replaced with api generated content
 */
/**
 * Event categories
 */
export const eventCategories = ['Roleplaying', 'Humor', 'Adventure', 'Action', 'Strategy', 'Mind']

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
]

/**
 * Creates a date within the next 14 days from today
 * @param {*} date
 */
export const generateFutureDate = date =>
	date.setDate(date.getDate() + Math.floor(Math.random() * 14))

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
	mainImage: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
	creator: {
		id: 1,
		name: 'Someone Else',
		avatar: 'https://react.semantic-ui.com/images/avatar/large/matthew.png'
	},
	attendees: [
		{
			id: 1,
			name: 'Attendee 1',
			avatar: 'https://react.semantic-ui.com/images/avatar/large/matthew.png'
		},
		{
			id: 2,
			name: 'Attendee 2',
			avatar: 'https://react.semantic-ui.com/images/avatar/large/matthew.png'
		},
		{
			id: 3,
			name: 'Attendee 3',
			avatar: 'https://react.semantic-ui.com/images/avatar/large/matthew.png'
		},
		{
			id: 4,
			name: 'Attendee 4',
			avatar: 'https://react.semantic-ui.com/images/avatar/large/matthew.png'
		}
	],
	posts: [
		{ id: 1, body: 'Some notes on the event', by: 1, posted: new Date() },
		{ id: 2, body: 'Some question on the event', by: 2, posted: new Date() },
		{ id: 3, body: 'Some comment on the event', by: 3, posted: new Date() },
		{ id: 4, body: 'Some issue with the event', by: 4, posted: new Date() }
	]
}))
