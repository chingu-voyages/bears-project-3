import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image } from 'semantic-ui-react';
const extra = (
	<a>
		<Icon name="user" />
		16 Friends
	</a>
);
const Event = ({ event }) => {
	return (
		<Card
			image="https://react.semantic-ui.com/images/avatar/large/matthew.png"
			header={event.title}
			description={event.description}
			extra={extra}
		/>
	);
};

Event.propTypes = {
	event: PropTypes.instanceOf(Object)
};

export default Event;
