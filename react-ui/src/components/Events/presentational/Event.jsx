import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';

const extra = event => {
	const randomAttendeeCount = () => Math.floor(Math.random() * 15);
	return (
		<span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
			<a href={`localhost:5000/profile:${event.creator.id}`}>
				<Image
					style={{ margin: '0 auto' }}
					src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
					avatar
				/>{' '}
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
	<Card
		fluid
		meta={event.category}
		image="https://react.semantic-ui.com/images/avatar/large/matthew.png"
		header={event.title}
		color={event.color}
		description={event.description}
		extra={extra(event)}
	/>
);

Event.propTypes = {
	event: PropTypes.instanceOf(Object).isRequired
};

export default Event;
