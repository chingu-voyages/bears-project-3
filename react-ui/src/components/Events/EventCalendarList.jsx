import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
	List,
	Grid,
	Header,
	Segment,
	Container,
	Menu,
	Sticky,
	Rail,
	Image
} from 'semantic-ui-react';

const CalendarEvent = ({ event, contextRef }) => (
	<Segment style={{ display: 'flex', flexDirection: 'row', padding: '1.5em' }}>
		<div className="event-time">
			<Header as="h4" style={{ color: 'rgb(171, 171,171)' }}>
				{event.timeStarting.toLocaleTimeString('en-US', {
					hour: '2-digit',
					minute: '2-digit',
					hour12: true
				})}
			</Header>
		</div>
		<div className="event-content" style={{ marginLeft: 10 }}>
			<Header
				as="h4"
				style={{ marginBottom: 0, fontWeight: '700', color: 'rgb(171, 171, 171)' }}
			>
				{event.title.toUpperCase()}
			</Header>
			<Header as="h3" style={{ marginTop: 0, marginBottom: 15 }}>
				{event.description}
			</Header>
			<Header as="h4" style={{ fontWeight: '400' }}>
				8 Gamers Going
			</Header>
		</div>
	</Segment>
);

class EventCalendarList extends Component {
	state = {};

	handleContextRef = contextRef => this.setState({ contextRef });

	render() {
		const { events } = this.props;
		const { contextRef } = this.state;
		return (
			<Segment basic>
				<Container>
					<Grid>
						<Grid.Column width={12}>
							<div ref={this.handleContextRef}>
								{events.map(event => (
									<CalendarEvent event={event} contextRef={contextRef} />
								))}
							</div>
						</Grid.Column>
						<Grid.Column>
							<Header as="h3">Calendar</Header>
						</Grid.Column>
					</Grid>
				</Container>
			</Segment>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		events: state.events.list
	};
};

export default connect(mapStateToProps)(EventCalendarList);
