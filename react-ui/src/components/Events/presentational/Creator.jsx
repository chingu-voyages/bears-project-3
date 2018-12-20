import React from 'react'
import PropTypes from 'prop-types'
import { Item, Button } from 'semantic-ui-react'

const Creator = ({ creator }) => (
	<Item.Group>
		<Item>
			<Item.Image size="tiny" src={creator.avatar} />

			<Item.Content verticalAlign="middle">
				<Item.Header as="a">{creator.name}</Item.Header>
				<Item.Extra as="a">{new Date().toLocaleDateString()}</Item.Extra>
				<Item.Meta>
					<Button onClick={() => null}>Send Message</Button>
				</Item.Meta>
			</Item.Content>
		</Item>
	</Item.Group>
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
