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
	Dimmer,
	Loader,
	Comment
} from 'semantic-ui-react'
import { Query } from 'react-apollo'
import Owner from './presentational/Owner'
import Attendees from './presentational/Attendees'
import Event from './presentational/Event'
import Posts from './presentational/Posts'
import EventPhotos from './presentational/EventPhotos'

import { getEvent, allEvents } from '../../apollo/events/queries'

const EventDetail = ({
	authenticated = false,
	history,
	loading = false,
	match: { params },
	...rest
}) => {
	console.log(params, rest)
	return (
		<Query
			query={getEvent}
			variables={{
				where: {
					id: params.eventId
				}
			}}
		>
			{({ loading, error, data: { event } }) => {
				console.log('Get Event Detail: ', loading, error, event)

				if (loading) return null
				if (error) return null
				return (
					<Segment basic padded>
						<Grid container>
							<Grid.Column width={12}>
								<Header as="h1">
									<Link to="/find">
										<Icon name="arrow left" color="purple" />
									</Link>
									{event.name} <Label content={event.category} />
								</Header>
								<p>{event.description}</p>
								<EventPhotos event={event} />
								<div className="similar-events" style={{ marginTop: 40 }}>
									<Header as="h2">Similar Events</Header>
									{loading}
									<Card.Group doubling itemsPerRow={4} stackable>
										<Query
											query={allEvents}
											variables={{
												where: {
													AND: {
														id_not: event.id,
														category_in: event.category
													}
												}
											}}
										>
											{({ loading, error, data: { events } }) => {
												{
													if (loading)
														return (
															<Dimmer inverted active>
																<Loader active size="small" />
															</Dimmer>
														)
													if (error) return null
													return events.map(event =>
														loading ? (
															<Card fluid key={event.id}>
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
															<Event
																event={event}
																history={history}
															/>
														)
													)
												}
											}}
										</Query>
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
										<Button
											color="purple"
											content="Sign in to get Location"
											fluid
										/>
									)}
								</Segment>
								<Segment>
									<Owner owner={event.owner} />
									<Attendees event={event} />
									<Posts event={event} />
								</Segment>
							</Grid.Column>
						</Grid>
					</Segment>
				)
			}}
		</Query>
	)
}

const mapStateToProps = (state, { match }) => ({
	loading: state.events.loading,
	events: state.events.list,
	event: state.events.list
		.filter(event => parseInt(match.params.eventId) === event.id)
		.reduce((acc, event) => event, {})
})

export default connect(mapStateToProps)(EventDetail)
