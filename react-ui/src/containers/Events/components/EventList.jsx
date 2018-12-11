import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Container, Header, Segment, Menu, Card } from 'semantic-ui-react';
import { actions as eventActions, selectors } from '../../../store/events';
import Event from './Event';
import EventFilter from './EventFilter';

class EventList extends Component {
	componentDidMount = () => {
		// this.props.fetchEvents();
	};

	handleChange = (e, { value }) => {
		this.props.setFilter(value);
	};

	renderEvents = events => {
		if (!events) {
			return <h1>Loading Events</h1>;
		}

		return events.map(event => <Event event={event} />);
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
							marginBottom: '1 em'
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
					<Card.Group doubling stackable itemsPerRow={4}>
						{this.renderEvents(events, selectedCategory)}
					</Card.Group>
				</Container>
			</Segment>
		);
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	...bindActionCreators(
		{
			fetchEvents: eventActions.fetchEvents,
			setFilter: eventActions.setFilter
		},
		dispatch
	)
});

const mapStateToProps = (state, ownProps) => {
	const { selectedCategory } = state.events;

	return {
		events: selectors.getFilteredEvents(state.events),
		categories: state.events.categories,
		selectedCategory: selectedCategory
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
