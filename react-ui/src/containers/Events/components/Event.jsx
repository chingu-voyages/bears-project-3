import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
const extra = event => {
	const randomAttendeeCount = () => Math.floor(Math.random() * 15);
	return (
		<span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
			<a>
				<Image
					style={{ marginRight: '10px' }}
					src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
					avatar
				/>
				{event.creator.name}
			</a>
			<a>
				<Icon name="user" />
				{randomAttendeeCount()} Attendees
			</a>
		</span>
	);
};

const Event = ({ event }) => {
	return (
		<Card
			meta={event.category}
			image="https://react.semantic-ui.com/images/avatar/large/matthew.png"
			header={event.title}
			color={event.color}
			description={event.description}
			extra={extra(event)}
		/>
	);
};

Event.propTypes = {
	event: PropTypes.instanceOf(Object)
};

export default Event;
