import React, { Fragment } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import Event from './Event';
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

const events = Array.from({ length: 10 }, (v, i) => {
	return {
		id: i,
		title: `Board Game ${i}`,
		category: categories[Math.floor(Math.random() * categories.length)],
		description: 'Event Description',
		color: colors[Math.floor(Math.random() * colors.length)],
		creator: {
			name: 'Someone'
		}
	};
});

const renderEvents = () => {
	return events.map(event => (
		<Grid.Column key={event.id} width={4}>
			<Event event={event} />
		</Grid.Column>
	));
};

const EventList = () => {
	return (
		<Fragment>
			<Container>
				<Grid columns={4}>{renderEvents()}</Grid>
			</Container>
		</Fragment>
	);
};

export default EventList;
