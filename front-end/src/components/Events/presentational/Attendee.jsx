import React from 'react'
import PropTypes from 'prop-types'

import { Image, Comment } from 'semantic-ui-react'
const Attendee = ({ attendee }) => (
	<Comment>
		<Comment.Avatar src={attendee.avatar} circular />
		<Comment.Content>
			<Comment.Author as="a">{attendee.name}</Comment.Author>
			<Comment.Text>Joined {new Date().toLocaleDateString()}</Comment.Text>
		</Comment.Content>
	</Comment>
)

Attendee.propTypes = {
	attendee: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		avatar: PropTypes.string
	})
}
Attendee.defaultProps = {
	attendee: {}
}

export default Attendee
