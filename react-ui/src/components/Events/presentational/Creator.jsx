import React from 'react'
import { Item } from 'semantic-ui-react'
export const Creator = ({ creator }) => (
	<Item.Group>
		<Item>
			<Item.Image size="tiny" src={creator.avatar} circular />

			<Item.Content verticalAlign="middle">
				<Item.Header as="a">{creator.name}</Item.Header>
				<Item.Extra as="a">{new Date().toLocaleDateString()}</Item.Extra>
			</Item.Content>
		</Item>
	</Item.Group>
)
