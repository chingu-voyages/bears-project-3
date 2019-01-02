import React from 'react'
import PropTypes from 'prop-types'
import { Query } from "react-apollo";
import { Segment, Card, Image, Icon, Container, Loader, Dimmer } from "semantic-ui-react";
import { GET_EVENTS } from '../../utils/queries'

const renderEvents = events => (
  events.map(event => {
    const { id, primaryImage, name, description, category } = event
    return <Card key={id}>
      {primaryImage && <Image src='/images/avatar/large/matthew.png' />}
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='date'>{category}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
      </a>
      </Card.Content>
    </Card>
  })
)

const Events = props => {
  return (
    <Container>
      <Segment basic style={{ padding: 0, height: '100%' }}>
        <Query query={GET_EVENTS}>
          {({ loading, error, data: { events } }) => {
            if (error) return <p>Error in events</p>
            return <Card.Group itemsPerRow={3} stackable>
              {loading && <Loader active />}
              {events && renderEvents(events)}
            </Card.Group>
          }}
        </Query>
      </Segment>
    </Container>
  )
}

export default Events
