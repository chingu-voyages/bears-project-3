import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Grid, Container, Header, Segment, Menu,
} from 'semantic-ui-react';

// Components
import Event from './presentational/Event';
import EventFilter from './presentational/EventFilter';

// Redux
import eventsAction from '../../store/actions/eventsAction';
import { selectors } from '../../store/reducers/eventsReducer';

const mapStateToProps = (state) => {
  const { selectedCategory } = state.events;
  return {
    events: selectors.getFilteredEvents(state.events),
    categories: state.events.eventCategories,
    selectedCategory,
  };
};

const mapDispatchToProps = dispatch => ({
  setFilter: (filter) => {
    dispatch(eventsAction(filter));
  },
});

class EventList extends Component {
  componentDidMount = () => {
    // TODO: fetch events from backend when API is linked
  };

  // Allows user to filter events based on categories listed on page
  handleChange = (e, { value }) => {
    const { setFilter } = this.props;

    if (!value || value === '') {
      setFilter('');
    }

    setFilter(value);
  };

  /**
   * Shows placeholder text if no events are loaded, otherwise generates event
   * list
   */
  renderEvents = (events) => {
    if (!events) {
      return <h1>Loading Events</h1>;
    }
    return events.map(event => (
      <Grid.Column key={event.id} width={4}>
        <Event event={event} />
      </Grid.Column>
    ));
  };

  render() {
    const { events, categories, selectedCategory } = this.props;

    return (
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
                <EventFilter
                  handleChange={this.handleChange}
                  categories={categories}
                />
              </Menu.Item>
            </Menu>
          </div>
          <Grid columns={4}>{this.renderEvents(events, selectedCategory)}</Grid>
        </Container>
      </Segment>
    );
  }
}

EventList.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
