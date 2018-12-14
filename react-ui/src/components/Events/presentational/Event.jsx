import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image, Label, Header } from 'semantic-ui-react';

/**
 * Render Extra information below card, Event Creator, and attendee count
 * @param {*} event 
 */
const extra = event => {
	const randomAttendeeCount = () => Math.floor(Math.random() * 15);
	return (
		<span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
			<a href={`localhost:5000/profile:${event.creator.id}`}>
				<Image style={{ margin: '0 auto' }} src={event.creator.avatar} avatar />{' '}
				<span>{event.creator.name}</span>
			</a>
			<a href={`localhost:5000/profile:${event.creator.id}`}>
				<Icon name="user" />
				{randomAttendeeCount()} <span>Attendees</span>
			</a>
		</span>
	);
};
const Event = ({ event }) => (
	<Card fluid color={event.color}>
		<Image src={event.mainImage} />
		<Card.Content>
			<Card.Header>{event.title}</Card.Header>
			<Card.Meta>
				<Label>{event.category}</Label>
			</Card.Meta>
			<Card.Description>{event.description}</Card.Description>
		</Card.Content>
		<Card.Content extra>{extra(event)}</Card.Content>
	</Card>
);

Event.propTypes = {
	event: PropTypes.instanceOf(Object).isRequired
};

export default Event;
