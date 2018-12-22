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
	/**
	 * Generates event list
	 */
	state = {
		selectedCategory: null
	}

	onSelectCategory = category => {
		console.log('Select Category: ', category)

		this.setState({ selectedCategory: category })
	}

	renderEvents = events => {
		return events.map(event => (
			<Grid.Column key={event.id} width={4}>
				<Event event={event} {...this.props} />
			</Grid.Column>
		))
	}
	render() {
		const { events, location } = this.props
		const { selectedCategory } = this.state
		const { pathname } = location
		const regex = /\/find\/[0-9]/g

		const where = selectedCategory
			? { AND: { eventDate_gte: new Date(), category: selectedCategory } }
			: { eventDate_gte: new Date() }

		const orderBy = 'eventDate_ASC'

		return (
			<Fragment>
				<Segment basic padded>
					<Container>
						{!pathname.match(regex) && (
							<EventMenu
								onSelectCategory={this.onSelectCategory}
								selectedCategory={selectedCategory}
								{...this.props}
							/>
						)}
						<Route
							exact
							path="/find"
							render={() => (
								<EventList
									selectedCategory={selectedCategory}
									where={where}
									orderBy={orderBy}
									{...this.props}
								/>
							)}
						/>
						<Route
							exact
							path="/find/calendar"
							render={() => (
								<EventCalendarList
									where={where}
									orderBy={orderBy}
									selectedCategory={selectedCategory}
									{...this.props}
								/>
							)}
						/>
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
	return {
		router: state.router,
		events: selectors.getFilteredEvents(state.events),
		categories: state.events.eventCategories
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
