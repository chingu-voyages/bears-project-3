import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	Segment,
	Grid,
	Button,
	Header,
	Image,
	List,
	Icon,
	Label,
	Card,
	Placeholder,
	Comment
} from 'semantic-ui-react'
import Creator from './presentational/Creator'
import Attendees from './presentational/Attendees'
import Event from './presentational/Event'
import Posts from './presentational/Posts'
import EventPhotos from './presentational/EventPhotos'

const EventDetail = ({ event, events, authenticated = false, history, loading = false }) => (
	<Segment basic padded>
		<Grid container>
			<Grid.Column width={12}>
				<Header as="h1">
					<Link to="/find">
						<Icon name="arrow left" color="purple" />
					</Link>
					{event.title} <Label content={event.category} />
				</Header>
				<p>{event.description}</p>
				<EventPhotos event={event} />
				<div className="similar-events" style={{ marginTop: 40 }}>
					<Header as="h2">Similar Events</Header>
					{loading}
					<Card.Group doubling itemsPerRow={4} stackable>
						{events &&
							events
								.filter(ev => ev.category === event.category && ev.id !== event.id)
								.map(evv =>
									loading ? (
										<Card fluid key={evv.id}>
											<Placeholder>
												<Placeholder.Image square />
											</Placeholder>
											<Card.Content>
												<Placeholder>
													<Placeholder.Header>
														<Placeholder.Line length="very short" />
														<Placeholder.Line length="medium" />
													</Placeholder.Header>
													<Placeholder.Paragraph>
														<Placeholder.Line length="short" />
													</Placeholder.Paragraph>
												</Placeholder>
											</Card.Content>
										</Card>
									) : (
										<Event event={evv} history={history} />
									)
								)}
					</Card.Group>
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
						<Button color="purple" content="Sign in to get Location" fluid />
					)}
				</Segment>
				<Segment>
					<Creator creator={event.creator} />
					<Attendees event={event} />
					<Posts event={event} />
				</Segment>
			</Grid.Column>
		</Grid>
	</Segment>
)

const mapStateToProps = (state, { match }) => ({
	loading: state.events.loading,
	events: state.events.list,
	event: state.events.list
		.filter(event => parseInt(match.params.eventId) === event.id)
		.reduce((acc, event) => event, {})
})

export default connect(mapStateToProps)(EventDetail)