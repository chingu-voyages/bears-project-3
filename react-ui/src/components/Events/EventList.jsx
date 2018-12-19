import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { Grid, Container, Segment } from 'semantic-ui-react'

// Components
import Event from './presentational/Event'
import EventMenu from './presentational/EventMenu'

// Redux
import { selectors } from '../../store/reducers/eventsReducer'
import { selectDay, setFilter } from '../../store/actions/eventsAction'
import EventCalendarList from './EventCalendarList'

const EventList = ({ events, selectedCategory, history }) => {
	/**
	 * Generates event list
	 */
	const renderEvents = events => {
		return events.map(event => (
			<Grid.Column key={event.id} width={4}>
				<Event event={event} history={history} />
			</Grid.Column>
		))
	}

	return (
		<Segment basic>
			<Grid stackable columns={4}>
				{renderEvents(events)}
			</Grid>
		</Segment>
	)
}

EventList.propTypes = {
	setFilter: PropTypes.func.isRequired,
	setDay: PropTypes.func
}

EventList.defaultProps = {
	setFilter
}

/**
 * Mapping state variables to props
 * @param {*} state
 */
const mapStateToProps = state => {
	const { selectedCategory } = state.events
	return {
		router: state.router,
		events: selectors.getFilteredEvents(state.events),
		categories: state.events.eventCategories,
		selectedCategory
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	...bindActionCreators(
		{
			selectDay,
			setFilter
		},
		dispatch
	)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EventList)
