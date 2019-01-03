import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  Segment,
  Grid,
  Button,
  Header,
  Icon,
  Label,
  Card,
  Placeholder,
  Dimmer,
  Loader,
} from 'semantic-ui-react'
import { Query } from 'react-apollo'
import { GET_EVENTS } from '../../utils/queries'
// import Owner from './presentational/Owner'
// import Attendees from './presentational/Attendees'
import Event from './presentational/Event'
// import Posts from './presentational/Posts'
// import EventPhotos from './presentational/EventPhotos'



const EventDetail = ({
  authenticated = false,
  history,
  location,
  loading = false,
  match: { params },
  ...rest
}) => {
  console.log(params, rest, location)
  return (
    <Query
      query={GET_EVENTS}
    >
      {({ loading, error, data: { events } }) => {
        console.log('Get Event Detail: ', loading, error, events)
        if (loading) return <Loader active />
        if (error) return null
        const event = events.filter(ev => ev.id === params.eventId).reduce((acc, item) => item, {})
        return (
          <Segment basic padded>
            <Grid container>
              <Grid.Column width={12}>
                <Header as="h1">
                  <Link to="/events">
                    <Icon name="arrow left" color="purple" />
                  </Link>
                  {event.name} <Label content={event.category} />
                </Header>
                <p>{event.description}</p>
                {/* <EventPhotos event={event} /> */}
                <div className="similar-events" style={{ marginTop: 40 }}>
                  <Header as="h2">Similar Events</Header>
                  {loading}
                  <Card.Group doubling itemsPerRow={4} stackable>
                    <Query
                      query={GET_EVENTS}
                    >
                      {({ loading, error, data: { events } }) => {

                        if (loading) {
                          return (
                            <Dimmer inverted active>
                              <Loader active size="small" />
                            </Dimmer>
                          )
                        }

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
                  {/* <Owner owner={event.owner} />
                  <Attendees event={event} />
                  <Posts event={event} /> */}
                </Segment>
              </Grid.Column>
            </Grid>
          </Segment>
        )
      }}
    </Query>
  )
}


export default EventDetail
