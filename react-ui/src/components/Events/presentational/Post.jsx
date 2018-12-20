import React from 'react'
import PropTypes from 'prop-types'
import { Comment } from 'semantic-ui-react'

const Post = ({ author, post }) => {
	return (
		<Comment>
			<Comment.Avatar src={author.avatar} />
			<Comment.Content>
				<Comment.Author as="a">{author.name}</Comment.Author>
				<Comment.Metadata>
					<div>{post.posted.toLocaleDateString()}</div>
				</Comment.Metadata>
				<Comment.Text>{post.body}</Comment.Text>
			</Comment.Content>
		</Comment>
	)
}

Post.propTypes = {
	attendee: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		avatar: PropTypes.string
	}),
	post: PropTypes.shape({
		body: PropTypes.string,
		posted: PropTypes.instanceOf(Date)
	})
}
Post.defaultProps = {
	attendee: {},
	post: {}
}

export default Post
