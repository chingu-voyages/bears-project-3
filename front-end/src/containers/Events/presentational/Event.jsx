import React from 'react'
import PropTypes from 'prop-types'
import { Card, Icon, Image, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

/**
 * Render Extra information below card, Event Creator, and attendee count
 * @param {*} event
 */
const extra = event => {
	console.log('Extra for event: ', event)

	const { avatarURI = '', name } = event.owner
	return (
		<span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
			{avatarURI && <Image src={avatarURI} avatar />} <span>{name}</span>
			<Icon name="user" />
			{event.members.length} <span>Attendees</span>
		</span>
	)
}
const Event = ({ event, history }) => (
	<Card fluid color={event.color}>
		<Image src={event.mainImage} onClick={() => history.push(`/event/${event.id}`)} />
		<Card.Content>
			<Card.Header onClick={() => history.push(`/event/${event.id}`)}>
				{event.name}
			</Card.Header>
			<Card.Meta>
				<Label>{event.category}</Label>
			</Card.Meta>
			<Card.Description>{event.description}</Card.Description>
		</Card.Content>
		{/* <Card.Content extra>{extra(event)}</Card.Content> */}
	</Card>
)

Event.propTypes = {
	event: PropTypes.instanceOf(Object).isRequired
}

export default Event