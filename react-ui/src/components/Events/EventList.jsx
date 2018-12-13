import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Container, Header, Segment, Menu, Dimmer, Loader } from 'semantic-ui-react';

// Components
import Hero from '../HomePage/presentational/Hero';
import Event from './presentational/Event';
import EventMenu from './presentational/EventMenu';

// Redux
import { selectors } from '../../store/reducers/eventsReducer';
import EventCalendarList from './EventCalendarList';

const mapStateToProps = state => {
	const { selectedCategory } = state.events;
	return {
		router: state.router,
		events: selectors.getFilteredEvents(state.events),
		categories: state.events.eventCategories,
		selectedCategory
	};
};

class EventList extends Component {
	componentDidMount = () => {
		// TODO: fetch events from backend when API is linked
	};

	/**
   * Shows placeholder text if no events are loaded, otherwise generates event
   * list
   */
	renderEvents = events => {
		return events.map(event => (
			<Grid.Column key={event.id} width={4}>
				<Event event={event} />
			</Grid.Column>
		));
	};

	render() {
		const { events, selectedCategory } = this.props;
		if (!events.length) return <Loader active />;
		return (
			<Fragment>
				<Segment basic>
					<Container>
						<EventMenu {...this.props} />
						<Route
							exact
							path="/find"
							render={() => (
								<Grid stackable columns={4}>
									{this.renderEvents(events, selectedCategory)}
								</Grid>
							)}
						/>
						<Route path="/find/calendar" component={EventCalendarList} />
					</Container>
				</Segment>
			</Fragment>
		);
	}
}

EventList.propTypes = {
	setFilter: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(EventList);
