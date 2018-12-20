import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image, Button } from 'semantic-ui-react'

const cardStyles = {
	wrapper: {
		border: 'none',
		boxShadow: 'none',
		padding: 0
	},
	content: {
		padding: 0
	}
}

const Creator = ({ creator }) => (
	<Card basic style={cardStyles.wrapper}>
		<Card.Content style={cardStyles.content}>
			<Image circular floated="left" size="mini" src={creator.avatar} />
			<Card.Header>{creator.name}</Card.Header>
			<Card.Meta>{new Date().toLocaleDateString()}</Card.Meta>
			<Card.Description>{''}</Card.Description>
		</Card.Content>
		<Card.Content extra>
			<Button color="purple" onClick={() => null}>
				Send Message
			</Button>

			<Button color="pink" onClick={() => null}>
				Follow
			</Button>
		</Card.Content>
	</Card>
)

Creator.propTypes = {
	creator: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		avatar: PropTypes.string
	})
}
Creator.defaultProps = {
	creator: {}
}

export default Creator
