import React from 'react'
import PropTypes from 'prop-types'
import { Comment, Header } from 'semantic-ui-react'
import Post from './Post'
const Posts = ({ event }) => {
	return (
		<Comment.Group>
			<Header dividing as="h4">
				Posts
			</Header>
			{event.posts &&
				event.posts.map(post => {
					const attendee = event.attendees.find(attendee => attendee.id === post.by)
					return <Post post={post} author={attendee} />
				})}
		</Comment.Group>
	)
}

Posts.propTypes = {
	event: PropTypes.instanceOf(Object)
}

Posts.defaultProps = {
	event: {}
}

export default Posts
