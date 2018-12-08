import React, { Fragment } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import Event from './Event';
const events = [
	{ id: 1, title: 'Test Event', description: 'Test Description', color: 'red' },
	{ id: 2, title: 'Test Event', description: 'Test Description', color: 'violet' },
	{ id: 3, title: 'Test Event', description: 'Test Description', color: 'brown' },
	{ id: 4, title: 'Test Event', description: 'Test Description', color: 'red' },
	{ id: 5, title: 'Test Event', description: 'Test Description', color: 'red' },
	{ id: 6, title: 'Test Event', description: 'Test Description', color: 'grey' },
	{ id: 7, title: 'Test Event', description: 'Test Description', color: 'red' }
];

const renderEvents = () => {
	return events.map(event => (
		<Grid.Column width={4}>
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
