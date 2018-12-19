import React from 'react'
import { Image, List } from 'semantic-ui-react'
export const Attendee = ({ attendee }) => (
	<List.Item>
		<Image circular avatar src={attendee.avatar} />
		<List.Content>
			<List.Header as="a">{attendee.name}</List.Header>
			<List.Description>Joined {new Date().toLocaleDateString()}</List.Description>
		</List.Content>
	</List.Item>
)
