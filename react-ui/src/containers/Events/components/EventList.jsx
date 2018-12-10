import React, { Component } from 'react';
import { Grid, Container, Header, Segment, Menu } from 'semantic-ui-react';
import Event from './Event';
import EventFilter from './EventFilter';

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

const events = Array.from({ length: 30 }, (v, i) => ({
	id: i,
	title: `Board Game ${i}`,
	category: categories[Math.floor(Math.random() * categories.length)],
	description: 'Event Description',
	color: colors[Math.floor(Math.random() * colors.length)],
	creator: {
		name: 'Someone'
	}
}));

class EventList extends Component {
	state = {
		filter: 'Humor'
	};

	handleChange = (e, { value }) => {
		this.setState({ filter: value });
	};

	renderEvents = (events, filter) =>
		events.filter(event => event.category === filter).map(event => (
			<Grid.Column key={event.id} width={4}>
				<Event event={event} />
			</Grid.Column>
		));

	render() {
		return (
			<Segment basic padded>
				<Container>
					<div
						className="event-list-header"
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginBottom: '1 em'
						}}
					>
						<Menu borderless fluid style={{ border: 'none', boxShadow: 'none' }}>
							<Menu.Item>
								<Header as="h2">Events for this week</Header>
							</Menu.Item>
							<Menu.Item position="right">
								<EventFilter
									handleChange={this.handleChange}
									categories={categories}
								/>
							</Menu.Item>
						</Menu>
					</div>
					<Grid columns={4}>{this.renderEvents(events, this.state.filter)}</Grid>
				</Container>
			</Segment>
		);
	}
}

export default EventList;
