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
import EventList from './EventList'
import EventCalendarList from './EventCalendarList'
import EventDetail from './EventDetail'

class EventWrapper extends Component {
	componentDidMount = () => {
		// TODO: fetch events from backend when API is linked
	}

	/**
	 * Generates event list
	 */
	renderEvents = events => {
		return events.map(event => (
			<Grid.Column key={event.id} width={4}>
				<Event event={event} {...this.props} />
			</Grid.Column>
		))
	}

	render() {
		const { events, selectedCategory, location } = this.props
		const { pathname } = location
		const regex = /\/find\/[0-9]/g
		return (
			<Fragment>
				<Segment basic padded>
					<Container>
						{!pathname.match(regex) && <EventMenu {...this.props} />}
						<Route exact path="/find" component={EventList} />
						<Route exact path="/find/calendar" component={EventCalendarList} />
					</Container>
				</Segment>
			</Fragment>
		)
	}
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

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(
		{
			selectDay
		},
		dispatch
	)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EventWrapper)
