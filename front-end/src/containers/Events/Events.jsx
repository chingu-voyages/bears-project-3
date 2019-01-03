import React from 'react'
import { Query } from "react-apollo";
import { Route } from "react-router-dom";
import { Segment, Card, Image, Icon, Container, Loader, Header, Button, Message, Grid } from "semantic-ui-react";
import { GET_EVENTS } from '../../utils/queries'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import EventMenu from './presentational/EventMenu'

/**
		 * Modifies calendar styling
		 */
const modifiersStyles = {
  birthday: {
    color: 'white',
    backgroundColor: '#ffc107'
  },
  thursdays: {
    color: '#ffc107',
    backgroundColor: '#fffdee'
  },
  outside: {
    backgroundColor: 'white'
  },
  today: {
    //color: 'rgb(83, 89, 154)'
  },

  month: {
    width: '100%'
  },
  day: {
    color: '#fff'
  },
  // Style selected day
  selected: {
    fontWeight: 900,
    backgroundColor: 'rgb(83, 89, 154)',
    color: '#fff'
  },
  todayButton: {
    backgroundColor: 'rgb(83, 89, 154)',
    color: '#fff'
  }
}


const EmptyEvents = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name="ticket" />
      No Events...
		</Header>
    <Button primary>Search Events...</Button>
  </Segment>
)

const renderEvents = (events, withImage = false) => (
  events.map(event => {
    const { id, primaryImage, name, description, category } = event
    return <Card fluid key={id}>
      {primaryImage && withImage && <Image src={primaryImage} />}
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
  console.log(props);


  const handleDayClick = (day, { selected }) => {
    console.log(day.toISOString())


  }

  const clearDaySelection = () => {

  }


  return (
    <Container>
      <EventMenu {...props} />
      <Route exact path="/events/calendar" render={(props) => (
        <Segment basic>
          <Query query={GET_EVENTS}>
            {({ loading, error, data }) => {
              const { events } = data
              console.log(props);
              return (
                <Grid container stackable reversed="mobile">
                  <Grid.Column width={12}>
                    <Card.Group>
                      {events && renderEvents(events)}
                    </Card.Group>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header as="h3">Calendar</Header>
                    <DayPicker
                      selectedDays={new Date()}
                      showOutsideDays
                      fromMonth={new Date()}
                      onDayClick={handleDayClick}
                      modifiersStyles={modifiersStyles}
                    />
                    <Segment textAlign="center" basic>
                      <Button.Group color="purple">
                        <Button onClick={() => handleDayClick(new Date(), {})}>
                          Today's Events
								</Button>
                        <Button onClick={clearDaySelection}>
                          <Icon name="delete" /> Clear
								</Button>
                      </Button.Group>
                    </Segment>
                  </Grid.Column>
                </Grid>
              )
            }}
          </Query>
        </Segment>
      )} />
      <Route exact path="/events" render={(props) => (
        <Segment basic style={{ padding: 0, height: '100%' }}>
          <Query query={GET_EVENTS}>
            {({ loading, error, data }) => {
              console.log(props);

              if (error) return (<Message negative>
                <Message.Header>We're sorry we can't get messages</Message.Header>
                <p>{error.message}</p>
              </Message>)
              const { events } = data
              if (!loading && !events) return <EmptyEvents />
              return <Card.Group itemsPerRow={3} stackable>
                {loading && <Loader active />}
                {events && renderEvents(events, true)}
              </Card.Group>
            }}
          </Query>
        </Segment>
      )} />
    </Container>
  )
}

export default Events
