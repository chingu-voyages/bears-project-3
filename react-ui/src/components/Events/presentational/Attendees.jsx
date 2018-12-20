import React from 'react'
import PropTypes from 'prop-types'
import { Comment, Header } from 'semantic-ui-react'
import Attendee from './Attendee'

const Attendees = ({ event }) => {
	return (
		<Comment.Group>
			<Header dividing as="h4">
				Attendees
			</Header>
			{event.attendees &&
				event.attendees.map(attendee => (
					<Attendee key={attendee.id} attendee={attendee} />
				))}
		</Comment.Group>
	)
}

Attendees.propTypes = {
	event: PropTypes.instanceOf(Object)
}

Attendees.defaultProps = {
	event: {}
}

export default Attendees
