import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Grid, Container, Segment } from 'semantic-ui-react';

// Components
import Event from './presentational/Event';
import EventMenu from './presentational/EventMenu';

// Redux
import { selectors } from '../../store/reducers/eventsReducer';
import { selectDay, setFilter } from '../../store/actions/eventsAction';
import EventCalendarList from './EventCalendarList';

/**
 * Mapping state variables to props
 * @param {*} state 
 */
const mapStateToProps = state => {
	const { selectedCategory } = state.events;
	return {
		router: state.router,
		events: selectors.getFilteredEvents(state.events),
		categories: state.events.eventCategories,
		selectedCategory
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	...bindActionCreators(
		{
			selectDay,
			setFilter
		},
		dispatch
	)
});

class EventList extends Component {
	componentDidMount = () => {
		// TODO: fetch events from backend when API is linked
	};

	/**
   * Generates event list
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
	setFilter: PropTypes.func.isRequired,
	setDay: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
