import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Segment, Grid, Button, Header, Image, List, Icon } from 'semantic-ui-react'
import { Creator } from './presentational/Creator'
import { Attendee } from './presentational/Attendee'

const EventDetail = ({ event, authenticated = false }) => (
	<Grid>
		<Grid.Column width={12}>
			<Header as="h1">
				<Link to="/find">
					<Icon name="arrow left" color="purple" />
				</Link>
				{event.title}
			</Header>
			<p>{event.description}</p>

			<br />
			<br />
			<div className="event-photos">
				<Header as="h2">Photos</Header>
				<Grid columns={5}>
					{event.photos &&
						event.photos.map((photo, index) => (
							<Grid.Column key={photo + index}>
								<Image src={photo} />
							</Grid.Column>
						))}
				</Grid>
			</div>
		</Grid.Column>
		<Grid.Column width={4}>
			<Segment>
				{authenticated ? (
					<div className="event-location">
						<Header as="h4">Location</Header>
						{event.location.address}
						<br />
						{event.location.city}
						<Button
							color="purple"
							content="Join Event"
							fluid
							style={{ marginTop: 15 }}
						/>
					</div>
				) : (
					<Button color="purple" content="Login to get Location" fluid />
				)}
			</Segment>
			<Segment>
				<Creator creator={event.creator} />

				<Header as="h5">Attendees</Header>
				<List divided>
					{event.attendees.map(attendee => (
						<Attendee key={attendee.id} attendee={attendee} />
					))}
				</List>
			</Segment>
		</Grid.Column>
	</Grid>
)

const mapStateToProps = (state, { match }) => ({
	event: state.events.list
		.filter(event => parseInt(match.params.eventId) === event.id)
		.reduce((acc, event) => event, {})
})

export default connect(mapStateToProps)(EventDetail)
