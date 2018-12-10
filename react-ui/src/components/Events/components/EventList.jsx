import React from 'react';
import {
  Grid, Container, Header, Segment, Menu,
} from 'semantic-ui-react';
import Event from './Event';
import EventFilter from './EventFilter';

const categories = [
  'Humor',
  'Adventure',
  'Action',
  'Strategy',
  'Mind',
];

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
];

const events = Array.from({ length: 10 }, (v, i) => ({
  id: i,
  title: `Board Game ${i}`,
  category: categories[Math.floor(Math.random() * categories.length)],
  description: 'Event Description',
  color: colors[Math.floor(Math.random() * colors.length)],
  creator: {
    name: 'Someone',
  },
}));

const renderEvents = events => events.map(event => (
  <Grid.Column key={event.id} width={4}>
    <Event event={event} />
  </Grid.Column>
));

const EventList = () => (
  <Segment basic padded>
    <Container>
      <div
        className="event-list-header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1 em',
        }}
      >
        <Menu borderless fluid style={{ border: 'none', boxShadow: 'none' }}>
          <Menu.Item>
            <Header as="h2">Events for this week</Header>

          </Menu.Item>
          <Menu.Item position="right">
            <EventFilter />
          </Menu.Item>
        </Menu>
      </div>
      <Grid columns={4}>{renderEvents(events)}</Grid>
    </Container>
  </Segment>
);

export default EventList;
